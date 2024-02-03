import { useState } from "react";
import SwitchBtn from "../../shared/SwitchBtn";
import Button from "../../shared/Button";

function ProfileHeader() {
  const [available, setAvailable] = useState(true);

  return (
    <div className="flex justify-between items-center flex-wrap ">
      <h3 className="font-semibold text-2xl leading-9 dark:text-white">Edit Profile</h3>
      <div className="flex items-center flex-wrap xl:gap-16 lg:gap-12 md:gap-8 sm:gap-4 gap-2">
        <div className="whitespace-nowrap">
          <SwitchBtn
            label={"Available for hire?"}
            id={"available"}
            checked={available}
            handleState={setAvailable}
          />
        </div>
        <div className="flex items-center flex-wrap gap-5">
            <Button variant="default" type="reset">Cancel</Button>
            <Button variant="default">Save Changes</Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
