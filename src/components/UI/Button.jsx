const Button = ({children}) => {
  return (
    <button className="bg-white text-[#212529] px-5 py-2 rounded font-bold hover:border hover:border-[white] hover:bg-[#212529] hover:text-[white] duration-300 mt-5">
      {children}
    </button>
  );
};

export default Button;
