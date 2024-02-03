import AppPhone from "../../assets/icons/AppPhone";
import AppWhatsapp from "../../assets/icons/AppWhatsapp";
import AppMessage from "../../assets/icons/AppMessage";
import { useFormContext } from "./FormContextProvider";

function ProfileContact() {
  const {
    formData: { mobilePhone, whatsapp, email, address, city, country },
    handleChange,
  } = useFormContext();

  return (
    <div>
      <h4 className="relative mb-2 text-lg font-semibold uppercase md:mb-3 lg:mb-5 xl:mb-7 dark:text-gray-100">
        Contact
      </h4>
      <div className=" flex flex-col gap-7 ">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-6">
          <div className="relative flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="mobilePhone"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              Mobile Phone
            </label>
            <div className="absolute bottom-2 left-0 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:left-[26px]">
              <AppPhone />
            </div>
            <input
              name="mobilePhone"
              value={mobilePhone}
              onChange={handleChange}
              type="tel"
              id="mobilePhone"
              placeholder="mobile phone"
              className="bg-card w-full border-b border-solid border-gray-300 pb-2 pl-9 dark:text-white  text-lg font-medium placeholder:text-gray-200 hover:border-primary  focus:border-primary focus:outline-none 
            sm:pb-3 md:pb-4 lg:pb-5 lg:pl-11 xl:pl-20 "
            />
          </div>
          <div className="relative flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="whatsapp"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              Whatsapp
            </label>
            <div className="absolute bottom-2 left-0 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:left-[26px]">
              <AppWhatsapp />
            </div>
            <input
              name="whatsapp"
              value={whatsapp}
              onChange={handleChange}
              type="tel"
              id="whatsapp"
              placeholder="Whatsapp number"
              className="bg-card w-full border-b border-solid border-gray-300 pb-2 pl-9 dark:text-white  text-lg font-medium placeholder:text-gray-200 hover:border-primary  focus:border-primary focus:outline-none 
            sm:pb-3 md:pb-4 lg:pb-5 lg:pl-11 xl:pl-20"
            />
          </div>
          <div className="relative flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="email"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              Email
            </label>
            <div className="absolute bottom-2 left-0 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:left-[26px]">
              <AppMessage />
            </div>
            <input
              autoComplete="on"
              name="email"
              value={email}
              onChange={handleChange}
              type="text"
              id="email"
              placeholder="Email"
              className="bg-card w-full border-b border-solid border-gray-300 pb-2 pl-9 dark:text-white  text-lg font-medium placeholder:text-gray-200 hover:border-primary  focus:border-primary focus:outline-none 
            sm:pb-3 md:pb-4 lg:pb-5 lg:pl-11 xl:pl-20"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="address"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              Address
            </label>
            <input
              autoComplete="on"
              name="address"
              value={address}
              onChange={handleChange}
              type="text"
              id="address"
              placeholder="Address"
              className="bg-card w-full border-b border-solid border-gray-300 px-[2px] pb-2 text-white text-lg font-medium placeholder:text-gray-200 hover:border-primary 
            focus:border-primary focus:outline-none sm:pb-3 md:pb-4 lg:pb-5"
            />
          </div>
          <div className="flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="city"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              City
            </label>
            <select
              autoComplete="on"
              id="city"
              name="city"
              value={city}
              onChange={handleChange}
              className="bg-card w-full min-w-[230px] appearance-none text-white border-b border-solid border-gray-300 px-[2px] pb-2 text-lg font-medium placeholder:text-gray-200 
            hover:border-primary focus:border-primary focus:outline-none sm:pb-3 md:pb-4 lg:pb-5"
            >
              <option value="">London</option>
            </select>
          </div>
          <div className="flex grow flex-col gap-3 md:gap-5 lg:gap-7 xl:gap-9">
            <label
              htmlFor="country"
              className="text-base font-medium text-gray-750 dark:text-gray-200"
            >
              Country
            </label>
            <div>
              <select
                autoComplete="on"
                id="country"
                name="country"
                value={country}
                onChange={handleChange}
                className="bg-card w-full min-w-[230px] appearance-none text-white border-b border-solid border-gray-300 px-[2px] pb-2 text-lg font-medium placeholder:text-gray-200 
            hover:border-primary focus:border-primary focus:outline-none sm:pb-3 md:pb-4 lg:pb-5"
              >
                <option value="">England</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContact;
