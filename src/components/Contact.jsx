import React from 'react'
import { Background, Parallax } from 'react-parallax';

function Contact() {
    return (
        <div id='Contact'>
            <Parallax className='w-full h-screen ' style={{ backgroundColor: '#6D6A75' }} strength={500}>
                <Background>

                    <div className="flex flex-wrap justify-center">
                        <div className="p-10">
                            <div className='flex flex-col items-center justify-center pt-40 pl-30 w-full'>
                                <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#6D6A75', WebkitTextStroke: '2px #DEB841' }}>LET'S</div>
                                <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#DEB841' }}>CONNECT</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center p-6 border rounded-lg ml-40 mt-32" style={{ borderColor: '#BFBDC1' }}>
                            <label htmlFor="" className="" style={{ color: '#DEB841' }}>Let me know you :)</label>
                            <input type="text" className="outline-none p-2 m-2 rounded-md border w-60" placeholder='Name' style={{ backgroundColor: '#6D6A75', borderColor: '#BFBDC1', color: '#37323E' }} />
                            <input type="text" className="outline-none p-2 m-2 rounded-md border w-60" placeholder='E-mail' style={{ backgroundColor: '#6D6A75', borderColor: '#BFBDC1', color: '#37323E' }} />
                            <input type="text" className="outline-none p-2 m-2 rounded-md border h-24 w-60 flex flex-wrap " placeholder='Message for me :)' style={{ backgroundColor: '#6D6A75', borderColor: '#BFBDC1', color: '#37323E' }} />
                            <button className="p-2 m-2 rounded-md  w-60" style={{ backgroundColor: '#DEB841', color: '#37323E' }}>Submit</button>
                        </div>
                    </div>
                </Background>

            </Parallax>
        </div>
    )
}

export default Contact
