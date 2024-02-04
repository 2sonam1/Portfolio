import { Background, Parallax } from 'react-parallax';
import Marquee from "react-fast-marquee";
// import React from 'react';

const Projects = () => (
    <Parallax className='w-full h-screen ' style={{ backgroundColor: '#37323E' }} strength={500}>
        <Background>

            <div className="w-full h-screen flex justify-center">
                <div className="w-1/4 h-screen flex justify-center">
                    <div className='relative flex flex-col justify-center '>
                        <div className='relative flex flex-col justify-center w-full font-sans font-black  text-5xl mb-[-20px] left-0' style={{ color: '#37323E', WebkitTextStroke: '2px #DEB841' }}>
                            UNVELLING

                        </div>
                        <div className='relative flex flex-col justify-center w-full font-sans font-black text-5xl mb-[-20px]' style={{ color: '#DEB841' }}>
                            MY CRAFTS
                        </div>
                    </div>
                </div>
                <div className="w-3/4 h-screen flex justify-center items-center">

                    <div className=" flex justify-center ml-40">
                        <div className=" m-10">
                            <img src="1.png" className="w-64" />
                        </div>
                        <div className="m-10">
                            <img src="2.png" className="w-96" />
                        </div>
                        <div className="m-10">
                            <img src="3.png" className="w-96" />
                        </div>
                    </div>

                </div>
            </div>

        </Background>
    </Parallax>

);
export default Projects;