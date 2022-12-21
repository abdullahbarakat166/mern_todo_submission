require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todo");

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const PORT = 8000;

const db = mongoose.connection;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRouter);


db.on("error", console.error.bind(console, "connection error: "));

db.once("open", function () {
    console.log("Connected to db successfully. Starting server...");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});
