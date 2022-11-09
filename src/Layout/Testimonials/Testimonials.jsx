import React, { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Brands_line from "../../assets/Brands_line.png";
import Heading from "../../Components/Heading/Heading";

const Testimonials = () => {
  let prev = useRef(null);
  let next = useRef(null);

  return (
    <div className="w-full py-10 relative">
      <img src={Brands_line} className="absolute right-0 top-0" alt="" />
      <Heading subtitle={"Testimonials"} title={"What Customers Says"} />
      <div className="w-10/12  mx-auto mt-16  lg:w-[95%]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={true}
          allowSlideNext={true}
          allowSlidePrev={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          navigation={{
            nextEl: next.current,
            prevEl: prev.current,
          }}
          rewind={true}
          breakpoints={{
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
              // spaceBetween: 20,
            },
            // when window width is >= 480px
            490: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            769: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = next.current;
            swiper.params.navigation.prevEl = prev.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          <SwiperSlide>
            <TestimonialCard name={"Michael"} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name={"Anna Smith"} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name={"Asad Ali"} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name={"Jonny"} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name={"Danny"} />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard name={"Muhammad Asim"} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-8 w-[20%]  flex justify-evenly mx-auto">
        <button
          className="text-3xl py-3 px-7 next-btn review-swiper-button-prev "
          ref={prev}
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          className="text-3xl py-3 px-7 prev-btn review-swiper-button-next "
          ref={next}
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

const TestimonialCard = (props) => {
  return (
    <>
      <div className="w-[380px] h-[282px] py-8 px-10 bg-orange-100 lg:w-[290px] sm:w-[95%] sm:mx-auto">
        <h4 className="font-medium text-xl">Superb Work</h4>
        <p className="text-[#6A635B] my-6">
          “Blessing welcomed ladyship she met humoured sir breeding her. Six
          curiosity day assurance bed necessary.”
        </p>
        <div className="flex text-[#FBB040]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h4 className="font-bold text-xl">{props.name}</h4>
      </div>
    </>
  );
};

export default Testimonials;
