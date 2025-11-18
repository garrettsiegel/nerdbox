interface ButtonProps {
  children: string;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button 
      className="px-2 py-1 bg-blue-500 text-white text-[14px] font-bold rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      {children}
    </button>
  );
}