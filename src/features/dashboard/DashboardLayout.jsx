import FeaturedCompanies from "./FeaturedCompanies";
import RecommendedJobs from "./RecommendedJobs";
import VacancyStats from "./VacancyStats";
import Widgets from "./Widgets";
import UserActivity from "./userActivity";

function DashboardLayout() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:grid-rows-[170px_170px_auto_auto_auto_auto]  lg:grid-cols-4 lg:grid-rows-[170px_580px_auto_auto] xl:gap-8 xxl:gap-10">
      <Widgets />
      <UserActivity />
      <VacancyStats />
      <RecommendedJobs />
      <FeaturedCompanies />
    </section>
  );
}

export default DashboardLayout;
