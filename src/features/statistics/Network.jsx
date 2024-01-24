import Dots from "../../assets/icons/Dots";
import Title from "../../shared/Title";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";
import { formatNumbers } from "../../utils/helpers";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const data = [
  { name: "Person", value: 3_334 },
  { name: "Companies", value: 1567 },
];

//Nurlan
const LABEL = ((data[1].value / data[0].value) * 100).toFixed(0);

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <ul className="flex flex-col xl:gap-9 lg:gap-7 md:gap-5 gap-3">
      {payload?.map((entry, index) => {
        const {
          payload: {
            payload: { payload },
          },
        } = entry;
        return (
          <li
            key={`item-${index}`}
            className="flex items-center gap-2 md:gap-3 lg:gap-4"
          >
            <span
              className={`h-8 w-8 rounded-full custom-legend-${entry.value}`}
            />

            <div>
              <span className="text-sm font-medium capitalize text-gray-900">
                {entry.value}
              </span>
              <p className="text-xl font-semibold text-black">
                {formatNumbers(payload.value, { maximumFractionDigits: 0 })}
                {payload.name}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const COLORS = ["#FFAB2D", "#374C98"];

function Network() {
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <article className="rounded-[20px] bg-white p-[36px_36px_42px] lg:col-[3/-1] lg:row-[4/5] xl:col-[4/-1] xl:row-[3/4]">
      <div className="mb-2 flex items-center justify-between">
        <Title>Network</Title>
        <button>
          <Dots />
        </button>
      </div>
      <div className="[&_path]:focus:outline-transparent [&_tspan]:text-lg [&_tspan]:font-semibold [&_tspan]:text-black">
        <ResponsiveContainer
          width="100%"
          height={isAboveSmallScreens ? 220 : 320}
        >
          <PieChart width={350} height={350}>
            <Legend
              content={renderLegend}
              iconType="circle"
              iconSize={25}
              layout={isAboveSmallScreens ? "vertical" : "horizontal"}
              verticalAlign={isAboveSmallScreens ? "middle" : "top"}
              align="left"
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={90}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              <Label
                value={`${LABEL}%`}
                position="center"
                style={{
                  textAnchor: "middle",
                  fill: "black",
                  fontWeight: 600,
                }}
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  name={entry.name === "Companies" ? "following" : "followers"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}

export default Network;

/*
import ActionButton from "@/shared/ActionButton";
import Title from "@/shared/Title";
import { formatNumbers } from "@/utils/helpers";
import { ReactText } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Label,
  DefaultLegendContentProps,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const data = [
  { name: "Person", value: 3_334 },
  { name: "Companies", value: 567 },
];

const COLORS = ["#FFAB2D", "#374C98"];

const LABEL = ((data[1].value / data[0].value) * 100).toFixed(0);

const renderLegend = (props: DefaultLegendContentProps) => {
  interface CustomPayload extends Payload {
    value: string;
    payload: {
      strokeDasharray: ReactText; // Add this property to match the structure
      value?: string;
      payload: {
        payload: {
          value: number;
          name: string;
        };
      };
    };
  }

  const { payload } = props as unknown as { payload: Array<CustomPayload> };

  return (
    <ul className="flex flex-col gap-9">
      {payload?.map((entry, index) => {
        const {
          payload: {
            payload: { payload },
          },
        } = entry;
        return (
          <li key={`item-${index}`} className="flex items-center gap-4">
            <span
              className={`rounded-full w-8 h-8 custom-legend-${entry.value}`}
            />

            <div>
              <span className="text-sm font-medium text-gray-900 capitalize">
                {entry.value}
              </span>
              <p className="text-lg text-black font-semibold">
                {formatNumbers(payload.value, { maximumFractionDigits: 0 })}{" "}
                {payload.name}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default function Network() {
  return (
    <article data-stats="network">
      <div className="flex items-center justify-between">
        <Title>Network</Title>
        <ActionButton />
      </div>
      <div className="[&_tspan]:text-lg [&_tspan]:text-black [&_tspan]:font-semibold [&_path]:focus:outline-transparent">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart width={250} height={250}>
            <Legend
              content={renderLegend}
              iconType="circle"
              iconSize={25}
              layout="vertical"
              verticalAlign="middle"
              align="left"
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
            >
              <Label value={`${LABEL}%`} position="center" />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  name={entry.name === "Companies" ? "following" : "followers"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </article>
  );
}
*/
