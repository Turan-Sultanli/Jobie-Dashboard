import { formatNumbers } from "../../utils/helpers";

function Widget({widget}) {
  return (
    <article className={`widget-${widget.id} xl:p-[40px_30px_30px] p-[30px_20px_20px] lg:[36px_26px_26px] rounded-[28px] overflow-hidden`}>
      <div className="flex justify-between items-center">
        <span className="grid place-content-center min-w-[68px] max-h-[68px] rounded-2xl border border-solid ">
            {widget.icon}
        </span>
        <div className="flex flex-col items-end text-white">
            <p className="font-medium text-lg whitespace-nowrap">{widget.label}</p>
            <h3 className=" text-5xl font-semibold">{formatNumbers(widget.value)}</h3>
        </div>
      </div>
    </article>
  );
}

export default Widget;
