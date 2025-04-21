import React, { createContext, useEffect, useState } from "react";
import api from "../utils/api";

// Context Oluştur
const CoinContext = createContext();
const CoinContextProvider = ({ children }) => {
  // Verileri alacağımız pariteyi belirlemek için state oluşturduk
  const [currency, setCurrency] = useState({
    id: "yhjMzLPhuIDl",
    symbol: "$",
  });
  const [allCoins, setAllCoins] = useState([]);
  const [error, setError] = useState(null);

  // Api'dan verileri alacak fonksiyon
  const fetchAllCoin = () => {
    api
      .get(
        `/coins?referenceCurrencyUuid=${currency.id}&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`
      )
      .then((res) => setAllCoins(res.data.data.coins))
      .catch((err) => setError(err.message));
  };

  // Sayfa yüklendiğinde api isteği at
  useEffect(() => {
    fetchAllCoin();
  }, [currency]);
  return (
    <CoinContext.Provider value={{ currency, setCurrency, allCoins, error }}>
      {/*  */}
      {children}
    </CoinContext.Provider>
  );
};

export { CoinContext, CoinContextProvider };
