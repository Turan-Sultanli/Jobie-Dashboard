import GridIcon from "../assets/icons/GridIcon";
import ListIcon from "../assets/icons/ListIcon";
import useLayoutParams from "../hooks/useLayoutParams";


function LayoutButtons() {
  return (
    <div className="flex items-center gap-5">
      <LayoutButton variant='list'/>
      <LayoutButton variant='grid'/>
    </div>
  )
}

export default LayoutButtons



function LayoutButton({ variant }) {
  const  {layoutType, handleLayoutParams} = useLayoutParams()


  return (
      <button
        disabled={layoutType === variant}
        onClick={() => handleLayoutParams(variant)}
        className="border border-solid border-primary-300 bg-body rounded-[40px] w-12 h-12 
        grid place-content-center [&:hover_path]:fill-white hover:bg-primary disabled:bg-primary [&:disabled_path]:fill-white
        disabled:cursor-not-allowed"
      >
        {variant === 'grid' ? <GridIcon /> : <ListIcon />}
      </button>
  );
}

