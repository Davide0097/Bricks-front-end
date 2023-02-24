// Components
import TailwindElements from "../components/TailwindElements"
import CssElements from "../components/CssElements";
import ContactForm from '../components/EmailForm';

// Use effect and Use state
import { useEffect, useState } from 'react'

// Link
import { Link } from "react-router-dom";

// Images
import Logo from '../media/logoBlog.png'
import Contrast from '../media/contrast.png'
import Clean from '../media/clean.png'
import Seo from '../media/seo.png'
import Responsive from '../media/responsive.png'
import Accessibility from '../media/accessibility.png'
import Animated from '../media/animated.png'

const ComponentsPage = () => {

    // State for Contact form and CSS/Tailwind components
    const [isShown, setIsShown] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showForm]);

    return (
        <div>

            {/* Contact Form */}
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

            {/* Whole first part till Tailwind elements/CSS elements */}
            <div className="bg-slate-100 w-100 pt-40 px-2 sm:px-20 2xl:px-[400px] flex flex-col justify-center items-center">
                <h3 className="text-center font-extrabold text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r h-[80px] from-pink-600 to-blue-600 uppercase sm:mt-10 sm:my-4">Components</h3>
                <div className='flex'>
                    <img src={Logo} alt="blog Logo" className="w-[25px] h-[25px] mr-1 " />
                    <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1>
                </div>
                <h1 className=" text-slate-500 text-2xl mb-6 sm:mb-20  text-center font-semibold my-4">Browse around our <b>components.</b>
                </h1>

                {/* Components overview */}
                <div className="grid grid-cols-2 lg:grid-cols-6 mb-6 py-8">
                    <div className="flex flex-col justify-center items-center py-4 lg:px-3">
                        <img src={Contrast} alt="Contrast icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Contrast </b></h1>
                        <p className=" text-slate-500 text-xl text-center font-semibold px-1">Eeasy to read</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-slate-900 border-1px rounded-xl py-4 animate-bounce duration-200 transform hover:scale-90 lg:px-3">
                        <img src={Animated} alt="Interactive icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Interactive</b></h1>
                        <p className="text-slate-200 text-xl  text-center font-semibold px-1">Effects and animations</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-4 lg:px-3">
                        <img src={Clean} alt="Clean Design icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Clean Design</b></h1>
                        <p className="text-slate-500 text-xl  text-center font-semibold px-1">Simple, easy-to-understand layout</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-4 lg:px-3">
                        <img src={Seo} alt="Seo icon" className="w-[25px] h-[25px]" />
                        <h1 className="text-2xl  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>SEO </b></h1>
                        <p className=" text-slate-500 text-xl  text-center font-semibold px-1">Optimized for search engines</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-4 lg:px-3">
                        <img src={Accessibility} alt="Aria Tag icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Aria Tags</b></h1>
                        <p className="text-slate-500 text-xl  text-center font-semibold px-1">ARIA tags to enhance accessibility</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-4 lg:px-3">
                        <img src={Responsive} alt="Responsive icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Responsive</b></h1>
                        <p className="text-slate-500 text-xl text-center font-semibold px-1">Pixel perfect on all screen sizes</p>
                    </div>
                </div>

                {/* Box with switch */}
                <div className="mb-10 items-center h-[100px] w-[350px] flex flex-row  justify-center bg-slate-900 rounded-xl  py-2 ">
                    {!isShown ? (
                        <h1 className=" text-md font-medium text-slate-200 mr-3">Change to CSS → </h1>
                    ) : (
                        <h1 className=" text-md font-medium text-slate-200 mr-3">TAILWIND → </h1>
                    )}
                    <label className="inline-flex relative  z-1 items-center cursor-pointer  ">
                        <input onClick={handleClick} type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-md font-medium  text-slate-500  "> </span>
                    </label>
                </div>
            </div>

            {/* Whole section with elements */}
            {!isShown && <TailwindElements />}
            {isShown && <CssElements />}

            {/* Contacts section */}
            <div className="bg-white w-100 px-4   py-20 gap-2 lg:px-60 grid grid-cols-4 border-slate-300">
                <div className=" col-span-4 lg:col-span-3 ">
                    <h3 className="text-black font-extrabold text-3xl m-2"> Contribute to Bricks and become a part of our community.</h3>
                    <h1 className="text-slate-700 m-2">By sending us your templates, you can help us create the <b>best platform for web development.</b> As a contributor, you will be featured in the contributors section on our website.<br /><b> Join us in building the future of web development with Bricks.</b></h1>
                </div>
                <div className="col-span-4 lg:col-span-1 justify-center items-center text-center grid grid-cols-1 p-2">


                    <button onClick={() => {
                        setShowForm(true);
                    }} className="border-[1px] rounded-3xl m-2 bg-black h-[50px] w-[180px] hover:bg-white hover:border-[2px] group hover:border-black">
                        <p className="text-slate-200 group-hover:text-black group-hover:font-bold">Contact us →</p>
                    </button>
                    <Link to={"/BricksHub"}>
                        <button className="border-[1px] border-black m-2 rounded-3xl bg-white h-[50px] w-[180px] hover:bg-black hover:border-[2px] group hover:border-white">
                            <p className="group-hover:text-white group-hover:font-bold" >Bricks Hub →</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ComponentsPage