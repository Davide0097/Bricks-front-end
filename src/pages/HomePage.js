// Images
import Logo from '../media/logoBlog.png'
import LoginCard from '../media/Login.jpg'
import Fav from '../media/favourites.png'
import chain from '../media/chain.jpg'
import todo from '../media/todo.jpg'
import componentNav from "../media/navbars.png"
import componentCard from "../media/cards.png"
import componentButt from "../media/buttons.png"
import componentOther from "../media/otherscomponents.png"

// Components
import ContactForm from '../components/EmailForm';

// React link
import { Link } from 'react-router-dom'

// Contentful authors
import useContentfulAuthors from "../hooks/useContentfulAuthors"
import useContentful from "../hooks/useContentfulPost"
import useContentfulComponents from '../hooks/useContentfulComponents'

// Use effect, useState
import React, { useState, useEffect } from 'react';

const HomePage = () => {


  const [showForm, setShowForm] = useState(false)
  const { getAuthors } = useContentfulAuthors();
  const { getPosts } = useContentful();
  const { getComponents } = useContentfulComponents();

  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([])
  const [components, setComponents] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showForm]);

  const handleScroll = () => {
    const showcase = document.querySelector('.author-showcase');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (showcase && scrollIndicator) {
      const { scrollTop, scrollHeight, clientHeight } = showcase;
      const scrollRatio = scrollTop / (scrollHeight - clientHeight);
      const scrollIndicatorHeight = 50; // Adjust this to match your desired scrollbar indicator height
      const scrollIndicatorY = scrollRatio * (clientHeight - scrollIndicatorHeight);
      scrollIndicator.style.transform = `translateY(${scrollIndicatorY}px)`;
    }
  };

  useEffect(() => {
    const showcase = document.querySelector('.author-showcase');
    showcase.addEventListener('scroll', handleScroll);
    return () => showcase.removeEventListener('scroll', handleScroll);
  }, []);

  // Use effect to get the authors information with author.authorName = index
  useEffect(() => {
    try {
      getAuthors().then((response) =>
        setAuthors(response));
    } catch (error) {
      console.log("my message: error getting templates in homePage.js")
      console.error(error)
    }
  }, [])

  useEffect(() => {
    try {
      getPosts().then((response) =>
        setPosts(response));
    } catch (error) {
      console.log("my message: error getting posts in homePage.js")
      console.error(error)
    }
  }, [])

  useEffect(() => {
    try {
      getComponents().then((response) =>
        setComponents(response));
    } catch (error) {
      console.log("my message: error getting components in homePage.js")
      console.error(error)
    }
  }, [])

  return (
    <div>
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

      {/* Hero */}
      <div className="2xl:px-20 sm:p-10 w-full bg-gradient-to-b from-slate-300 to-white pt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={Logo} alt="Bricks Logo" className="sm:mt-20 w-[300px] h-[300px]" />
          <h1
            className="uppercase font-bold text-transparent md:px-60 h-[240px] 2xl:h-[160px] bg-clip-text bg-gradient-to-r from-pink-600 px-10 to-blue-600 text-5xl sm:text-7xl  text-center mt-2 tracking-thight">
            Speed up your deployment
          </h1>
          <p className=" px-2 text-slate-500 text-2xl text-center"><b>BUILD THE WEB FASTER.<br /></b>Browse around beautiful <b> Templates
          </b> and <b>Components.</b>
          </p>
          <div className="p-8 flex flex-col sm:flex-row justify-center items-center">
            <Link to="/TemplatesPage">
              <button className="border-[1px] rounded-3xl m-2 bg-black h-[50px] w-[180px] hover:bg-white hover:border-[2px] group hover:border-black">
                <p className="text-slate-200 group-hover:text-black group-hover:font-bold">Templates →</p>
              </button>
            </Link>
            <Link to="/ComponentPage">
              <button className="border-[1px] border-black m-2 rounded-3xl bg-white h-[50px] w-[180px] hover:bg-black hover:border-[2px] group hover:border-white">
                <p className="group-hover:text-white group-hover:font-bold" >Components →</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards for Bricks Hub and author showcase */}
      <Link to={"/BricksHub"}>
        <div className='bg-slate-100 py-4 sm:py-6 border-[1px]'>

          <h1 className="uppercase font-bold text-transparent  
          h-[200px] sm:h-[390px] md:h-[260px] 2xl:h-[170px] 
          bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 
          text-4xl sm:text-6xl 
          sm:px-20 lg:mt-28 2xl:m-20 text-center mt-20 tracking-thight">
            Become a part of our growing community with <b>Brickshub.</b>
          </h1>

          <div className='w-full -translate-y-6 flex flex-col pb-4 pt-10 lg:py-1 lg:flex md:flex-row mb-10 justify-center items-center'>
            <div>
              <h1 className='p-4 font-bold px-2 text-5xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>{components.length}</h1>
              <h1 className='p-4 pt-1 font-bold px-2 text-3xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>components</h1>
              <div className='mt-1 h-[300px] w-[300px] overflow-auto author-showcase'>
                {(components && components.map((component) => (
                  <div key={component.componentName} className='my-1 flex flex-row justify-center items-center hover:bg-slate-300'>
                    <p className='font-bold px-2 text-slate-500 text-xl text-center'>- {component.componentName}</p>
                  </div>
                )))}
              </div>
            </div>
            <div>
              <h1 className='p-4 font-bold px-2 text-5xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'> {authors.length}</h1>
              <h1 className='p-4 pt-1 font-bold px-2 text-3xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>contributors</h1>
              <div className='mt-1 h-[300px] w-[300px] overflow-auto author-showcase'>
                {(authors && authors.map((author) => (
                  <div key={author.authorName} className='flex flex-row justify-center items-center hover:bg-slate-300'>
                    <img className='rounded-full w-8 h-8 sm:h-10 sm:w-10 object-cover p-1 m-1' src={author.authorImg.fields.file.url} alt="profile pic"></img>
                    <p className='font-bold px-2 text-slate-500 text-xl text-center'>{author.authorName}</p>
                  </div>
                )))}
              </div>
            </div>
            <div>
              <h1 className='p-4 font-bold px-2 text-5xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>{posts.length}</h1>
              <h1 className='p-4 pt-1 font-bold px-2 text-3xl text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>posts</h1>
              <div className='mt-1 h-[300px] w-[300px] overflow-auto author-showcase'>
                {(posts && posts.map((post) => (
                  <div key={post.postTitle} className='my-1 flex flex-row justify-center items-center hover:bg-slate-300'>
                    <p className='font-bold px-2 text-slate-500 text-xl text-center'>- {post.postTitle}</p>
                  </div>
                )))}
              </div>
            </div>
          </div>

          <div className="2xl:px-60 grid grid-cols-10 gap-4  px-4 sm:px-20 bg-slate-100 ">
            <div
              className="col-span-4 max-[900px]:col-span-10 col-rows-2  row-span-2  rounded-xl w-100 border-[1px] text-center cursor-pointer bg-white sm:py-20 ">
              <div className="flex flex-col justify-center items-center p-6">
                <div className='w-[270px] flex flex-row mt-14 items-center px-2 bg-black justify-center'>
                  <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                  <h1 className="text-white text-2xl float-left p-2 ml-2">Bricks</h1>
                  <h1 className="text-white text-2xl float-left -ml-2 p-2">Hub</h1>
                </div>
                <p className="text-slate-500 text-xl py-2 pt-10 ">A user-friendly <b>dashboard</b> that allows Bricks members to easily contribute to the platform by submitting posts, templates and components.</p>
                <p className="text-slate-500 text-xl py-2 pt-10 ">A <b>powerful tool </b>for anyone looking to share their skills and collaborate with others.</p>
                <button className="bg-black border-[1px] my-8  border-slate-400 w-[150px] rounded-[100px] h-[50px] hover:bg-white hover:border-[2px] group hover:border-black">
                  <p className="text-normal text-slate-200  group-hover:text-black group-hover:font-bold">Try Now</p>
                </button>
              </div>
            </div>
            <div className="max-[900px]:col-span-10 col-span-3  bg-white rounded-xl text-center flex flex-col justify-center items-center  p-2 border-[1px] cursor-pointer ">
              <img className="w-[270px] h-[250px] object-cover p-2" alt="Login card" src={LoginCard} />
              <h1 className="text-slate-700 text-2xl font-mono p-2">Create your account</h1>
              <p className="text-slate-500 text-xl p-2 font-mono">Sign up and Log in function.</p>
            </div>  <div
              className="max-[900px]:col-span-10 col-span-3 bg-white text-center rounded-xl border-[1px] cursor-pointer overflow-hidden p-2">
              <p className="bg-slate-100 w-12 font-bold float-right  border-[1px] text-sm text-slate-700">BETA</p>
              <h1 className="text-slate-700 text-2xl py-2 mt-10 font-mono ">Add your content</h1>
              <p className="text-slate-500 text-xl px-6"></p>
              <img alt="favorites card" className="ml-28  w-[240px] h-[240px]" src={Fav} />
            </div>
            <div className="max-[900px]:col-span-10 col-span-3 bg-white flex flex-col justify-center items-center rounded-xl text-center border-[1px] py-6 cursor-pointer">
              <h1 className="text-slate-800  text-2xl font-mono p-2">Manage your submissions</h1>
              <img className="w-[270px] h-[270px] object-cover" alt="todo card" src={todo} />
            </div>
            <div className=" max-[900px]:col-span-10 col-span-3  bg-white text-center rounded-xl cursor-pointer py-4 border-[1px] flex flex-col justify-center items-center">
              <img className="w-[300px] h-[200px] " alt="chain card" src={chain} />
              <p className="text-slate-700  text-2xl p-2 font-mono tracking-thight"> <b>Join</b> a fast growing network.</p>
            </div>
          </div>
        </div>
      </Link>

      {/* Components */}
      <div className="2xl:px-40 bg-slate-100 py-20 flex flex-col justify-center items-center h-auto">
        <h1 className="text-4xl font-bold m-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Bricks components</h1>
        <h1 className="text-slate-700 text-xl pb-10 sm:mx-40 text-center m-4 ">Explore our collection of Tailwind and plain CSS <b>pre-made blocks</b> for constructing <b>SEO-optimized, clean, responsive, and interactive pages.</b>
        </h1>
        <div className="flex flex-col items-center">
          <div>
            <h1 className="hidden sm:flex md:ml-[300px] text-2x font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-300 p-2 to-slate-400">Navigation bars</h1>
            <img src={componentNav} alt="navigation bars card" className="-rotate-12 w-[300px] hover:rotate-0 h-[200px] border-[3px] rounded-md md:mr-[900px] -mb-40 " /></div>
          <div>
            <h1 className="hidden sm:flex md:ml-[300px] text-2x font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-400 p-2 to-slate-500">Cards</h1>
            <img src={componentCard} alt="cards card" className="-rotate-12 mt-28 sm:mt-2 hover:rotate-0 h-[200px] w-[300px] border-[3px] rounded-md md:mr-[700px] -mb-40" /></div>
          <div>
            <h1 className="hidden sm:flex md:ml-[300px] text-2x font-semibold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-500 p-2 to-slate-600">Buttons</h1>
            <img src={componentButt} alt="buttons card" className="-rotate-12 mt-28 sm:mt-2 w-[300px] h-[200px] border-[3px] rounded-md  md:mr-[300px] -mb-40 hover:rotate-0 " />
          </div>
          <div>
            <h1 className="md:ml-[600px] hidden sm:flex text-2x font-semibold text-4xl rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-slate-700 p-2  to-slate-800">...and much <b>More</b></h1>
            <img src={componentOther} alt="others components card" className="-rotate-12 hover:rotate-0 h-[200px] mt-28 sm:mt-2 md:ml-[300px] border-[3px] rounded-md w-[300px] -mb-28  " />
          </div>
        </div>
        <button className="bg-blue-600 w-[230px] h-[50px] border-[1px] rounded-xl m-2 mt-48 hover:bg-white hover:border-[1px] group hover:border-blue-600">
          <Link to="/ComponentPage">
            <p className="text-white text-xl  group-hover:text-blue-600">Get started</p>
          </Link>
        </button>
      </div>

      {/* Templates */}
      <div className="2xl:px-60 bg-slate-100 py-20 flex flex-col justify-center items-center border-[1px] border-slate-300">
        <h1 className=" my-4 font-bold text-4xl m-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Bricks Templates</h1>
        <h1 className="text-slate-700 text-xl pb-10 sm:mx-40 text-center m-4">Explore our collection of templates,<br /> each with its own <b>GitHub repository and comprehensive documentation.</b></h1>
        <div className="w-full grid grid-cols-1 2xl:px-60 md:grid-cols-3 mx-2 md:px-40 gap-10 py-10">
          <div className="border border-slate-300 min-w[300px] bg-white rounded-xl m-2 p-4">
            <h1 className="font-bold">MERN Stack Blog</h1>
            <p className="text-slate-700 p-1">Blog builded on MERN stack.</p>
            <p className="text-blue-600 text-bold mt-10">Documentation →</p>
          </div>
          <div className="border border-slate-300 min-w[300px] m-2 bg-white rounded-xl p-4">
            <h1 className="font-bold">Auth with JWT</h1>
            <p className="text-slate-700 p-1">User Signup and Login using JWT token.</p>
            <p className="text-blue-700 text-bold mt-10">Documentation →</p>
          </div>
          <div className="border border-slate-300 min-w[300px] m-2 bg-white rounded-xl p-4">
            <h1 className="font-bold">E-commerce</h1>
            <p className="text-slate-700 p-1">E-commerce website template.</p>
            <p className="text-blue-700 text-bold mt-10">Documentation →</p>
          </div>
        </div>
        <button className="bg-blue-600 w-[230px] h-[50px] border-[1px] rounded-xl m-2 mt-10 hover:bg-white hover:border-[1px] group hover:border-blue-600  ">
          <Link to="/TemplatesPage"><p className="text-white text-xl  group-hover:text-blue-600">Get started</p></Link>
        </button>
      </div>

      {/* Email box */}
      <div className="2xl:px-40 bg-white w-100 px-4 sm:px-20 py-20 grid grid-cols-4 gap-0 justify-center items-center border-[1px] border-slate-300">
        <div className="col-span-4 md:col-span-3 lg:col-span-3 sm:px-20 py-2">
          <h1 className="font-bold text-4xl py-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Are you passionate about coding and sharing your ideas with the world? </h1>
          <h1 className="text-slate-800 font-bold text-xl my-2">We are looking for talented contributors for Bricks.</h1>
          <h1 className="text-slate-700 text-xl my-2"> If you're interested in becoming a part of our community, please get in touch, let us know how you'd like to<b> contribute!</b></h1>
        </div>
        <div className="col-span-4 lg:col-span-1 text-center py-2 justify-center items-center">
          <button onClick={() => { setShowForm(true); }}
            className="bg-black border-[1px]  rounded-3xl m-2 h-[50px] w-[180px] hover:bg-white hover:border-[2px] group hover:border-black">
            <p className="text-slate-200  group-hover:text-black group-hover:font-bold text-xl">Contacts</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage 