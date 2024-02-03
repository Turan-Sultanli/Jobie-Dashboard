import Title from "../../shared/Title";
import Dots from "../../assets/icons/Dots";
import FacebookLogo from "../../assets/icons/FacebookLogo";
import DribLogo from "../../assets/icons/DribLogo";
import LinkedinLogo from "../../assets/icons/LinkedinLogo";
import YoutubeLogo from "../../assets/icons/YoutubeLogo";

function ProfilePortfolio() {
  return (
    <div className="bg-card flex-1 rounded-[20px] p-[30px_28px_34px]">
      <div className="flex justify-between">
        <Title>Portofolios</Title>
        <div>
          <Dots />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-6">
        <div className="dark:bg-button flex items-center gap-5 rounded-[18px] bg-gray-50 dark:text-white">
          <div className="grid h-[50px] w-[50px] place-content-center rounded-2xl bg-[#3D6AD6]">
            <FacebookLogo />
          </div>
          <a href="" className="text-base font-medium">
            /davidheree.porto
          </a>
        </div>
        <div className="dark:bg-button flex items-center gap-5 rounded-[18px] bg-gray-50 dark:text-white">
          <div className="grid h-[50px] w-[50px] place-content-center rounded-2xl bg-[#EA518D]">
            <DribLogo />
          </div>
          <a href="" className="text-base font-medium">
            /david.drib
          </a>
        </div>
        <div className="dark:bg-button flex items-center gap-5 rounded-[18px] bg-gray-50 dark:text-white">
          <div className="grid h-[50px] w-[50px] place-content-center rounded-2xl bg-[#0073B1]">
            <LinkedinLogo />
          </div>
          <a href="" className="text-base font-medium">
            /davidheree222
          </a>
        </div>
        <div className="dark:bg-button flex items-center gap-5 rounded-[18px] bg-gray-50 dark:text-white">
          <div className="grid h-[50px] w-[50px] place-content-center rounded-2xl bg-[#FF0000]">
            <YoutubeLogo />
          </div>
          <a href="" className="text-base font-medium">
            /davidhereechan
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePortfolio;
