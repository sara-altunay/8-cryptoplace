import React, { useContext } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Header = () => {
 
  const { setCurrency } = useContext(CoinContext);

 
  const currencyHandler = (e) => {
    const selectedCurrency = e.target.value;

    console.log(selectedCurrency);

    switch (selectedCurrency) {
      case "usd":
        setCurrency({
          id: "yhjMzLPhuIDl",
          symbol: "$",
        });
        break;
      case "eur":
        setCurrency({
          id: "5k-_VTxqtCEI",
          symbol: "€",
        });
        break;
    }
  };
  return (
    <header className="flex items-center justify-between px-[10%] py-5 border-b-2 border-[#3c3c3c ] bg-[#1A1A40] gap-3">
      {/* Logo */}
      <Link to="/">
        <img src="/logo.png" className="w-[150px] md:w-[200px] " alt="" />
      </Link>

      {/* Navigation */}

      <nav className="hidden lg:flex gap-10">
        <NavLink
          to="/"
          className="cursor-pointer text-xl hover:text-[#ffde4d] transition duration-300">
          Home
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer text-xl hover:text-[#ffde4d] transition duration-300">
          Features
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer text-xl hover:text-[#ffde4d] transition duration-300">
          Pricing
        </NavLink>
        <NavLink
          to="/"
          className="cursor-pointer text-xl hover:text-[#ffde4d] transition duration-300">
          Blog
        </NavLink>
      </nav>

      {/* Select && Button */}
      <div className="flex items-center gap-3 px-5 md:px-8">
        {/* Select */}
        <select
          onChange={currencyHandler}
          className="p-[5px_8px] rounded-md border-2 border-white bg-transparent">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        {/* Button */}
        <button className="max-md:hidden flex items-center gap-2 md:gap-[8px] px-2 py-3 whitespace-normal rounded-[20px] bg-white text-black cursor-pointer hover:bg-zinc-400 transition duration-300 text-lg">
          <span className="whitespace-pre">Sign up</span>
          <MdArrowOutward className="size-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
