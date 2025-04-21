import React from "react";

const Info = ({ label, value }) => {
  return (
    <div className="flex justify-between border-b py-4 ">
      <p className="text-[#ffcc00] text-lg">{label} </p>
      <p>{value}</p>
    </div>
  );
};

export default Info;
