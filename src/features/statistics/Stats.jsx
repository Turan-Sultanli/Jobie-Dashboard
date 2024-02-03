import StatsCalendarICon from "../../assets/icons/StatsCalendarICon";
import StatsChatIcon from "../../assets/icons/StatsChatIcon";
import StatsEyeIcon from "../../assets/icons/StatsEyeIcon";
import StatsPhoneIcon from "../../assets/icons/StatsPhoneIcon";
import StatsReplyIcon from "../../assets/icons/StatsReplyIcon";
import StatsSuitcaseIcon from "../../assets/icons/StatsSuitcaseIcon";
import { formatNumbers } from "../../utils/helpers";

const stats = [
  {
    id: "profile-viewed",
    value: 456_000,
    icon: <StatsEyeIcon />,
    title: "Profile Viewed",
    extra: 24,
  },
  {
    id: "unread-messages",
    value: 28,
    icon: <StatsChatIcon />,
    title: "Unread Messages",
  },
  {
    id: "app-sent",
    value: 651,
    icon: <StatsSuitcaseIcon />,
    title: "Application Sent",
  },
  {
    id: "app-answered",
    value: 24,
    icon: <StatsReplyIcon />,
    title: "App. Answered",
  },
  {
    id: "interviewed",
    value: 255,
    icon: <StatsCalendarICon />,
    title: "Interviewed",
  },
  {
    id: "hired",
    value: 72,
    icon: <StatsPhoneIcon />,
    title: "Hired",
  },
];

function Stats() {
  return (
    <>
      {stats.map((stat) => (
        <Stat key={stat.id} stat={stat} extra={stat.extra} />
      ))}
    </>
  );
}

function Stat({ extra = null, stat }) {
  const { value, icon, title } = stat;
  return (
    <article className="rounded-[38px] bg-card p-[26px_32px_28px_26px] flex flex-col justify-between min-h-[180px]">
      <div>
        <h6 className="text-base text-[#414141] dark:text-gray-300">{title}</h6>
        <p className="text-3xl font-semibold dark:text-white">
          {formatNumbers(value, { notation: "compact" })}
        </p>
      </div>
      <div className="flex gap-5">
        <div>{icon}</div>
        <div>
          {extra && (
            <>
              <p
                className={`text-base font-semibold ${
                  extra > 0 ? "text-green-500" : "text-red-500"
                } `}
              >
                {extra > 0 ? "+" : "-"}
                {extra}%
              </p>
              <span className="text-xs font-light text-gray-200">
                than last month
              </span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default Stats;
