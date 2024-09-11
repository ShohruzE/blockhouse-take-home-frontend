"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type CandlestickData = {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

export default function CandleStickChartComponent({
  data,
}: {
  data: CandlestickData[];
}) {
  console.log("data", data);

  const renderCustomBar = (props: any) => {
    const { x, y, width, height, fill, payload } = props;
    const isGrowing = payload.close > payload.open;
    const color = isGrowing ? "green" : "red";
    const openY =
      y +
      height *
        (1 - (payload.open - payload.low) / (payload.high - payload.low));
    const closeY =
      y +
      height *
        (1 - (payload.close - payload.low) / (payload.high - payload.low));

    return (
      <g>
        <line
          x1={x + width / 2}
          x2={x + width / 2}
          y1={y}
          y2={y + height}
          stroke={color}
          strokeWidth={2}
        />
        <rect
          x={x}
          y={Math.min(openY, closeY)}
          width={width}
          height={Math.abs(closeY - openY)}
          fill={color}
        />
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="low" fill="transparent" shape={renderCustomBar} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
