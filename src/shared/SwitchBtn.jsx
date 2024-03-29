import useSwitchParams from "../hooks/useSwitchParams";

function SwitchBtn({ label, id, checked }) {
  const { isSwitchOn, handleSwitchParams } = useSwitchParams(id, checked);

  return (
    <div className="flex gap-5 items-center">
      <span className="font-medium text-base leading-6 text-gray-700 dark:text-white">
        {label}
      </span>
      <label
        htmlFor={id}
        className={`w-8 h-4 rounded-3xl relative 
      ${
        isSwitchOn
          ? "bg-primary-300 after:bg-primary after:translate-x-[20px]"
          : "bg-gray-100 after:bg-gray-300 after:translate-x-[-10px]"
      }
      after:content-['']  after:w-6 after:h-6 after:transition-all after:duration-300 after:rounded-full after:absolute after:bottom-[-4px] cursor-pointer`}
      />
      <input
        type="checkbox"
        name="applications"
        id={id}
        checked={isSwitchOn}
        onChange={(e) => handleSwitchParams(e.target.checked)}
        className="invisible"
      />
    </div>
  );
}

export default SwitchBtn;
