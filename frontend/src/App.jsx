import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { ToastContainer } from 'react-toastify';
import { getTodo } from './api/todos';
import TodoDetails from './pages/TodoDetails';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/todo/:todoId",
    element: <TodoDetails />,
    loader: async ({ params }) => {
      const response = await getTodo(params.todoId);
      return response?.data;
    }
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
