import { Background, Parallax } from 'react-parallax';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Projects.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

export default function Projects() {
    const [src1Change, SetSrc1Change] = useState('1.png')
    const ChangeSrc1 = () => {
        SetSrc1Change('new1.png')
    }
    const BackChangeSrc1 = () => {
        SetSrc1Change('1.png')
    }

    const [src2Change, SetSrc2Change] = useState('2.png')
    const ChangeSrc2 = () => {
        SetSrc2Change('new2.png')
    }
    const BackChangeSrc2 = () => {
        SetSrc2Change('2.png')
    }

    const [src3Change, SetSrc3Change] = useState('3.png')
    const ChangeSrc3 = () => {
        SetSrc3Change('new3.png')
    }
    const BackChangeSrc3 = () => {
        SetSrc3Change('3.png')
    }

    const [showNewDiv1, SetShowNewDiv1] = useState(false)
    const ShowDiv1 = () => {
        SetShowNewDiv1(!showNewDiv1);
    };
    const [showNewDiv2, SetShowNewDiv2] = useState(false)
    const ShowDiv2 = () => {
        SetShowNewDiv2(!showNewDiv2);
    };
    const [showNewDiv3, SetShowNewDiv3] = useState(false)
    const ShowDiv3 = () => {
        SetShowNewDiv3(!showNewDiv3);
    };

    return (

        <div id='Projects'>
            <Parallax className='w-full h-screen ' style={{ backgroundColor: '#37323E' }} strength={500}>
                <Background>
                    <div className="w-full h-screen flex flex-col justify-center">
                        <div className="h-screen w-full flex justify-center items-center">
                            <Swiper
                                loop={true}
                                spaceBetween={20}
                                autoplay={{
                                    delay: 200,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                modules={[Autoplay, Pagination]}
                                className="mt-20 h-80 w-full flex justify-center items-center"
                            >
                                <SwiperSlide >
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc1(); ShowDiv1() }} onMouseLeave={() => { BackChangeSrc1(); ShowDiv1(); }} >
                                        <img src={`${src1Change}`} className='w-full' />
                                        {showNewDiv1 && (
                                            <div className='h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc2(); ShowDiv2(); }} onMouseLeave={() => { BackChangeSrc2(); ShowDiv2(); }}>
                                        <img src={`${src2Change}`} className='w-full' />
                                        {showNewDiv2 && (
                                            <div className=' h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc3(); ShowDiv3() }} onMouseLeave={() => { BackChangeSrc3(); ShowDiv3() }}>
                                        <img src={`${src3Change}`} className='w-full' />
                                        {showNewDiv3 && (
                                            <div className='h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} onHo>
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc1(); ShowDiv1() }} onMouseLeave={() => { BackChangeSrc1(); ShowDiv1(); }} >
                                        <img src={`${src1Change}`} className='w-full' />
                                        {showNewDiv1 && (
                                            <div className=' h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc2(); ShowDiv2(); }} onMouseLeave={() => { BackChangeSrc2(); ShowDiv2(); }}>
                                        <img src={`${src2Change}`} className='w-full' />
                                        {showNewDiv2 && (
                                            <div className=' h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc3(); ShowDiv3() }} onMouseLeave={() => { BackChangeSrc3(); ShowDiv3() }}>
                                        <img src={`${src3Change}`} className='w-full' />
                                        {showNewDiv3 && (
                                            <div className='h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} onHo>
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc1(); ShowDiv1() }} onMouseLeave={() => { BackChangeSrc1(); ShowDiv1(); }} >
                                        <img src={`${src1Change}`} className='w-full' />
                                        {showNewDiv1 && (
                                            <div className=' h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc2(); ShowDiv2(); }} onMouseLeave={() => { BackChangeSrc2(); ShowDiv2(); }}>
                                        <img src={`${src2Change}`} className='w-full' />
                                        {showNewDiv2 && (
                                            <div className=' h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} >
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className=" border-t border-gray-60  backdrop-blur-sm bg-white/30 rounded-lg shadow-md flex justify-center items-center w-full p-4 " style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }} onMouseEnter={() => { ChangeSrc3(); ShowDiv3() }} onMouseLeave={() => { BackChangeSrc3(); ShowDiv3() }}>
                                        <img src={`${src3Change}`} className='w-full' />
                                        {showNewDiv3 && (
                                            <div className='h-32 w-11/12 backdrop-blur-sm bg-white/30 flex justify-center items-center absolute bottom-4 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1' }} onHo>
                                                <button className='rounded-full shadow-md p-1 pl-2 pr-2' style={{ backgroundColor: '#37323E' }}>Code</button>
                                            </div>
                                        )}
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </Background>
            </Parallax>
        </div>
    );
}
