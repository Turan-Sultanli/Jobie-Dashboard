import { CircularProgressbar } from "react-circular-progressbar";

const progressBarStyles = {
  // Customize the root svg element
  root: {},
  // Customize the path, i.e. the "completed progress"
  path: {
    // Path color
    stroke: `#FF8E26`,
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Customize transition animation
    transition: "stroke-dashoffset 0.5s ease 0s",
    // Rotate the path
    transform: "rotate(-0.75turn)",
    transformOrigin: "center center",
    strokeWidth: 12,
  },
  // Customize the circle behind the path, i.e. the "total progress"
  trail: {
    // Trail color
    stroke: "#f0f0f0",
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: "butt",
    // Rotate the trail
    transform: "rotate(0.25turn)",
    transformOrigin: "center center",
  },
  // Customize the text
  text: {
    // Text color
    fill: "#000",
    // Text size
    fontSize: "22px",
    fontWeight: 600,
    translate: "-18px 8px",
  },
  // Customize background - only used when the `background` prop is true
  background: {
    fill: "#3e98c7",
  },
};

function UserProgressBar({ progress, variant = "user" }) {
  const isJobTrends = variant === "jobTrends";

  return (
    <div
      className={`w-full ${isJobTrends ? "grid gap-3 grid-cols-1 justify-items-center xs:grid-cols-2 xs:grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 md:grid-cols-4 md:grid-rows-1 lg:grid-cols-2 lg:grid-rows-2" : "flex items-center justify-between"} `}
    >
      {progress?.map((data) => {
        let color;

        switch (data.label) {
          case "Js":
            color = "#FF8E26";
            break;
          case "React":
            color = "#3EA834";
            break;
          case "Ts":
            color = "#22AC93";
            break;
          default:
            color = " #40189D";
        }

        return (
          <div
            className={`${isJobTrends ? "col-span-1 px-12 xs:px-0" : "h-fit max-h-[120px] w-fit max-w-[120px] flex-1"} relative p-2`}
            key={data.id}
          >
            <CircularProgressbar
              value={data.value}
              maxValue={1}
              text={`${data.value * 100}%`}
              styles={{
                ...progressBarStyles,
                root: {
                  ...progressBarStyles.root,
                  width: isJobTrends ? 110 : "auto",
                },
                path: { ...progressBarStyles.path, stroke: color },
              }}
            />
            <div
              className={`${isJobTrends ? "" : "absolute bottom-[-24px] left-0 right-0"}  text-center font-semibold`}
            >
              {data.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default UserProgressBar;
