import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-xl lg:text-3xl font-semibold text-gradient">Jakir Hossain</h2>
          <button className="btn text-[14px] px-4 lg:btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
