const Header = ({ header, text }) => {
  return (
    <div>
      <h1 className="font-extrabold text-[#222328] text-[32px]">{header}</h1>
      <p className="mt-2 text-[#666e75] text-[1rem] max-w-[500px]">{text}</p>
    </div>
  );
};

export default Header;
