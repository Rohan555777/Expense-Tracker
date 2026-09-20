import { ChartNoAxesColumnIncreasingIcon, FileDown, LucideWallet } from "lucide-react";

import DataKart from "../components/DataKart";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import fetchApi from "../utils/api.js";
import { useEffect } from "react";

function DashBoard() {
  useEffect(() => {
    let game = fetchApi();
    console.log(game);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center gap-5">
        <div>
          <h2 className="text-4xl font-semibold pb-2">Welcome back, Rohan!👋</h2>
          <p>Here's a quick overview of your finaces.</p>
        </div>
        <div>september 2025</div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <DataKart
          price="1000"
          percentage={12}
          usage="Income"
          color="green"
          icon=<LucideWallet size={30} className="text-green-900" />
        />
        <DataKart
          price="14200"
          color="red"
          percentage={12}
          usage="Expenses"
          icon=<FileDown size={30} className="text-red-900" />
        />
        <DataKart
          price="10800"
          percentage={12}
          usage="Balance"
          color="blue"
          icon=<ChartNoAxesColumnIncreasingIcon size={30} className="text-blue-900 " />
        />
      </div>
      <div>
        <div>
          <IncomeExpenseChart />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
