import React, { useState } from 'react';
import { Background, Parallax } from 'react-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import './Projects.css'
function Projects() {
    const images1 = ['1.png', '2.png', '3.png', '1.png', '2.png', '1.png', '2.png', '3.png']
    const images2 = ['1.png', '2.png', '3.png', '1.png', '2.png', '1.png', '2.png', '3.png']
    const [activeSlideIndex, setActiveSlideIndex] = useState(null);

    const handleImageMouseEnter = (index) => {
        setActiveSlideIndex(index);
    };

    const handleImageMouseLeave = () => {
        setActiveSlideIndex(null);
    };
    return (
        
        <div id='Projects'>
            <Parallax className='w-full h-screen ' style={{ backgroundColor: '#37323E' }} strength={800}>
                <Background>
                    <div className='h-screen'>
                        <div className="relative p-6 flex flex-wrap  justify-center items-center">
                            <Swiper
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,

                                    // pauseOnMouseEnter: true
                                }}
                                loop={true}
                                speed={2000}
                                // freeMode={true}
                                // cssMode={true}
                                // centeredSlides={true}
                                // pagination={{ type: 'progressbar' }}
                                navigation={false}

                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}

                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper1"
                            >
                                {images1.map((image, index) => (
                                    <SwiperSlide key={index} className='' style={{ backgroundColor: 'transparent' }} >
                                        <div className={` text-lightGray  flex flex-col `} style={{ borderColor: '#6D6A75', }}>
                                            <div className=" flex flex-col flex-wrap justify-center items-center" onMouseEnter={() => handleImageMouseEnter(index)}
                                                onMouseLeave={handleImageMouseLeave}>
                                                <img src={`${activeSlideIndex === index ? `new${image}` : `${image}`}`} style={{ width: 'auto' }} className='' />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='absolute top-60 flex items-center justify-center'>
                                <div className="flex justify-center w-full font-sans font-black   lg:text-7xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#37323E', WebkitTextStroke: '2px #DEB841' }}>MY</div>
                                <div className=" flex justify-center w-full font-sans font-black   lg:text-7xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#DEB841' }}>CREATIVES</div>

                            </div>
                            <Swiper
                                autoplay={{
                                    delay: 0,
                                    reverseDirection: true,

                                }}
                                speed={3000}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}

                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                {images2.map((image, index) => (
                                    <SwiperSlide key={index} className='' style={{ backgroundColor: 'transparent' }} >
                                        <div className={` text-lightGray  flex flex-col `} style={{ borderColor: '#6D6A75', }}>
                                            <div className=" flex flex-col flex-wrap justify-center items-center" onMouseEnter={() => handleImageMouseEnter(index)}
                                                onMouseLeave={handleImageMouseLeave}>
                                                <img src={`${activeSlideIndex === index ? `new${image}` : `${image}`}`} style={{ width: 'auto' }} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </Background>
            </Parallax>
        </div>
    )
}

export default Projects
