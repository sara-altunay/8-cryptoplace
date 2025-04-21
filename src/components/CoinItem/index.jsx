import React, { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const CoinItem = ({ item }) => {
  
  const { currency } = useContext(CoinContext);
  return (
    <Link
      to={`/coin/${item.uuid}`}
      className="grid grid-cols-4 md:[0.5fr_2fr_1fr_1fr] max-md:grid-cols-3 p-4 items-center border-b border-[#333] hover:bg-[#1f1f1f] transition duration-300 cursor-pointer">
      {/* Rank */}
      <p>{item.rank} </p>
      {/* Name && Image */}
      <div className="flex items-center gap-3">
        <img className="size-6" src={item.iconUrl} alt={item.name} />
        <span className="font-semibold">{item.name}</span>
      </div>

      {/* Price */}
      <p className="text-center">
        {currency.symbol} {Number(item.price).toFixed(2)}
      </p>

      {/* 24H Change */}
      <p
        className={`hidden md:block text-right ${
          item.change > 0 ? "text-green-500" : "text-red-500"
        } `}>
        {item.change}
      </p>
    </Link>
  );
};

export default CoinItem;
