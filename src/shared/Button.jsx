function Button({ variant = "submit", children, onClick, type = 'submit' }) {
  return (
    <button
      className={` ${
        variant === "submit"
          ? "bg-primary  [&_path]:fill-white  text-white [&:hover_path]:fill-primary hover:bg-gray-100 hover:text-primary" 
          : "bg-gray-100 text-primary [&:hover_path]:fill-gray-100  hover:bg-primary hover:text-white"
      } rounded-[60px] py-[15px] pr-[28px] pl-[25px] uppercase flex items-center gap-4
        font-semibold text-lg 
        `}
      onClick={() => onClick?.()}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
