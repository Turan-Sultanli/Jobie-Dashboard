import Title from "../../shared/Title";
import RecommendedSwiper from "./RecommendedSwiper";

function RecommendedJobs() {
  return (
    <div className="pt-2 sm:col-[1/-1] sm:row-[6/7] lg:col-[2/-1] lg:row-[3/4]">
      <div className="mb-[30px]">
        <Title>Recomended Jobs</Title>
      </div>
      <RecommendedSwiper />
    </div>
  );
}

export default RecommendedJobs;
