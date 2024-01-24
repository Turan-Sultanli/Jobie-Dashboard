import FormContextProvider from "./FormContextProvider";
import ProfileAbout from "./ProfileAbout";
import ProfileContact from "./ProfileContact";
import ProfileGenerals from "./ProfileGenerals";
import ProfileRange from "./ProfileRange";

function ProfileForm() {
  return (
    <FormContextProvider>
      <form name="profile">
        <div className="flex flex-col xl:gap-[72px] lg:gap-14 gap-10 ">
          <ProfileGenerals />
          <ProfileContact />
          <ProfileAbout />
          <ProfileRange />
        </div>
      </form>
    </FormContextProvider>
  );
}

export default ProfileForm;
