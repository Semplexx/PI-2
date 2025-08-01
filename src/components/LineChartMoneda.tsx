import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Datos simulados (puedes modificar o conectar API luego)
const data = [
  { date: "2024-07-01", USD: 1.00, EUR: 0.92, BTC: 0.000015 },
  { date: "2024-07-02", USD: 1.01, EUR: 0.93, BTC: 0.000016 },
  { date: "2024-07-03", USD: 1.03, EUR: 0.94, BTC: 0.000014 },
  { date: "2024-07-04", USD: 1.00, EUR: 0.91, BTC: 0.000017 },
  { date: "2024-07-05", USD: 0.99, EUR: 0.90, BTC: 0.000018 },
];

const LineChartMoneda: React.FC = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Histórico de monedas</h2>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="USD" stroke="#8884d8" />
          <Line type="monotone" dataKey="EUR" stroke="#82ca9d" />
          <Line type="monotone" dataKey="BTC" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartMoneda;