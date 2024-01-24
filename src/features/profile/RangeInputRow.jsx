import React from "react";

function RangeInputRow({ children, label }) {
  const htmlFor = React.isValidElement(children) && children?.props.id;
  const value = React.isValidElement(children) && children?.props.value;

  return (
    <div className="flex items-center gap-7">
      <span className="grid min-h-[62px] min-w-[62px]  place-content-center rounded-full border border-gray-200  text-base font-semibold text-primary">
        {value}%
      </span>
      <div className="flex grow flex-col gap-4">
        <label
          htmlFor={htmlFor}
          className="text-base font-medium text-gray-750"
        >
          {label}
        </label>
        {children}
      </div>
    </div>
  );
}

export default RangeInputRow;
