// Use effect e Use state
import { useEffect, useState } from 'react'

// React parallax
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';

// Img
import Logo from '../media/logoBlog.png'

// Components
import ContactForm from '../components/EmailForm';

const AboutPage = () => {

  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showForm]);

  return (
    <>
      {showForm && (
        <div className='z-40 fixed py-8 grid grid-cols-1 px-4 md:px-10 justify-center bg-opacity-60 backdrop-blur-lg drop-shadow-lg bg-white mt-[125px] w-full'>
          <ContactForm />
          <button onClick={() => {
            setShowForm(false);
          }}>
            <p className="text-slate-700 font-bold text-lg px-1 pt-5">&rarr; Back</p>
          </button>
        </div>
      )}

      {/* Intro section */}
      <div className="bg-gray-900 w-100 pt-28 sm:pt-40  py-2  lg:text-center flex flex-col justify-center items-center">
        <div className=' flex pt-6' >
          <img alt="blog Logo" src={Logo} className="w-[25px] h-[25px] mr-1 " />
          <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1>
        </div>
        <h1 className=" text-slate-600 text-3xl md:text-5xl text-center font-semibold m-2"> BUILD THE WEB.
        </h1>
        <h1 className=" text-slate-500 text-4xl md:text-7xl text-center font-semibold m-2"><b>FASTER.</b>
        </h1>
        <h1 className=" text-slate-400 text-5xl md:text-9xl text-center font-semibold m-1"><b>TOGHETER</b>
        </h1>
      </div>

      {/* Logo parallax and text */}
      <div className="bg-gray-900 lg:text-center pb-4 flex flex-col  justify-center items-center ">
        <Parallax bgImage={Logo}
          blur={{ min: -15, max: 15 }}
          className="w-80  h-80  m-3 pt-[70px] "
          bgImageAlt="blog logo"
          strength={200}>
        </Parallax>
        <h3 className="font-bold  text-4xl m-4 sm:text-4xl text-slate-400">YES, BUT...</h3>
        <h3 className="font-extrabold  text-5xl text-center sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 px-4 ">WHAT IS BRICKS?</h3>
      </div>

      {/* Paragraph what is bricks? */}
      <div className="bg-gray-900 sm:px-40">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 py-2 text-pink-500 font-semibold tracking-wide uppercase">Brief</p>
            <h3 className="mt-2 text-3xl leading-8 font-bold text-slate-500 tracking-tight sm:text-4xl sm:leading-10">
              The right question should be...
            </h3>
            <h3 className="mt-4 text-3xl leading-8 font-extrabold py-2 my-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white sm:text-4xl sm:leading-10">
              What is Bricks in this moment ?
            </h3>
            <p className="mt-4 max-w-5xl text-xl leading-7 text-gray-200 lg:mx-auto">
              <b> Bricks is the starting point for developers who want to build high-quality web applications quickly and efficiently. </b><br />

              Our comprehensive suite of tools includes now <b>templates, components and guides,</b> all aimed at accelerating
              the development process.<br />
            </p>
            <h3 className="mt-6 text-3xl leading-8 font-bold  text-slate-500  tracking-tight sm:text-4xl sm:leading-10">
              Yes but...
            </h3>
            <h3 className="mt-4 text-3xl leading-8 font-extrabold py-2 my-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white  sm:text-4xl sm:leading-10">
              Why Bricks is different ?
            </h3>
            <p className="mt-4 max-w-5xl text-xl leading-7 text-gray-200 lg:mx-auto">
              How does Bricks differentiate itself from the many resources, libraries, and projects available online ?<br />
              Bricks is unique because it is owned and managed by <b>creators </b>themselves.<br /><br />
              By joining our team, you will have the opportunity to participate in strategic decision-making and shape the future of the platform.
              You will also be able to contribute to votes on important matters.<br />


              Being a part of Bricks means being an integral piece of something larger. <br />
              Just as a building relies on individual bricks to come together and form a whole,
              bigger projects require the contribution and effort of many different elements to be successful.
            </p>
          </div>
        </div>
        <div className="py-12 bg-gray-900 sm:px-10">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <p className="text-base leading-6 text-pink-500 font-semibold tracking-wide uppercase">Collaborate</p>
              <h3 className="mt-4 text-3xl leading-8 font-extrabold py-2 my-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white  sm:text-4xl sm:leading-10">
                Are you ready to be part of something unique?
              </h3>
              <Link className="w-[250px] font-semibold my-2 px-6 mt-12 py-3 rounded-md  border-[1px] border-slate-100 hover:border-black hover:bg-black group"
                to={"/BricksHub"}><button
                >
                  <p className="text-slate-200 text-2xl font-bold group-hover:text-white group-hover:font-bold ">Signup here!</p>
                </button></Link>
            </div>
          </div>
        </div>
      </div>

      {/* columns with services */}
      <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-900 gap-10 px-4 py-10 sm:px-20 lg:px-26">
        <Link to={"/BlogPage"} className='hover:bg-gray-800 p-1 rounded-xl cursor-pointer px-2'>
          <p className="text-base leading-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white font-semibold tracking-wide uppercase">About our</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-pink-600 sm:text-4xl sm:leading-10">
            BLOG →
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
            Helpful <b>guides and resources</b> on the most popular technologies for building modern websites.
          </p>
        </Link>
        <Link to={"/TemplatesPage"} className='hover:bg-gray-800 p-1 rounded-xl cursor-pointer px-2'>
          <p className="text-base leading-6  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white font-semibold tracking-wide uppercase">About our</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl sm:leading-10">
            TEMPLATES →
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
            Templates for UI components and complete templates for the whole web application.
          </p>
        </Link>
        <Link to={"/ComponentPage"} className='hover:bg-gray-800 p-1 rounded-xl cursor-pointer px-2'>
          <p className="text-base leading-6  text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white font-semibold tracking-wide uppercase">About our</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-300 sm:text-4xl sm:leading-10">
            COMPONENTS →          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-300 lg:mx-auto">
            Selection of clear, responsive, SEO-friendly, and contrast-optimized <b>UI components </b>styled with plain CSS and Tailwind CSS
          </p>
        </Link>
      </div>

      {/* Section */}
      <div className=" py-2 bg-slate-900 px-4 justify-center items-center sm:px-40">
        <div className="bg-gray-900 max-w-screen-xl mx-auto  sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <p className="text-base leading-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white font-semibold tracking-wide uppercase">OUR MISSION</p>
              <p className="mt-3 text-xl leading-7 text-gray-300  ">
                Bricks is a platform to simplify web development with a collection of helpful tools managed by contributors. Its mission is to support creators by giving them control over their content and providing a space for their talents to be recognized.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-span-2">
              <p className="text-base leading-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white font-semibold tracking-wide uppercase">OUR VALUES</p>
              <ul className="mt-4">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-200">Connetion</h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Bricks values creativity and the power it has to inspire and connect people. We believe that every individual has something unique and valuable to offer, and strive to create a platform that supports and amplifies the voices of creators.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">

                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-200">Innovation</h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        We are committed to fostering a culture of innovation and creativity that drives us forward and helps us stay ahead of the curve.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-200">Transparency</h5>
                      <p className="mt-2 text-base leading-6 text-gray-500 mb-20">
                        As a collaborative platform, we understand the importance of building trust with all members of our community. As such, we are dedicated to being responsible and accountable in our operations and to fostering a sense of reliability and trust among all members of our community
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Email box */}
      <div className="bg-gray-900 ">
        <Parallax
          bgImage={Logo}
          strength={200}
          bgImageAlt="blog logo"
          className='max-[800px]:hidden'
        >
          <div className="h-[600px]">
            <div className="bg-transparent bg-slate-900 w-100 px-4 md:px-20items-center gap-2 lg:px-20 grid grid-cols-1 ">
              <div className=" ">
                <h3 className="font-semibold sm:pt-4 mt-4 text-5xl p-2 sm:text-6xl text-center text-slate-100 to-white">If you want to go quickly, <b>go alone.</b><br /> If you want to go far, <b>go together.</b></h3>
                <div className=" m-6 py-4  bg-opacity-40 pt-10 backdrop-blur-lg drop-shadow-lg">
                  <div className="bg-transparent bg-grey-900 grid grid-cols items-center justify-center md:px-10">

                    <Link className="w-[250px] font-semibold my-2 px-6  py-3 rounded-md  border-[1px] border-slate-100 hover:border-black hover:bg-black group"
                      to={"/BricksHub"}>
                      <p className="text-slate-200 text-2xl text-center font-bold group-hover:text-white group-hover:font-bold ">Signup here!</p>
                    </Link>
                    <button onClick={() => {
                      setShowForm(true);
                    }} className="w-[250px] font-semibold my-2 px-6 py-3 rounded-md  border-[1px] border-slate-100 hover:border-black hover:bg-black group"
                    >
                      <p className="text-slate-200 text-2xl font-bold group-hover:text-white group-hover:font-bold ">Contact us</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
}
export default AboutPage

