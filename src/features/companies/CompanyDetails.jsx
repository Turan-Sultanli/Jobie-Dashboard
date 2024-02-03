import CloseButton from "../../assets/icons/CloseButton";
import Logo from "../../shared/Logo";
import profile from "../../assets/images/tesla.jpg";
import Title from "../../shared/Title";
import AvatarDeatils from "../../assets/icons/AvatarDeatils";
import StarDetails from "../../assets/icons/StarDetails";
import LocationDetails from "../../assets/icons/LocationDetails";
import { useSearchParams } from "react-router-dom";
import useGetCompany from "./useGetCompany";
import Loader from "../../shared/Loader";

function CompanyDetails() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = Number(searchParams.get("company") ?? null);

  const { company, isLoading } = useGetCompany(selectedId);

  function handleClose() {
    searchParams.delete("company");

    // 👇️ update state after
    setSearchParams(searchParams);
  }

  if (isLoading) return <Loader />;

  return (
    <div
      className={`${
        selectedId === null
          ? "hidden"
          : "relative rounded-[20px] bg-card p-[24px_24px_30px] "
      } flex flex-col gap-4 md:flex-row lg:flex-col `}
    >
      <div className="basis-full">
        <button
          onClick={handleClose}
          className="absolute right-7 top-6 md:left-7 lg:left-auto lg:right-7"
        >
          <CloseButton />
        </button>
        <div className="flex flex-col items-center gap-[30px] lg:mt-[34px]">
          <Logo w={134} h={134} src={profile} />
          <div className="text-center">
            <Title>Highspeed Studios</Title>
            <p className="dark:text-gray-300">Creative Design Agency</p>
          </div>
        </div>
        <div>
          <button
            className="mt-[26px] h-[58px] w-full whitespace-nowrap rounded-[48px] border border-solid border-primary 
          bg-white p-[14px_130px] text-lg font-semibold text-primary transition-all duration-200 hover:bg-primary
           hover:text-white dark:bg-button dark:text-gray-200 dark:border-none"
          >
            + Follow
          </button>
        </div>
        <div className="mt-[12px] flex flex-col gap-[38px]">
          <div className="flex flex-wrap gap-11">
            <div className="flex  gap-4">
              <div className="grid h-[46px] w-[46px] place-content-center rounded-full border border-solid border-black bg-primary">
                <AvatarDeatils />
              </div>
              <div>
                <p className="text-xl font-semibold dark:text-white">
                  {company.employee_count}
                </p>
                <span className="text-sm text-gray-200">Employee</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="grid h-[46px] w-[46px] place-content-center rounded-full border border-solid border-[#FFBE17] bg-[#FFBE17]">
                <StarDetails />
              </div>
              <div>
                <p className="text-xl font-semibold dark:text-white">{company.reviews}</p>
                <span className="text-sm text-gray-200">Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="grid h-[46px] w-[46px] place-content-center rounded-full border border-solid border-gray-100 bg-gray-100">
              <LocationDetails />
            </div>
            <div>
              <p className="text-xl font-semibold dark:text-white">{company.location}</p>
              <span className="text-sm text-gray-200 ">Location</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-9 hidden lg:block" />
      <div className="basis-full ">
        <div className="flex flex-col gap-[26px]">
          <h5 className="text-base font-semibold dark:text-white">About Company</h5>
          <div className="flex flex-col gap-[18px] dark:text-gray-300">
            <span className="text-sm text-[#313131] dark:text-gray-300">{company.about}</span>
            <span className="text-sm text-[#313131] dark:text-gray-300">{company.about}</span>
          </div>
        </div>
        <div className="mt-9 flex gap-5">
          <button className="rounded-[70px] bg-primary p-[14px_26px] text-lg font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-gray-300 dark:bg-primary dark:hover:bg-primary dark:hover:text-white">
            {company.vacancies?.length} Vacancy
          </button>
          <button className="rounded-[70px] bg-gray-100 p-[14px_26px] text-lg font-semibold text-gray-300 transition-all duration-200 hover:bg-primary hover:text-white dark:bg-button dark:hover:bg-primary dark:hover:text-white">
            More Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
