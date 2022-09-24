import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

export default function Slider({ data = [] }) {
  return (
    <section id="tranding">
      <div className="container_wrapper">
        <h3 className="subheading" data-aos-delay="1100" data-aos="fade-up">
          Free Delivery
        </h3>
        <h1
          className="heading"
          data-aos-delay="1100"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          {" "}
          Best Seller Products
        </h1>
      </div>
      <div
        className="container_wrapper"
        data-aos-delay="1200"
        data-aos-duration="1500"
        data-aos="fade-up"
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <div className="wrapper">
            <div className="swiper-wrapper">
              {/* slide start */}
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <div className="slide-wrapper">
                      <div className="slide-img">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="slide-content">
                        <h1 className="price">${item.price}</h1>
                        <div className="slide-content-bottom">
                          <h2 className="name">{item.title.slice(0, 12)}...</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}

              {/* slide end */}
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
