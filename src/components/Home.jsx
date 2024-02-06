import { Background, Parallax } from 'react-parallax';
import './Home.css';

const Home = () => (
    <div id='Home'>
        <Parallax className='w-full h-screen ' style={{ backgroundColor: '#37323E' }} strength={800}>
        <Background className='w-full h-screen'>
            <div className="flex ">
                <div className="w-1/4">
                    <div className="w-56 h-auto m-0  mt-10 pt-10 hidden sm:block" style={{ marginLeft: '-80px' }}>
                        <img src="/circle-design.png" className='animate-spin' style={{ animationDuration: '5s' }} />
                        <div className="w-40 h-auto p-0 pl-20" style={{ marginTop: '-120px' }}>
                            <img src="/left-design.png" />
                        </div>
                    </div>

                </div>
                <div className="w-1/2">
                    <div className='flex flex-col items-center justify-center pt-40 pl-30 w-full'>
                        <div className="flex justify-center w-full font-opensans font-normal lg:text-xl md:text-sm sm:text-xs" style={{ letterSpacing: '0.8em', color: '#BFBDC1' }}>SONAM RANI</div>
                        <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#DEB841' }}>ARTIST</div>
                        <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#37323E', WebkitTextStroke: '2px #DEB841' }}>DESIGNER</div>
                        <div className="flex justify-center w-full font-sans font-black lg:text-8xl md:text-7xl sm:text-7xl text-3xl" style={{ color: '#DEB841' }}>DEVELOPER</div>
                    </div>
                </div>
                <div className="w-1/4 ">
                    {/* <div className="w-60 h-auto mt-10 hidden sm:block">
                          <img src="/circle-design.png" className='animate-spin' style={{ animationDuration: '5s' }} />
                      </div> */}
                </div>
            </div>
        </Background>
        
    </Parallax>
        
    </div>
);




export default Home;
// import React from 'react'

// function Home() {
//   return (
//       <>
//           <section className='pb-28' style={{ backgroundColor:'#37323E'}}>
            //   <div className="flex">
            //       <div className="w-1/4">
            //           <div className="w-56 h-auto m-0 mt-10 pt-10 hidden sm:block" style={{marginLeft:'-80px'}}>
            //               <img src="/circle-design.png" className='animate-spin' style={{ animationDuration: '5s' }} />
            //               <div className="w-40 h-auto p-0 pl-20" style={{ marginTop: '-120px' }}>
            //                   <img src="/left-design.png" />
            //               </div>
            //           </div>
                      
            //       </div>
            //       <div className="w-1/2">
            //           <div className='flex flex-col items-center justify-center pt-40 pl-30 w-full'>
            //               <div className="flex justify-center w-full font-opensans font-normal lg:text-xl md:text-sm sm:text-xs" style={{ letterSpacing: '0.8em', color: '#BFBDC1' }}>SONAM RANI</div>
            //               <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#DEB841' }}>ARTIST</div>
            //               <div className="flex justify-center w-full font-sans font-black   lg:text-8xl lg:mb-[-25px]   md:text-7xl md:mb-[-20px]   sm:text-7xl sm:mb-[-20px]   text-3xl mb-[-12px] " style={{ color: '#37323E', WebkitTextStroke: '2px #DEB841' }}>DESIGNER</div>
            //               <div className="flex justify-center w-full font-sans font-black lg:text-8xl md:text-7xl sm:text-7xl text-3xl" style={{ color: '#DEB841' }}>DEVELOPER</div>
            //           </div>
            //       </div>
            //       <div className="w-1/4">
            //           {/* <div className="w-60 h-auto mt-10 hidden sm:block">
            //               <img src="/circle-design.png" className='animate-spin' style={{ animationDuration: '5s' }} />
            //           </div> */}
            //       </div>
            //   </div>
//           </section>    
//     </>
//   )
// }

// export default Home

















// {/* <img src="/circle-design-left.png" className='pt-30 w-20 h-auto'/>
//         <div className='flex justify-center pt-40'>
//               <img src="/text.png" className='w-auto h-80' />
//         </div>
//           <img src="/circle-design.png " className='w-20 h-20' /> */}