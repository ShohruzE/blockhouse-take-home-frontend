import CandleStickChartComponent from "@/components/CandlestickChart";
import BarChartComponent from "@/components/BarChart";
import LineChartComponent from "@/components/LineChart";
import PieChartComponent from "@/components/PieChart";

import {
  getCandlestickData,
  getBarData,
  getLineData,
  getPieData,
} from "@/lib/chartdata";

export default async function Home() {
  const candlestickData = await getCandlestickData();
  const barData = await getBarData();
  const lineData = await getLineData();
  const pieData = await getPieData();

  // console.log("candlestickData", candlestickData);
  console.log("barData", barData);
  // console.log("lineData", lineData);
  // console.log("pieData", pieData);

  return (
    <div className="h-full">
      {/* <CandleStickChartComponent data={candlestickData} /> */}
      {/*
      
      <PieChart data={pieData} /> */}
      <div className="bg-slate-300 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 p-4 rounded-lg h-full">
        <div className="bg-slate-200 h-[500px] rounded-lg p-4">
          <BarChartComponent data={barData} />
        </div>
        <div className="bg-slate-200 h-[500px] rounded-lg p-4">
          <LineChartComponent data={lineData} />
        </div>
        <div className="bg-slate-200 h-[500px] rounded-lg p-4">
          <PieChartComponent data={pieData} />
        </div>
        <div className="bg-slate-200 h-[500px] rounded-lg p-4">
          <CandleStickChartComponent data={candlestickData} />
        </div>
      </div>
    </div>
  );
}
