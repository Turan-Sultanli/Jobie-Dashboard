import Dots from "../../assets/icons/Dots";
import Title from "../../shared/Title";
import UserProgressBar from "../dashboard/UserProgressBar";


const jobTrendsData = [
  {
    id:1,
    label: "Engineer",
    value: 0.63
  },
  {
    id:2,
    label: "Designer",
    value: 0.51
  },
  {
    id:3,
    label: "Manager",
    value: 0.43
  },

  {
    id:4,
    label: "Programmer",
    value: 0.73
  },
]


function JobTrends() {
  return (
    <article className="p-[36px_36px_42px] rounded-[20px] bg-card xl:col-[4/7] xl:row-[4/-1] lg:col-[3/-1] lg:row-[5/-1]">
      <div className="flex items-center justify-between">
        <Title>Job Trends</Title>
        <button>
          <Dots />
        </button>
      </div>
      <div className="flex items-center gap-[70px] mt-14">
        <UserProgressBar progress={jobTrendsData} variant="jobTrends" />
      </div>
    </article>
  );
}

export default JobTrends;
