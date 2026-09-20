import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export type MonthlyData = {
  month: string;
  income: number;
  expenses: number;
};

type IncomeExpenseChartProps = {
  data: MonthlyData[];
};

const IncomeExpenseChart = ({ data }: IncomeExpenseChartProps) => {
  return (
    <div className="w-full rounded-2xl bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">Income vs Expenses</h2>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
            barGap={8}
          >
            <CartesianGrid stroke="#e5e7eb" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
              tickFormatter={(value) => (value >= 1000 ? `${value / 1000}K` : value)}
            />

            <Tooltip
              formatter={(value, name) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                name === "income" ? "Income" : "Expenses",
              ]}
            />

            <Bar dataKey="income" fill="#22a86b" radius={[4, 4, 0, 0]} maxBarSize={22} />

            <Bar dataKey="expenses" fill="#ef4444" radius={[4, 4, 0, 0]} maxBarSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-3 flex justify-end gap-5 text-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#22a86b]" />
          <span className="text-gray-600">Income</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ef4444]" />
          <span className="text-gray-600">Expenses</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenseChart;
