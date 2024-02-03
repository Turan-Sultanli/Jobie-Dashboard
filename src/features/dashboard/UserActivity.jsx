import profile from "../../assets/images/odaDink.jpg";
import PuzzleIcon from "../../assets/icons/PuzzleIcon";
import ArrowIcon from "../../assets/icons/ArrowIcon";

import { useState } from "react";
import { timeAgo } from "../../utils/helpers";

import UserProgressBar from "./UserProgressBar";
import { progressBarData } from "../../data/adminData";

const recentActivites = [
  {
    id: 1,
    body: "Your application has accepted in",
    vacancyCount: 1,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 2,
    body: "Your application has accepted in",
    vacancyCount: 3,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 3,
    body: "Your application has accepted in",
    vacancyCount: 5,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 4,
    body: "Your application has accepted in",
    vacancyCount: 4,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 5,
    body: "Your application has accepted in",
    vacancyCount: 8,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
  {
    id: 6,
    body: "Your application has accepted in",
    vacancyCount: 6,
    icon: <PuzzleIcon />,
    timestamp: new Date(12, 8, 2023).getTime(),
  },
  {
    id: 7,
    body: "Your application has accepted in",
    vacancyCount: 7,
    icon: <PuzzleIcon />,
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 8,
    body: "Your application has accepted in",
    vacancyCount: 12,
    icon: <PuzzleIcon />,
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 9,
    body: "Your application has accepted in",
    vacancyCount: 5,
    icon: <PuzzleIcon />,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).getTime(),
  },
  {
    id: 10,
    body: "Your application has accepted in",
    vacancyCount: 11,
    icon: <PuzzleIcon />,
    timestamp: new Date(2023, 5, 23).getTime(),
  },
];

function UserActivity() {
  const [show, setShow] = useState(false);

  const formattedActivities = recentActivites.sort(
    (a, b) => b.timestamp - a.timestamp,
  );

  return (
    <div className="flex h-min flex-col gap-3 rounded-[20px] bg-card sm:col-[1/-1] sm:row-[4/5] sm:flex-row sm:gap-0 lg:col-[1/2] lg:row-[2/3] lg:flex-col">
      <div className="basis-5/12 p-[36px_40px_26px]">
        <div className="flex flex-col items-center">
          <div className=" grid h-[132px] w-[132px] place-content-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-fuchsia-600 p-4">
            <div className="mr-auto h-[118px] w-[118px] overflow-hidden rounded-full">
              <img
                src={profile}
                alt="profile"
                width={118}
                height={188}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="mt-5 text-[22px] font-medium leading-8 dark:text-white">
             
              Oda Dink
            </h3>
            <span className="text-base leading-6 text-gray-900 dark:text-white">
              Programmer
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <UserProgressBar progress={progressBarData} />
        </div>
      </div>

      <div className="relative basis-7/12 rounded-[20px] p-[26px]">
        <h3 className="mb-[22px] text-lg font-medium dark:text-white">Recent Activities</h3>
        <ul
          className={`custom-scrollbar flex flex-col gap-4 overflow-auto transition-all duration-300 lg:overflow-hidden ${
            !show ? "h-[420px]" : "h-[510px] overflow-y-auto"
          } `}
        >
          {formattedActivities.map((activity) => {
            return (
              <li className="flex items-center gap-4" key={activity.id}>
                <div className="rounded-[20px] border border-gray-200 p-[18px] dark:border-white">
                  {activity.icon}
                </div>
                <div>
                  <p className="mb-2 font-semibold leading-5 text-gray-600 dark:text-gray-200 ">
                    {activity.body}
                    <strong className="text-gray-800 dark:text-white">
                    {""}  {activity.vacancyCount} Vacancy
                    </strong>
                  </p>
                  <span className="text-gray-300">
                    {timeAgo(activity.timestamp)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShow((show) => !show)}
          className={`dark:bg-button dark:[&_path]:fill-white absolute left-0 right-0 z-[1] mx-auto hidden h-[60px] w-[60px] place-content-center  
        overflow-y-auto rounded-full bg-white shadow-[0px_12px_24px_0_rgba(0,0,0,0.25)] transition-all duration-500 lg:grid lg:overflow-hidden  ${
          show ? "rotate-180 " : ""
        }`}
        >
          <span className="[&>svg]:rotate-[-90] ">
            <ArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default UserActivity;
