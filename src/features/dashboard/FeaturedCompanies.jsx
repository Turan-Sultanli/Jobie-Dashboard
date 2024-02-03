import Title from "../../shared/Title";
import ViewMore from "../../shared/ViewMore";
import FeaturedSwiper from "./FeaturedSwiper";

function FeaturedCompanies() {
  return (
    <div className="col-[1/-1] lg:row-[4/-1] sm:row-[7/-1] ">
      <div className="flex items-center justify-between flex-wrap gap-1 mb-7  ">
        <Title>Featured Companies</Title>
        <div className="flex items-center gap-11">
          <div
            className=" pagination-position [&>.swiper-pagination-bullet-active]:bg-primary 
            [&>.swiper-pagination-bullet:not(.swiper-pagination-bullet-active)]:bg-gray-400 [&>*]:w-3 [&>*]:h-3 hidden lg:block"
          ></div>
          <ViewMore />
        </div>
      </div>
      <FeaturedSwiper />
    </div>
  );
}

export default FeaturedCompanies;
