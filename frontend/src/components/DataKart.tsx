import type { ReactNode } from "react";

interface kartProps {
  usage: string;
  price: string | number;
  percentage: string | number;
  color: string;
  icon: ReactNode;
}

function DataKart({ usage, price, percentage, icon, color }: kartProps) {
  return (
    <div className="flex font-sans gap-5 mt-10 justify-center items-center p-5 flex-1 shadow-2xl rounded-2xl ">
      <div className={`p-5 rounded-2xl bg-${color}-200 bg-blue-200`}>{icon}</div>
      <div>
        <p>Total {usage}</p>
        <p className="text-3xl font-bold text-nowrap">
          ₹{price} <span className="font-normal text-xs px-2 py-1.5 bg-green-200 rounded-2xl">↗ +{percentage}%</span>
        </p>
        <p className="text-gray-400">via last month</p>
      </div>
    </div>
  );
}

export default DataKart;
