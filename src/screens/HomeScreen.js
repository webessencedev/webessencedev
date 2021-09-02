import React, {useEffect} from "react";
import smoothscroll from 'smoothscroll-polyfill';
import Aos from 'aos'
import 'aos/dist/aos.css'
import wavyTransition from '../assets/svgs/transitions/wave-up.svg'
import smallWavyTransition from '../assets/svgs/transitions/small-wave-down.svg'
import stepTransition from '../assets/svgs/transitions/step-transition.svg'
import timerMan from '../assets/svgs/infographics/organisation1.svg'
import podiumVec from '../assets/svgs/infographics/podium.svg'
import resizeVideo from '../assets/video/instagram-card-resize.MP4'
import SplashScreen from '../components/SplashScreen'
import Perspective from '../components/utilities/Perspective'
import homeScreen from '../data/homeScreen'

function HomeScreen() {
  // custom hook to grab our screen width
  smoothscroll.polyfill()

  // Setting up animate on scroll straigh from docs
  useEffect(() => {
    Aos.init({
      duration: 500
    })
  }, [])

  return (
    <div className="flex flex-col">
      <SplashScreen />
      {/* Intro */}
      <div data-aos="fade-right" className="flex -mt-1 justify-center px-10 flex-wrap">
        {/* First block */}
        <div className="text-center px-10 container max-w-lg">
          <h2 className="h2">{homeScreen.firstBlock.heading}</h2>
          <p className="py-8">{homeScreen.firstBlock.content}</p>
        </div>
        <img data-aos="fade-left" className="h-72 w-72" alt='small-person' src={podiumVec} />
      </div>
      <div className="svg-bg min-w-screen h-72 bg-top" style={{backgroundImage: `url(${wavyTransition})`}}></div>
      <div className="flex flex-col justify-center px-10 flex-wrap bg-primary">
        {/* Second block */}
        <div className="text-center mx-auto px-10 ">
          <h2 className="mx-auto p-10 h2 text-white">{homeScreen.secondBlock.heading}</h2>
          <div className="flex flex-wrap justify-center content-center max-w-3xl mx-auto">
            <p className="text-white self-center m-10 flex-0">{homeScreen.secondBlock.content}</p>
            <video data-aos="fade-up" className="mx-auto rounded-lg shadow-inner" autoPlay playsInline loop muted width="320" height="240">
              <source src={resizeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="svg-bg h-40 min-w-screen bg-top" style={{backgroundImage: `url(${smallWavyTransition})`}}></div>
      <div className="flex flex-wrap sm:flex-nowrap mx-auto p-10">
        <Perspective xRotate={10} yRotate={10}>
          <div className='card p-10'>
            {/* Third block */}
            <h2 className="h2 text-white">{homeScreen.thirdBlock.heading}</h2>
            <p>{homeScreen.thirdBlock.content}</p>
          </div>
        </Perspective>
        <img data-aos="fade-left" data-aos-duration="3000" className="w-40" alt="man on timer showing that we need to be organised" src={timerMan} />
      </div>
      <div className="svg-bg min-w-screen h-72" style={{backgroundImage: `url(${stepTransition})`}}></div>
      <div className="bg-primary">
        <div className="mx-auto text-center px-10 container max-w-2xl text-white">
          {/* Third block */}
          <h2 id="contact" className="h2 p-10 mx-auto">{homeScreen.fourthBlock.heading}</h2>
          <p>{homeScreen.fourthBlock.content}</p>
          <div className="flex justify-center">
            <a href="mailto:webessencedev@gmail.com" className="p-3 text-center bg-secondary text-primary text-2xl transform transition py-5 border-4 rounded-xl my-5 duration-500 animate-pulse hover:text-red-500 hover:scale-110">Email: webessencedev@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen;
