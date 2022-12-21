import { clsx } from 'clsx';

export default function TextField({
    onChange,
    value,
    placeholder,
    multi,
    className,
    required
}) {
    const Component = multi ? "textarea" : "input";
    return (
        <div>
            <Component
                className={clsx({
                    "border-slate-500 focus:border-0 focus:outline-1 focus:outline-slate-500  bg-slate-800 p-2 rounded-md w-full": true,
                    "h-24": multi,
                    [className]: true
                })}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
            />

        </div>
    )
}