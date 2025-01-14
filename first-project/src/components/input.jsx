export const Input = ({
    disabled,
    children,
    onClick,
    type,
    placeholder
}) => {
    return (
        <span
            onClick={onClick}
            className={` text-4xl px-2 py-2 text-white cursor-pointer bg-blue-200
            }`}
        >
         <input type = {type} placeholder = {placeholder} className="rounded-2xl bg-blue-200 outline-none p-4"></input>
        </span>
    );
};
