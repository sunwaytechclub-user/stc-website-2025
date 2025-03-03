import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const images = [
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/ML_Visit.jpg`,
    text: "MoneyLion Company Visit",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/Deloitte_code.jpg`,
    text: "Deloitte Coding Workshop",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/GDGKL_colab.jpg`,
    text: "GDGKL Collab",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/Google_webml.jpg`,
    text: "WEBML Workshop(Google)",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/Paynet_Visit.JPG`,
    text: "PayNet Company Visit",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/cloud study jam.jpg`,
    text: "Cloud Study Jam",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/cityhack_2017.jpg`,
    text: "Hackathon (cityhack 2017)",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/CIMB_Careertalk.jpg`,
    text: "CIMB Career Talk",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/AGM_2024.JPG`,
    text: "STC AGM 2024",
  },
  {
    image: `https://sunwaytechclub.s3.ap-southeast-1.amazonaws.com/AI_Workshop.jpg`,
    text: "AI Workshop (Embedded LLM)",
  },
  
];

export default function PastEvent() {
  return (
    <section
      id="pastevent"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <p className="heading-style-1">What We&apos;ve Done</p>
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="heading-style-2"
      >
        Past Event
      </motion.h1>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
      >
        <p className="text-sm sm:text-base md:text-lg">
        Our past events have connected students with industry leaders, fostered innovation, and built a strong tech community.
        Swipe through our highlights and be part of our future events!
        </p>
      </motion.div>
      <div className="mt-12">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          speed={600}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,  /* Increased from 100 to 200 */
            modifier: 3,  /* Increased from 2 to 3 */
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.2,  /* Reduced for more overlap */
            },
            768: {
              slidesPerView: 1.5,  /* Reduced for more overlap */
            },
            1024: {
              slidesPerView: 1.8,  /* Reduced for more overlap */
            },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"  // Changed back to original class name
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.image}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
              <div className="title px-2 py-1 rounded-lg">
                <span className="md:text-xl text-sm">{img.text}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
