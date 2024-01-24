import Footer from "../../shared/Footer";
import Loader from "../../shared/Loader";
import Job from "./Job";
import useGetVacancies from "./useGetVacancies";
import useLayoutParams from "../../hooks/useLayoutParams";

function JobList() {
  const { vacancies, isLoading, count } = useGetVacancies();
  const  {layoutType} = useLayoutParams()


  if (isLoading) return <Loader />;
  return (
    <>
      <div
        className={` ${
          layoutType === "grid" ? "xl:grid-cols-3 lg:grid-cols-2" : "xl:grid-cols-2"
        } grid gap-[20px_26px] md:gap-[24px_32px] lg:gap-[28px_36px] xl:gap-[32px_40px] mt-[42px] `}
      >
        {vacancies.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <Footer total={count} variant={"vacancies"} />
    </>
  );
}

export default JobList;
