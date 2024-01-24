import { useFormContext } from "./FormContextProvider";

function ProfileAbout() {
  const { formData : {about}, handleChange } = useFormContext();

  return (
    <div>
      <h4 className="relative font-semibold text-lg uppercase md:mb-3 lg:mb-5 xl:mb-7 mb-2">
        About Me
      </h4>
      <div className="flex flex-col gap-4">
        <label htmlFor="about" className="font-medium text-base text-gray-750">
          Tell About You
        </label>

        <textarea
          value={about}
          onChange={handleChange}
          name="about"
          id="about"
          className="lg:p-[22px_22px_28px_26px] md:p-[18px_18px_24px_22px] p-[14px_14px_20px_18px] bg-gray-50 rounded-3xl w-full h-[170px] focus:outline-primary
          border border-solid border-gray-100 overflow-auto"
        ></textarea>
      </div>
    </div>
  );
}

export default ProfileAbout;
