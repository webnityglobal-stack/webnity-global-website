import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Jan", sales: 1200 },
  { name: "Feb", sales: 2100 },
  { name: "Mar", sales: 1800 },
  { name: "Apr", sales: 2800 },
  { name: "May", sales: 3200 },
  { name: "Jun", sales: 4000 },
  { name: "Jul", sales: 4600 },
  { name: "Aug", sales: 6600 },
  { name: "Sep", sales: 8600 },
  { name: "Oct", sales: 12000 },
  { name: "Nov", sales: 18000 },
  { name: "Dec", sales: 24000 },

];

const SalesGraph = () => {
  return (
    <div className="bg-[#050B18] border border-[#438bff] rounded-2xl p-6 shadow-lg shadow-[#438bff]/20">
      
      {/* Title */}
      <h2 className="text-white text-xl font-semibold mb-4">
        Sales Growth 📈
      </h2>

      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <LineChart data={data}>
            
            {/* Grid */}
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2a44" />

            {/* X Axis */}
            <XAxis dataKey="name" stroke="#aaa" />

            {/* Y Axis */}
            <YAxis stroke="#aaa" />

            {/* Tooltip */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#050B18",
                border: "1px solid #438bff",
                borderRadius: "10px",
              }}
            />

            {/* Line */}
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#438bff"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 7 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesGraph;