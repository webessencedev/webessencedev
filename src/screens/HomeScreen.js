import React from "react";
import { FaCubes } from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import largeSplash from "../assets/svgs/backgrounds/horizontal-home.svg";
import smallSplash from "../assets/svgs/backgrounds/vertical-home.svg";
import wavyTransition from '../assets/svgs/transitions/wave-up.svg'
import smallWavyTransition from '../assets/svgs/transitions/small-wave-down.svg'
import timerMan from '../assets/svgs/infographics/organisation1.svg'
import resizeVideo from '../assets/video/instagram-card-resize.MP4'
import Perspective from '../components/utilities/Perspective'

function HomeScreen() {
  // custom hook to grab our screen width
  const { height, width } = useWindowDimensions();
  // assigning which image to use
  const bgImg = width >= 768 ? `url(${largeSplash})` : `url(${smallSplash})`;

  return (
    <div className="flex flex-col">
      <div className="h-32 bg-primary -mb-10"></div>
      <div
        className="svg-bg bg-bottom"
        style={{ backgroundImage: bgImg, height: `${height*0.6}px` }}
      >
        <div className="flex flex-col text-center mt-10 mx-auto text-white md:text-left md:ml-32 md:mt-40 lg:ml-72 lg:mt-50">
          <h2 className="text-5xl lg:text-7xl">WebEssence</h2>
          <div className="hidden sm:block text-white">
            <p className="py-4 md:text-2xl">
              Working together to build your dreams
            </p>
          </div>
          <FaCubes className="m-10 mx-auto md:m-10 w-16 lg:w-20 h-16 lg:h-20" />
        </div>
      </div>
      <div className="flex justify-center px-10 flex-wrap">
        <div className="text-center px-10 container max-w-lg">
          <h2 className="h2">Focussing on the smaller people</h2>
          <p className="py-8">
            If you're a small business, your online presence can sometimes be
            daunting. Sometimes you're not ready to pay a steep monly
            subscription on a content management system. Perhaps your need for
            personalisation is too great for a cookie cutter template and you
            want a bit more personality to your site. Whatever the case, we are
            here to bridge the gap between small businesses and their online
            presence.
          </p>
        </div>
        <img className="h-60 w-60" alt='small-person' src="https://cdn4.vectorstock.com/i/1000x1000/33/63/person-gray-photo-placeholder-woman-vector-22863363.jpg"  />
      </div>
      <div className="svg-bg min-w-screen h-72 bg-top" style={{ backgroundImage: `url(${wavyTransition})` }}></div>
      <div className="flex flex-col justify-center px-10 flex-wrap bg-primary">
        <h2 className="mx-auto p-10 h2 text-white">Responsive design</h2>
        <div className="flex flex-wrap justify-center content-center max-w-3xl mx-auto sm:flex-nowrap">
          <p className="text-white m-10">
            We value transparency, both in PNGs and sevice. We don't want you to think that you'll be paying extra for
            some nice animations or responsiveness. It's the 21st cetuary and these things are commonplace in a website
            and you absolutely shouldn't have to pay extra for them.
          </p>
          <video className="mx-auto rounded-lg shadow-inner m-10" autoPlay loop muted width="320" height="240">
            <source src={resizeVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="svg-bg h-40 min-w-screen bg-top" style={{ backgroundImage: `url(${smallWavyTransition})` }}></div>
      <div className="flex flex-wrap sm:flex-nowrap mx-auto py-10">
        <Perspective xRotate={10} yRotate={10}>
          <div className='card p-10'>
            <h2 className="h2 text-white">Free Consultation 🚀</h2>
            <p>
              There is an astounding amount of work that goes into bulding a website which is why
              we are extremely keen to get to know your needs and how we can fulfill them. After all, it's
              all about what you need at the end of the day and whether or not we are a good fit.<br />
              <br />
              Once we have a clear idea of the direction we are headed, we are able to commence full steam
              ahead. As usual, thing run far smoother if you know what you're looking for.
            </p>
          </div>
        </Perspective>
        <img className="w-40" src={timerMan} />
      </div>
    </div>
  );
}

export default HomeScreen;
