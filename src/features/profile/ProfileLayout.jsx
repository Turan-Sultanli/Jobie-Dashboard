import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";
import ProfilePortfolio from "./ProfilePortfolio";
import ProfileUser from "./ProfileUser";

function ProfileLayout() {
  return (
    <article className="flex  flex-col gap-10 lg:flex-row">
      <div className="flex grow flex-col gap-10 rounded-[20px] bg-white px-7 xl:pb-14 lg:pb-10 pb-7  pt-4 md:pt-5 lg:pt-6 xl:pt-7">
        <ProfileHeader />
        <ProfileBody />
      </div>
      <div className="flex basis-1/4 flex-col gap-[30px] md:flex-row lg:flex-col">
        <ProfileUser />
        <ProfilePortfolio />
      </div>
    </article>
  );
}

export default ProfileLayout;
