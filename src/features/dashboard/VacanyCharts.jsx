import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useSwitchParams from "../../hooks/useSwitchParams";

function VacanyCharts({timePeriod}) {
  const { isSwitchOn: showApplication } = useSwitchParams("application", true);
  const { isSwitchOn: showInterviews } = useSwitchParams("interviews", true);
  const { isSwitchOn: showRejected } = useSwitchParams("rejected", true);

  const tickState = {
    unit: "",
    tickCount: 0,
  };

  switch (timePeriod) {
    case "year":
      tickState.unit = "Mon";
      tickState.tickCount = 12;
      break;
    case "month":
      tickState.unit = "Week";
      tickState.tickCount = 4;
      break;
    case "week":
      tickState.unit = "Day";
      tickState.tickCount = 7;
      break;
    default:
      throw new Error("");
  }

  const data = useMemo(() => {
    return Array.from({ length: tickState.tickCount }, (_, i) => {
      const total = Math.floor(Math.random() * 80 + 1);
      const interviews = Math.floor(Math.random() * total + 1);
      const rejected = total - interviews;
      return {
        name: i < 9 ? `0${i + 1}` : i + 1,
        application: total,
        interviews,
        rejected,
      };
    });
  }, [tickState.tickCount]);

  return (
    <div className="mt-10">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={16}
            tickFormatter={(n) => `${tickState.unit} ${n}`}
          />
          <YAxis axisLine={false} tickLine={false} dx={-10} />
          <Tooltip />
          <Legend
            iconType="circle"
            wrapperStyle={{
              paddingTop: 24,
              textTransform: "capitalize",
            }}
          />

          <Line
            type="monotone"
            dataKey="application"
            stroke="#4E36E2"
            dot={false}
            strokeWidth={5}
            display={showApplication ? "block" : "none"}
          />
          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#1BD084"
            dot={false}
            strokeWidth={5}
            display={showInterviews ? "block" : "none"}
          />
          <Line
            type="monotone"
            dataKey="rejected"
            stroke="#FF424D"
            dot={false}
            strokeWidth={5}
            display={showRejected ? "block" : "none"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VacanyCharts;
