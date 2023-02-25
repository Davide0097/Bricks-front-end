// Overview: fixed component rendered in all the pages

// Link import
import { Link } from 'react-router-dom'

// Images
import Logo from '../media/logoBlog.png'
import Github from '../media/github.png'

// Get post from contentful CMS
import useContentful from "../hooks/useContentfulPost"

// UseState and sueEffect
import React, { useState, useEffect } from 'react';

const Navbar = () => {

    // Function to get posts
    const { getPosts } = useContentful()

    // State for the posts array, state for the search bar and state for the rendered posts
    const [posts, setPosts] = useState([])
    const [showDiv, setShowDiv] = useState(false);
    const [casualTitle, setCasualTitle] = useState([]);
    const [loading, setLoading] = useState(true)

    // Use effect to put the received posts in the posts state
    useEffect(() => {
        try {
            getPosts().then((response) => {
                setPosts(response);
                setLoading(false); // set loading to false when the response is received
            });
            const randomIndex = Math.floor(Math.random() * posts.length);
            const randomPost = posts[randomIndex];
            if (posts.length > 0) {
                setCasualTitle(randomPost.postTitle);
            }
            if (randomPost && randomPost.postTitle) {
                setCasualTitle(randomPost.postTitle);
            }
        } catch (error) {
            console.log('my message: error setting a random posts');
            console.error(error);
        }
    }, [loading]);


    return (
        <div>

            {/* Banner */}
            <Link to={"/Login"}>
                <div className="bg-black w-screen px-4 md:px-40 lg:px-40 2xl:px-[400px] fixed z-[20] ">
                    <h1 className="text-white text-2xl float-left p-2 ml-2">Bricks Hub</h1>
                    <h1 className="text-slate-300 text-bold float-right max-[395px]:hidden p-4">Try <b>Bricks hub, </b>the contributors dashbord →</h1>
                </div>
            </Link>

            {/* Navbar che sparisce a 1000*/}
            <div id="navbar" className="w-screen  max-[1000px]:hidden px- md:px-40 lg:px-40 2xl:px-[400px] mt-[51px] h-[80px] fixed py-1 z-[20] justify-center bg-opacity-40 backdrop-blur-lg drop-shadow-lg">
                <div className="ml-4 grid grid-cols-12 content-center h-[80px]">
                    <Link className='flex ' to="/">
                        <img src={Logo} alt="blog Logo" className="w-[25px] h-[25px] mr-1 " />
                        <h1 className=" -translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1> </Link>
                    <Link to="/BlogPage"> <p className="text-slate-500  p-1 font-semibold text-center  cursor-pointer hover:text-slate-700 ">Blog</p> </Link>
                    <Link to="/AboutPage">  <p className="text-slate-500 w-20  p-1 font-semibold  text-center cursor-pointer hover:text-slate-700 ">About</p> </Link>
                    <Link to="/TemplatesPage"> <p className="text-slate-500 w-20 p-1 font-semibold text-center cursor-pointer  hover:text-slate-700">Templates</p> </Link>
                    <Link to="/ComponentPage"> <p className="text-slate-500 w-20 p-1 ml-4 font-semibold text-center cursor-pointer hover:text-slate-700">Components</p>   </Link>
                    <p className="text-slate-500 w-20   ml-4 p-1 font-semibold text-center cursor-pointer hover:text-slate-700">
                    </p>
                    <p className="text-slate-500 w-20 ml-8 p-1  font-semibold text-center cursor-pointer hover:text-slate-700">
                    </p>
                    <div></div>
                    <div></div>
                    <Link to="/BlogPage" onClick={() => {
                        setShowDiv(!showDiv);
                    }}
                    >
                        <button className=" h-[37px] w-18 bg-white font-semibold -translate-y-1 rounded-md  border-[1px] border-slate-100 hover:border-black">
                            <p className="text-slate-600">Feedback</p>
                        </button></Link>
                    <Link to={`/BlogPost/${casualTitle}`} onClick={() => setShowDiv(!showDiv)}> <button
                        className="h-[37px] rounded-md w-18 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold ">?</p>
                    </button></Link>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Davide0097/">
                        <img src={Github} alt="gitHub Logo" className="w-[35px] h-[35] ml-2 p-1 " />
                    </a>
                </div>
            </div>

            <div id="navbar" className="  w-screen  max-[1000px]:hidden px- md:px-40 lg:px-40 2xl:px-[400px] mt-[51px] h-[80px] fixed py-1 z-[20] justify-center bg-opacity-40 backdrop-blur-lg drop-shadow-lg">
                <div className="ml-4 grid grid-cols-12 content-center h-[80px]">
                    <Link className='flex ' to="/">                    <img src={Logo} alt="blog Logo" className="w-[25px] h-[25px] mr-1 " />
                        <h1 className=" -translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1> </Link>
                    <Link to="/BlogPage"> <p className="text-slate-500  p-1 font-semibold text-center cursor-pointer hover:text-slate-700 ">Blog</p> </Link>
                    <Link to="/AboutPage">  <p className="text-slate-500 w-20  p-1 font-semibold  text-center cursor-pointer hover:text-slate-700 ">About</p> </Link>
                    <Link to="/TemplatesPage"> <p className="text-slate-500 w-20 p-1 font-semibold text-center cursor-pointer  hover:text-slate-700">Templates</p> </Link>
                    <Link to="/ComponentPage"> <p className="text-slate-500 w-20 p-1 ml-4 font-semibold text-center cursor-pointer hover:text-slate-700">Components</p>   </Link>
                    <p className="text-slate-500 w-20   ml-4 p-1 font-semibold text-center cursor-pointer hover:text-slate-700">
                    </p>
                    <p className="text-slate-500 w-20 ml-8 p-1  font-semibold text-center cursor-pointer hover:text-slate-700">
                    </p>
                    <div></div>
                    <div></div>
                    <Link to="/AboutPage" onClick={() => setShowDiv(!showDiv)}><button
                        className=" h-[37px] w-18 bg-white font-semibold -translate-y-1 rounded-md  px-1 border-[1px] border-slate-100 hover:border-black">
                        <p className="text-slate-600 ">Feedback</p>
                    </button></Link>
                    <Link to={`/BlogPost/${casualTitle}`} onClick={() => setShowDiv(!showDiv)}> <button
                        className="h-[37px] rounded-md w-[70px] -translate-y-1 ml-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold ">?</p>
                    </button></Link>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Davide0097/">
                        <img src={Github} alt="gitHub Logo" className="w-[35px] h-[35] ml-2 p-1 " />
                    </a>
                </div>
            </div>

            {/* menù completo sotto i 1000 */}
            <div className='w-screen min-[1000px]:hidden  px-6 md:px-40 lg:px-40 2xl:px-[400px] mt-[51px] h-[60px] fixed py-1 z-[20] justify-center bg-opacity-60 backdrop-blur-lg drop-shadow-lg'>
                <div className="flex flex-rows">
                    <Link onClick={() => setShowDiv(!showDiv)} className='flex mt-3' to="/">
                        <img alt="blog Logo" src={Logo} className="w-[25px] h-[25px] mr-1 " />
                        <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1>
                    </Link>
                    <div className="flex-1"></div>
                    <div onClick={() => setShowDiv(!showDiv)} className='grid grid-cols-1 cursor-pointer mt-4'>
                        <div className='bg-pink-600 h-[4px] w-[40px]'></div>
                        <div className='bg-yellow-500 h-[4px] w-[40px]'></div>
                        <div className='bg-blue-600 h-[4px] w-[40px]'></div>

                    </div>
                </div>
            </div>
            {showDiv && <div className='w-screen h-[1000px]  min-[1000px]:hidden  bg-white bg-opacity-60 backdrop-blur-lg drop-shadow-lg  fixed py-10 mt-[105px] z-20'>
                <div className='grid grid-cols-2 items-center justify-center gap-2 px-4'>

                    <div className='col-span-2 py-3'>
                        <Link className="" to="/" onClick={() => setShowDiv(!showDiv)}>
                            <p className="text-slate-800 text-2xl p-2 font-bold text-center cursor-pointer hover:text-slate-700 uppercase underline">Home</p>
                        </Link>
                    </div>

                    <div className='col-span-2 flex justify-center items-center py-3'>
                        <Link to="/BricksHub" onClick={() => setShowDiv(!showDiv)}>
                            <div className='flex flex-row items-center px-2 bg-black justify-center'>
                                <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                                <h1 className="text-white text-2xl float-left p-2 ml-2">Bricks</h1>
                                <h1 className="text-white text-2xl float-left -ml-2 p-2">Hub</h1>
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link to="/BlogPage" onClick={() => setShowDiv(!showDiv)}>
                            <p className="text-slate-800 py-3 text-2xl p-2  font-bold text-center cursor-pointer hover:text-slate-700 underline uppercase">Blog</p>
                        </Link>
                    </div>

                    <div>
                        <Link to="/AboutPage" onClick={() => setShowDiv(!showDiv)}>
                            <p className="text-slate-800 py-3 text-2xl p-2 font-bold  text-center cursor-pointer hover:text-slate-700 underline uppercase">About </p>
                        </Link>
                    </div>

                    <div>
                        <Link to="/TemplatesPage" onClick={() => setShowDiv(!showDiv)}>
                            <p className="text-slate-800 text-2xl py-3 p-2 font-bold text-center cursor-pointer hover:text-slate-700 uppercase underline">templates </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/ComponentPage" onClick={() => setShowDiv(!showDiv)}>
                            <p className="text-slate-800 py-3 text-2xl p-2 font-bold  text-center cursor-pointer hover:text-slate-700 underline uppercase">components </p>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center py-3 mt-6'>
                        <Link to="/AboutPage" onClick={() => setShowDiv(!showDiv)}> <button
                            className=" h-[37px] w-[150px] bg-white  font-semibold  rounded-md  border-[1px] border-slate-100 hover:border-black">
                            <p className="text-slate-600 text-2xl ">Feedback</p>
                        </button>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center py-3 mt-6'>
                        <Link to={`/BlogPost/${casualTitle}`} onClick={() => setShowDiv(!showDiv)}><button
                            className=" h-[37px] w-[150px]  rounded-md  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                            <p className="text-white  text-2xl   group-hover:text-blue-600 font-semibold ">?</p>
                        </button>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center col-span-2 mt-10'>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Davide0097/">
                            <img src={Github} alt="gitHub Logo" className="w-[55px] p-1" />
                        </a>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Navbar
