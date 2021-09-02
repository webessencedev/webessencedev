import React, {useEffect} from 'react'
import {FaCubes} from "react-icons/fa";
import useWindowDimensions from "../hooks/useWindowDimensions";
import smoothscroll from 'smoothscroll-polyfill';
import largeSplash from "../assets/svgs/backgrounds/horizontal-home.svg";
import Aos from 'aos'
import 'aos/dist/aos.css'


const SplashScreen = () => {

  // Activating the smoothscroll plugin so we can have smoothscroll on safari
  smoothscroll.polyfill()
  // custom hook to grab our screen width
  const {height} = useWindowDimensions();

  // Scroll handler for the contact button
  const scrollHander = (e) => {
    e.preventDefault()
    // passing the href attribute through from our element with the onClick
    // event
    const target = e.target.getAttribute('href')
    // Pulling the location of our new target at the bottom of the page. Page
    // offsetTop gives us the vertical coord of our element
    const location = document.querySelector(target).offsetTop
    // Scrolling with native smoothscroll. only works on chrome, that is why we
    // import smoothscroll.polyfill()
    window.scrollTo({left: 0, top: location, behavior: 'smooth', })
  }

  // Animation on scroll setup, straigh out of docs
  useEffect(() => {
    Aos.init({
      duration: 500
    })
  }, [])

  return (
    <React.Fragment>
      {/*Contact us button*/}
      <div className="h-16 bg-primary -mb-1">
        <div className="bg-secondary rounded-b-xl text-center text-white p-3">
          <a onClick={(e) => scrollHander(e)} href="#contact" className="text-center transition duration-500 text-3xl hover:text-primary p-3">Contact Us</a>
        </div>
      </div>

      {/*Vector splash screen*/}
      <div
        className="svg-bg bg-bottom"
        style={{backgroundImage: `url(${largeSplash})`, height: `${height > 1000 ? height * 0.6 : 1000 * 0.6}px`}}
      >
        <div data-aos="fade-right" className="flex flex-col text-center mt-10 mx-auto text-white sm:text-left sm:ml-32 sm:mt-40 lg:ml-72 lg:mt-50">
          <h2 className="text-5xl lg:text-7xl">WebEssence</h2>
          <div className="hidden sm:block text-white">
            <p className="py-4 md:text-2xl">
              Working together to build your dreams
            </p>
          </div>
          <FaCubes className="m-10 mx-auto sm:m-10 w-16 lg:w-20 h-16 lg:h-20" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SplashScreen

