import Company from "../companies/Company";
import { SwiperSlide, Swiper } from "swiper/react";

import { FreeMode, Pagination } from "swiper/modules";
import { useGetCompanies } from "../companies/useGetCompanies";

function FeaturedSwiper() {
const {companies} = useGetCompanies()

  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView: 4.5,
          spaceBetween: 30,
        },
      }}
      modules={[FreeMode, Pagination]}
      pagination={{ clickable: true, el: ".pagination-position" }}
      freemode="true"
      spaceBetween={30}
      slidesPerView={4.7}
    >
      {companies.map((company) => (
        <SwiperSlide key={company.id}>
          <Company variant="featured" company={company} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default FeaturedSwiper;
