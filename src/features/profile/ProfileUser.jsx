import AppMessage from "../../assets/icons/AppMessage";
import AppPhone from "../../assets/icons/AppPhone";
import profile from "../../assets/images/odaDink.jpg";
import { progressBarData } from "../../data/adminData";
import UserProgressBar from "../dashboard/UserProgressBar";

function ProfileUser() {
  return (
    <div className="relative flex flex-1 flex-col rounded-[20px] bg-white md:p-[36px_30px_40px] p-5 sm:flex-row sm:gap-2 md:flex-col md:gap-0">
      <div className="sm:flex-1 sm:p-3 md:flex-auto md:p-0">
        <div className="flex flex-col items-center sm:mb-6 md:mb-0">
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
            <h3 className="mt-5 text-[22px] font-medium leading-8">
              {" "}
              Oda Dink
            </h3>
            <span className="text-base leading-6 text-gray-900">
              Programmer
            </span>
          </div>
        </div>
        <div className="mt-[30px] flex items-center justify-center gap-[22px]">
          <div className="max-w-[200px] flex-1 rounded-[20px] border border-solid border-gray-100 px-7 py-3 text-center">
            <p className="text-2xl font-semibold ">228</p>
            <span className="text-base">Following</span>
          </div>
          <div className="max-w-[200px] flex-1 rounded-[20px] border border-solid border-gray-100 px-7 py-3 text-center">
            <p className="text-2xl font-semibold ">4842</p>
            <span className="text-base">Followers</span>
          </div>
        </div>
      </div>

      <hr className="my-9" />

      <div className="sm:flex-1 sm:p-3 md:flex-auto md:p-0">
        <div className="flex flex-col gap-5">
          <div className=" flex items-center gap-5">
            <div className="grid h-[50px] w-[50px] place-content-center rounded-full border border-solid border-gray-200">
              <AppPhone />
            </div>
            <a href="tel:+50 123 456 78" className="text-base">
              +50 123 456 78
            </a>
          </div>
          <div className=" flex items-center gap-5">
            <div className="grid h-[50px] w-[50px] place-content-center rounded-full border border-solid border-gray-200">
              <AppMessage />
            </div>
            <a href="mailto:davidheree@mail.com" className="text-base">
              davidheree@mail.com
            </a>
          </div>
        </div>
        <div className="mt-11 flex w-full items-center justify-between">
          <UserProgressBar progress={progressBarData} />
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
