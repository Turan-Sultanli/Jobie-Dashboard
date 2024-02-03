import Chevron from "../../assets/icons/Chevron";
import SwitchBtn from "../../shared/SwitchBtn";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Title from "../../shared/Title";

const data = [
  {
    name: "01",
    hired: 4000,
    views: 2400,
  },
  {
    name: "02",
    hired: 3000,
    views: 1398,
  },
  {
    name: "03",
    hired: 2000,
    views: 9800,
  },
  {
    name: "04",
    hired: 2780,
    views: 3908,
  },
  {
    name: "05",
    hired: 1890,
    views: 4800,
  },
  {
    name: "06",
    hired: 2390,
    views: 3800,
  },
  {
    name: "07",
    hired: 3490,
    views: 7300,
  },
  {
    name: "08",
    hired: 390,
    views: 3800,
  },
  {
    name: "09",
    hired: 1490,
    views: 5300,
  },
  {
    name: "10",
    hired: 3490,
    views: 4300,
  },
  {
    name: "11",
    hired: 2390,
    views: 3800,
  },
  {
    name: "12",
    hired: 2490,
    views: 3300,
  },
];

function VisitorGraph() {
  return (
    <article className="bg-card h-fit rounded-[38px] p-[26px_31px_29px_21px] lg:col-[1/3] lg:row-[3/4] xl:col-[1/4] xl:row-[3/4]">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <Title className="whitespace-nowrap text-xl font-medium">
            Visitor Graph
          </Title>
        </div>
        <div className="flex flex-wrap justify-between gap-2 whitespace-nowrap">
          <SwitchBtn label="Show Details" id={"details"} />
          <div
            className="relative "
          >
            <select
              className="h-10 w-[166px] appearance-none rounded-[48px] border  border-solid border-primary-300 bg-transparent pl-[22px] text-base
            font-medium text-gray-700 focus:outline-primary md:h-11 lg:h-12 dark:text-gray-200"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <span className="absolute lg:top-[2px] top-0 translate-y-1/2 right-4">
              <Chevron />
            </span>
          </div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -40,
              bottom: -10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tick={false} tickLine={false} axisLine={false} />
            <Tooltip />
            {/* <Legend
              verticalAlign="top"
              align="left"
              iconType="circle"
              wrapperStyle={{ marginTop: -6, marginLeft: 30 }}
            /> */}
            <Line
              name="View Profile"
              type="monotone"
              dataKey="views"
              stroke="#4e47d6"
              activeDot={{ r: 8 }}
              strokeWidth={4}
              dot={false}
            />
            <Line
              name="Hire"
              type="monotone"
              dataKey="hired"
              stroke="#2d9c58"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default VisitorGraph;
