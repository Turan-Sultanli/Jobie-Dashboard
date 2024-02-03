import Dots from "../../assets/icons/Dots";
import Title from "../../shared/Title";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const strengthData = [
  {
    name: "Sun",
    sent: 4000,
    answered: 2400,
    hired: 2400,
  },
  {
    name: "Mon",
    sent: 3000,
    answered: 1398,
    hired: 2210,
  },
  {
    name: "Tue",
    sent: 2000,
    answered: 9800,
    hired: 2290,
  },
  {
    name: "Wed",
    sent: 2780,
    answered: 3908,
    hired: 2000,
  },
  {
    name: "Thu",
    sent: 1890,
    answered: 4800,
    hired: 2181,
  },
  {
    name: "Fri",
    sent: 2390,
    answered: 3800,
    hired: 2500,
  },
  {
    name: "Sat",
    sent: 3490,
    answered: 4300,
    hired: 2100,
  },
];

const renderLegend = (props) => {
  const { payload } = props;

  const TotalSent = strengthData.reduce((sum, day) => sum + day.sent, 0);
  const TotalAnswered = strengthData.reduce(
    (sum, day) => sum + day.answered,
    0,
  );
  const TotalHired = strengthData.reduce((sum, day) => sum + day.hired, 0);

  const strengthPercentage = strengthData.map((day) => {
    return {
      sent: (day.sent / TotalSent) * 100,
      answered: (day.answered / TotalAnswered) * 100,
      hired: (day.hired / TotalHired) * 100,
    };
  });


  return (
    <div className="mt-4 pl-6">
      <h4 className="mb-2 text-base font-medium capitalize text-gray-100">Legend</h4>
      <ul className="mt-2 flex flex-col gap-4 ">
        {payload?.map((entry, index) => {
          const {
            payload: { name },
          } = entry;
          const percentage = strengthPercentage[0][entry.dataKey];
          return (
            <li
              key={`item-${index}`}
              className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4"
            >
              <span
                className={`min-h-6 min-w-8 rounded-xl custom-legend-${entry.dataKey} `}
              />

              <span className="whitespace-nowrap text-lg font-medium capitalize text-black dark:text-gray-100">
                {percentage.toFixed(0)} %
              </span>
              <p className="whitespace-nowrap text-sm font-medium capitalize text-gray-200">
                {name}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function ProfileStrength() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");



  return (
    <article className="rounded-[20px] bg-card p-[36px_34px_32px] lg:col-[1/3]  lg:row-[1/3] xl:col-[1/4] xl:row-[1/3]">
      <div className="mb-2 flex items-center justify-between">
        <Title>Profile Strength</Title>
        <button>
          <Dots />
        </button>
      </div>
      <div>
        <ResponsiveContainer
          width="100%"
          height={isAboveSmallScreens ? 400 : 650}
        >
          <BarChart
            width={500}
            height={300}
            data={strengthData}
            margin={{
              top: -20,
              right: isAboveSmallScreens ? 0 : 30,
              left: -30,
              bottom: 5,
            }}
            barCategoryGap={10}
          >
            <XAxis dataKey="name" axisLine={false} tickLine={false} dy={5} />
            <YAxis tick={false} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend
              content={renderLegend}
              iconType="circle"
              iconSize={15}
              layout={isAboveSmallScreens ? "vertical" : "horizontal"}
              wrapperStyle={{
                marginLeft: isAboveSmallScreens ? 0 : 50,
                width: "40%",
                fontSize: isAboveSmallScreens ? 16 : 12,
              }}
              verticalAlign={isAboveSmallScreens ? "middle" : "bottom"}
              align={isAboveSmallScreens ? "right" : "left"}
              
            />

            <Bar
              name="Answered"
              dataKey="answered"
              stackId="a"
              fill="  #2BC155"
              radius={[0, 0, 10, 10]}
            />
            <Bar name="Hired" dataKey="hired" stackId="a" fill="#3F9AE0" />
            <Bar
              name="Sent"
              dataKey="sent"
              stackId="a"
              fill="#FF9B52"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default ProfileStrength;
