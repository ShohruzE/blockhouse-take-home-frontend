"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type BarData = {
  name: string;
  value: number;
};

export default function BarChartComponent({ data }: { data: BarData[] }) {
  console.log("Bar chart component", data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={300}
        height={600}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
