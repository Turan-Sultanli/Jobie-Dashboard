import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import Jobs from "../jobs/Job";
import useGetVacancies from "../jobs/useGetVacancies";
import Loader from "../../shared/Loader";

function RecommendedSwiper() {
  const { vacancies, isLoading } = useGetVacancies();

  if (isLoading) return <Loader />;

  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        600: {
          slidesPerView:  1,
          spaceBetween: 12,
        },
        1000: {
          slidesPerView:  2,
          spaceBetween: 20,
        },
        1700: {
          slidesPerView:  2.4,
          spaceBetween: 30,
        },
      }}
      modules={[FreeMode]}
      freemode="true"
    >
      {vacancies.map((job) => (
        <SwiperSlide key={job.id}>
          <Jobs job={job} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default RecommendedSwiper;
