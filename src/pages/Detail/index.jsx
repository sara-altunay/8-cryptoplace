import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../utils/api";
import { CoinContext } from "../../context/CoinContext";
import Info from "../../components/Info";
import millify from "millify";
import LineChart from "../../components/Chart";

const Detail = () => {
  
  const { currency } = useContext(CoinContext);
  
  const { coinId } = useParams();

  
  const [historicalData, setHistoricalData] = useState([]);
  const [coinData, setCoinData] = useState(null);

  
  const getHistoricalData = () => {
    api
      .get(
        `coin/${coinId}/history?referenceCurrencyUuid=${currency.id}&timePeriod=24h`
      )
      .then((res) => setHistoricalData(res.data.data.history.slice(0, 10)))
      .catch((err) => console.log(err.message));
  };
  
  const getCoinData = () => {
    api
      .get(
        `/coin/${coinId}?referenceCurrencyUuid=${currency.id}&timePeriod=24h`
      )
      .then((res) => setCoinData(res.data.data.coin))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getHistoricalData();
    getCoinData();
  }, []);

  
  return (
    <div className="bg-[#0D0E2B] px-5 min-h-screen">
      {/* Image && Name */}
      <div className="flex flex-col items-center gap-5 py-24 mx-auto">
        <img className="size-30" src={coinData?.iconUrl} alt={coinData?.name} />
        <p className="text-4xl font-bold text-[#ffcc00]">
          {coinData?.name} ( {coinData?.symbol} )
        </p>
      </div>

      {/* Chart */}
      <div className="max-w-[700px] mx-auto h-[300px]">
        <LineChart historicalData={historicalData} />
      </div>

      {/* Info */}
      <div className="max-w-[700px] mx-auto my-12 flex flex-col p-6 rounded-lg shadow-md bg-[#121236]">
        <Info label="Piyasa Sıralaması" value={coinData?.rank} />
        <Info label="Güncel Fiyat" value={Number(coinData?.price).toFixed(2)} />

        <Info
          label="Tüm Zamanların En Yüksek Değeri"
          value={`${currency.symbol} ${Number(
            coinData?.allTimeHigh.price
          ).toFixed(2)}`}
        />
        <Info label="Market Değeri" value={millify(coinData?.marketCap)} />
      </div>
    </div>
  );
};

export default Detail;