import { Background, Parallax } from 'react-parallax';
import React, { useState } from 'react';
import Leetcode from './Leetcode.jsx';
import Draggable from 'react-draggable';




const About = () => {
    // const [positionLeft, setPositionLeft] = useState('right-0')
    // const PosLeft = () => {

    //     setPositionLeft('right-0');
    // };
    // const [positionTop, setPositionTop] = useState('top-52')
    // const PosTop = () => {

    //     setPositionTop('top-20');
    // };
    // const [sizeText, setSizeText] = useState('lg:text-8xl')
    // const SzText = () => {

    //     setSizeText('lg:text-3xl');
    // };
    // const [showNewDiv, SetShowNewDiv] = useState(false)
    // const ShowDiv = () => {
    //     SetShowNewDiv(!showNewDiv);
    // };
    const [showDiv, setShowDiv] = useState(false)
    const handleDiv = () => {
        setShowDiv(!showDiv)
    }

    const [dragPosition, setDragPosition] = useState({ x: 1150, y: 0 });
    const [pos, setPos] = useState(false)
    const maxDragLimit = 980
    const minDragLimit = 1150

    const handleDrag = (e, ui) => {
        // Calculate the new x position based on drag delta
        const newX = dragPosition.x + ui.deltaX;
        if (newX === 990) {
            setPos(true);
        }
        else if (newX > 1000) {
            setPos(false)
        }
        else {
            setPos(true)
        }
        console.log(newX)
        if (newX > minDragLimit) {
            setDragPosition({ x: 1150, y: 0 });
        }
        else if (newX > maxDragLimit) {
            // Limit the drag position to the maximum limit
            setDragPosition({ x: newX, y: 0 });
        } else {
            // Limit the drag position to the minimum limit (optional)
            setDragPosition({ x: 980, y: 0 });

        }
    };

    return (
        <div id='About'>
            < Parallax className='relative w-full h-screen flex justify-center' style={{ background: '#6D6A75' }} strength={0} >
                <Background>
                    <div className="flex flex-col sm:flex-row">
                        <div className="flex">
                            <div className=" sm:mt-40 mt-20 -ml-20"><img src='artCircle.png' className='animate-spin w-40 sm:w-80 h-auto ' style={{ animationDuration: '5s' }} ></img></div>
                            <div className="w-80 pl-8 pt-24 flex justify-center items-center font-sans text-sm sm:text-lg text-center" style={{ color: '#BFBDC1' }}>Hey! there My name is Sonam Rani, I'm final year B.Tech student at IIT BHU. You must have known by now that I'm Artist, Designer and Devloper :)</div>
                        </div>
                        <div className={`sm:mt-36 flex justify-center`}><img src='myPhoto.png' className='w-40 sm:w-56 h-auto'></img></div>
                        <div className="flex flex-col justify-center items-center ml-10" >
                            <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#DEB841' }} onClick={handleDiv}>HELLO</div>
                            <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#6D6A75', WebkitTextStroke: '2px #DEB841' }} onClick={handleDiv}>WORLD!</div>
                        </div>
                        <div className="h-screen flex justify-end items-center">
                            <Draggable
                                // onDrag={handleDrag}
                                onDrag={handleDrag}
                                axis='x'
                                position={dragPosition}
                            // bounds="parent"
                            >
                                <div className="absolute flex justify-start items-center w-screen h-screen sm:-right-20  rounded-full shadow-lg cursor-move" style={{ backgroundColor: '#DEB841' }}>

                                </div>
                            </Draggable>

                        </div>
                        <div className="absolute z-100 right-0"></div>
                    </div>
                    {
                        pos && (
                            <div className="absolute -top-28 right-40"><Leetcode /></div>
                        )
                    }
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
