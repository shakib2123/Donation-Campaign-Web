import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
  const allDonations = useLoaderData();
  const myDonations = JSON.parse(localStorage.getItem("donations"));
  const allTotalPrice = allDonations?.reduce((previous, donation) => {
    return previous + donation.price;
  }, 0);
  const myTotalPrice = myDonations?.reduce((previous, donation) => {
    return previous + donation.price;
  }, 0);

  const data = [
    { value: allTotalPrice, fill: "#FF444A" },
    { value: myTotalPrice, fill: "#00C49F" },
  ];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex justify-center">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="my-10 max-w-xl mx-auto">
        <div className="flex justify-between">
          <p className="text-lg flex gap-5 items-center">
            Your Donation <div className="w-24 h-4 bg-[#00C49F] rounded"></div>
          </p>
          <p className="text-lg flex gap-5 items-center">
            Total Donation <div className="w-24 h-4 bg-[#FF444A] rounded"></div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
