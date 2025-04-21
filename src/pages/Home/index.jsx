import React, { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { FaSearch } from "react-icons/fa";
import CoinItem from "../../components/CoinItem";
import api from "../../utils/api";
const Home = () => {
  
  const { allCoins, currency } = useContext(CoinContext);
  
  const [coins, setCoins] = useState([allCoins]);


  useEffect(() => {
    setCoins(allCoins);
  }, []);

  
  const handleSubmit = (e) => {
    
    e.preventDefault();

    
    const query = e.target[0].value.toLowerCase();

    
    const filtredCoins = allCoins.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setCoins(filtredCoins);
  };

  return (
    <div className="px-4">
      {/* Top Area */}
      <div className="max-w-2xl mx-auto my-16 flex flex-col items-center gap-6 ">
        <h1 className="text-4xl font-bold leading-tight text-center">
          Largest <br /> Crypto Marketplace
        </h1>
        <p className="w-3/4 text-[#e3e3e3] leading-7">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <input
            className="flex-1 px-5 py-2 text-base text-black"
            type="search"
            placeholder="Search crypto ...."
          />
          <button className="bg-[#7927ff] px-5 py-2 font-semibold hover:opacity-90">
            <FaSearch />
          </button>
        </form>
      </div>

      {/* List */}
      <div className="max-w-4xl mx-auto bg-[#141414] rounded-lg shadow-lg overflow-hidden">
        {/* Info */}
        <div className="grid grid-cols-4 md:[0.5fr_2fr_1fr_1fr] max-md:grid-cols-3 p-4 bg-[#222] font-semibold">
          <p>#</p>
          <p>Coins</p>
          <p className="text-center">Price</p>
          <p className="hidden md:block text-right">24H Change</p>
        </div>

        {/* Coin */}

        {coins.map((item, key) => (
          <CoinItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
