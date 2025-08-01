import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  time: string;
  price: number;
}

interface CryptoChartProps {
  data: DataPoint[];
  name: string;
}

export default function CryptoChart({ data, name }: CryptoChartProps) {
  return (
    <div className="p-4 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
      <h3 className="text-white mb-2">{name}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#00bcd4" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
