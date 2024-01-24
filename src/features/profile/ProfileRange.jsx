import { useFormContext } from "./FormContextProvider";
import RangeInputRow from "./RangeInputRow";

function ProfileRange() {
  const {
    formData: { programming, prototyping, uiDesign, researching },
    handleChange,
  } = useFormContext();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="relative mb-2 text-lg font-semibold uppercase md:mb-3 lg:mb-5 xl:mb-7">
          Skills
        </h4>
        <button
          type="button"
          className="border-none bg-transparent text-lg font-semibold text-primary outline-transparent"
        >
          + Add new Skills
        </button>
      </div>

      <div className="grid xl:grid-cols-2 grid-rows-2 gap-x-[76px] gap-y-[32px]">
        <RangeInputRow label="Programming">
          <input
            type="range"
            id="programming"
            name="programming"
            className="accent-primary w-full"
            onChange={handleChange}
            value={programming}
          />
        </RangeInputRow>
        <RangeInputRow label="Prototyping">
          <input
            type="range"
            id="prototyping"
            name="prototyping"
            className="accent-primary w-full"
            onChange={handleChange}
            value={prototyping}
          />
        </RangeInputRow>
        <RangeInputRow label="UIDesign">
          <input
            type="range"
            id="uiDesign"
            name="uiDesign"
            className="accent-primary w-full"
            onChange={handleChange}
            value={uiDesign}
          />
        </RangeInputRow>
        <RangeInputRow label="Researching">
          <input
            type="range"
            id="researching"
            name="researching"
            className="accent-primary w-full"
            onChange={handleChange}
            value={researching}
          />
        </RangeInputRow>
      </div>
    </div>
  );
}

export default ProfileRange;
