import { Background, Parallax } from 'react-parallax';
import React, { useState } from 'react';
import Leetcode from './Leetcode.jsx';




const About = () => {
    const [positionLeft, setPositionLeft] = useState('right-0')
    const PosLeft = () => {

        setPositionLeft('right-0');
    };
    const [positionTop, setPositionTop] = useState('top-52')
    const PosTop = () => {

        setPositionTop('top-20');
    };
    const [sizeText, setSizeText] = useState('lg:text-8xl')
    const SzText = () => {

        setSizeText('lg:text-3xl');
    };
    const [showNewDiv, SetShowNewDiv] = useState(false)
    const ShowDiv = () => {
        SetShowNewDiv(!showNewDiv);
    };

    return (
        <div id='About'>
            < Parallax className='w-full h-screen flex justify-center' style={{ background: '#6D6A75' }} strength={0} >
                <Background>

                    <div className='flex justify-center'>
                        <div className="w-1/8 relative h-screen flex flex-col justify-center">
                            <div className="relative flex justify-start -left-40">
                                <img src='/artCircle.png' className='animate-spin relative w-80 h-auto' style={{ animationDuration: '5s' }} ></img>
                            </div>
                        </div>


                        <div className=" w-5/8 flex ">
                            <div className=" w-1/12  h-screen flex flex-col justify-center ">
                                <div className="z-50">
                                    {/* <div className='w-60 font-sans font-regular flex justify-center items-center ' style={{ letterSpacing: '0.3em', color: '#BFBDC1' }}>Discover the   blend of design, artistry, and development in my creative journey </div> */}
                                    {/* <div className='font-sans font-regular flex justify-center items-center pl-20' style={{ letterSpacing: '0.3em', color: '#ffffff' }}>of design, artistry,</div>
                                    <div className='font-sans font-regular flex justify-center items-center pl-20' style={{ letterSpacing: '0.3em', color: '#ffffff' }}>and development in </div>
                                    <div className='font-sans font-regular flex justify-center items-center pl-20' style={{ letterSpacing: '0.3em', color: '#ffffff' }}>my creative journey </div> */}
                                </div>
                            </div>
                            <div className="w-11/12 h-screen flex flex-col justify-end">
                                <div className="relative flex justify-center">
                                    <img src='myPhoto.png' className='relative  w-56 h-auto'></img>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/4 h-screen">
                            {showNewDiv && (
                                <>
                                    <div className='flex justify-center items-center absolute w-1/4 top-56 right-24 font-opensans font-semibold text-center text-sm' style={{ letterSpacing: '0.2em', color: '#BFBDC1', textAlign: 'justify', textJustify: 'inter-word' }}>
                                        {/* My name is Sonam Rani, I am a final year undergraduate pursuing B.Tech from IIT BHU. My interests lies in coding, web development, graphic designing and UI/UX designing.
                                        My skills includes C++, Python, React.js, Node.js, Express.js, Django, Figma and Adobe Illustrator. I have proficiency in Data structures and Algorithm. My Leetcode stats is shown below. */}
                                        I'm Sonam Rani, a final-year B.Tech student at IIT BHU. My interests span coding, web development, graphic design, and UI/UX. Proficient in C++, Python, React.js, Node.js, Express.js, Django, Figma, and Adobe Illustrator. Strong in Data Structures and Algorithms.
                                    </div>
                                    <Leetcode /></>
                            )}
                            <div className={`relative flex flex-col ${positionLeft} ${positionTop}`}>
                                <div className={`flex flex-col justify-center w-full font-sans font-black   ${sizeText} text-7xl mb-[-20px]   `} style={{ color: '#6D6A75', WebkitTextStroke: '2px #DEB841' }}>
                                    <button onClick={() => { PosLeft(); PosTop(); SzText(); ShowDiv() }}>HELLO</button>
                                    <div className={`flex justify-center w-full font-sans font-black   ${sizeText} text-7xl mb-[-20px]   `} style={{ color: '#DEB841' }}>
                                        <button onClick={() => { PosLeft(); PosTop(); SzText(); ShowDiv() }}>WORLD!</button>
                                    </div>
                                </div>

                            </div>
                        </div>





                    </div>



                </Background>
            </Parallax >
        </div >

    )
};

export default About;



// import React,{useRef} from 'react'

// export default function About() {
//     return (
//         <div>
//             <img src='https://cdn.dribbble.com/userupload/12792684/file/original-9026f4f0dca249552972582fbe5cd102.jpg?resize=1024x768' className='w-full'></img>
//         </div>
//     )
// }
