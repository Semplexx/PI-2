import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type Props = {
  name: string;
  data: { time: string; price: number }[];
};

const CryptoChart: React.FC<Props> = ({ name, data }) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" hide />
          <YAxis domain={["dataMin", "dataMax"]} hide />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoChart;
