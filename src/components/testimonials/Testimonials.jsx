import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
// import Avatar3 from "../../assets/avatar3.jpg";
// import Avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: Avatar1,
      name: "B-Tech (CSE), 2019",
      review:
        "Completed My Graduation From Institute Of Engineering And Management Kolkata in 2019.",
    },
    {
      id: 2,
      avatar: Avatar2,

      name: "Academics",
      review:
        "Schooling Done From Kendriya Vidyalaya, IIM Joka Kolkata(Class-10th and 12th).",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
