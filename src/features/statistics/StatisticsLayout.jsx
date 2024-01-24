import JobTrends from "./JobTrends";
import Network from "./Network";
import ProfileStrength from "./ProfileStrength";
import Stats from "./Stats";
import VisitorGraph from "./VisitorGraph";

function StatisticsLayout() {
  return (
    <section>
      <div
        className="grid gap-6 lg:grid-cols-4 lg:grid-rows-[226px_226px_226px_auto_auto] xl:grid-cols-6  xl:grid-rows-[226px_226px_auto_auto] 
      xl:gap-8 xxl:gap-10  [&_article]:shadow-[0px_4px_0px_0px_rgba(0,0,0,0.04)]"
      >
        <ProfileStrength />
        <VisitorGraph />
        <Stats />
        <Network />
        <JobTrends />
      </div>
    </section>
  );
}

export default StatisticsLayout;
