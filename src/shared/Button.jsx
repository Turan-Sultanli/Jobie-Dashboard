function Button({ variant = "submit", children, onClick, type = "submit" }) {
  return (
    <button
      className={` ${
        variant === "submit"
          ? "bg-primary  text-white  hover:bg-gray-100 hover:text-primary [&:hover_path]:fill-primary dark:[&:hover_path]:fill-gray-200 [&_path]:fill-white"
          : "bg-button bg-gray-100 text-primary hover:bg-primary  hover:text-white [&:hover_path]:fill-gray-100"
      } dark:bg-button flex items-center gap-4 rounded-[60px] py-[15px] pl-[25px] pr-[28px]
        text-lg font-semibold uppercase dark:text-white dark:hover:bg-primary dark:hover:text-white dark:[&_path]:fill-gray-200
        `}
      onClick={() => onClick?.()}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
