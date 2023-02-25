// Use params
import { useParams } from "react-router-dom";

import { formatDistanceToNow, secondsToMilliseconds } from 'date-fns'

// Links
import { Link } from 'react-router-dom';

// UseState e useEffect
import { useState, useEffect } from "react";

// Img
import Logo from "../media/logoBlog.png"
import Bricks from "../media/bricks.png"
import sep from "../media/778.png"

// Components
import PieChart from "../components/PieChartProfile";

// Parallax
import { Parallax } from 'react-parallax';

// Contentful Hooks
import useContentful from "../hooks/useContentfulPost"
import useContentfulTemplates from "../hooks/useContentfulTemplates"
import useContentfulComponents from '../hooks/useContentfulComponents'
import useContentfulCssComponents from '../hooks/useContentfulCssComponents'
import useContentfulAuthors from "../hooks/useContentfulAuthors"

const AuthorPage = () => {

  // Taking URL value (name of the Author)
  const { index } = useParams();

  // Importing function from contentful hooks
  const { getPosts } = useContentful();
  const { getTemplates } = useContentfulTemplates();
  const { getAuthors } = useContentfulAuthors();
  const { getComponents } = useContentfulComponents();
  const { getCssComponents } = useContentfulCssComponents();

  // Inizializing the state for 
  // Author(author informations), 
  // Author's components, 
  // Author's templates, 
  // Author's posts
  // (all of them are arrays)
  const [author, setAuthor] = useState([]);
  const [components, setComponents] = useState([])
  const [cssComponents, setCssComponents] = useState([]);
  const [templates, setTemplates] = useState([])
  const [posts, setPosts] = useState([])
  const [pic, setPic] = useState("");
  const [date, setDate] = useState();

  //Inizializing the state of Counters, total number of posts 
  const [postCount, setPostCount] = useState(0)
  const [templatesCount, setTemplatesCount] = useState(0)
  const [componentsCount, setComponentsCount] = useState(0)
  const [cssComponentsCount, setCssComponentsCount] = useState(0)

  // Use effect to set the component state equal to filtered response array, i only set the state equal to component with component author = index
  useEffect(() => {
    getComponents().then(response => {
      // Filter the posts to only get the ones with the matching author
      const allComponents = response.filter(component => component.componentAuthor === index);
      setComponents(allComponents);
      setComponentsCount(allComponents.length);
    })
  }, [])

  // CSS-COMPONENTS 
  useEffect(() => {
    try {
      getCssComponents().then(response => {
        const allCssComponents = response.filter(component => component.componentAuthor === index);
        setCssComponents(allCssComponents);
        setCssComponentsCount(allCssComponents.length)
      })
    } catch (error) {
      console.log(error)
    }
  }, []);

  // Use effect to set the templates state equal to filtered response array, i only set the state equal totemplates with template author = index
  useEffect(() => {
    getTemplates().then(response => {
      const alltemplates = response.filter(template => template.templateAuthor === index);
      setTemplates(alltemplates)
      setTemplatesCount(alltemplates.length)
    })
  }, [])

  // Use effect to set the posts state equal to filtered response array, i only set the state equal to posts with posts author = index
  useEffect(() => {
    getPosts().then(response => {
      // Filter the posts to only get the ones with the matching author
      const allPosts = response.filter(post => post.postAuthor === index);
      setPosts(allPosts)
      setPostCount(allPosts.length)
    })
  }, [])

  // Use effect to get the authors information with author.authorName = index
  useEffect(() => {
    getAuthors().then(response => {
      const author = response.find(author => author.authorName === index);
      setAuthor(author);
      // Use effect for setting author=true if i have published author profile that matches the name of the logged account

      console.log(author.authorImg.sys.createdAt)
      setDate(formatDistanceToNow(new Date(author.authorImg.sys.createdAt), { addSuffix: true }))
      setPic(author.authorImg.fields.file.url)
    })
  }, [])
  return (
    <>
      <div className="pt-28 px-2 bg-slate-900 sm:px-10 md:px-20 lg:px-60 2xl:px-[400px]">

        {/* div with name, photo, tags, contributions*/}
        <div className="fixed m-2 p-2">
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 text-md sm:text-xl to-blue-600 p-1 sm:py-1">AUTHOR</p>
          <p className="font-bold text-white text-3xl sm:text-4xl  uppercase p-1 pt-0 sm:py-2">{author.authorName}</p>

          <div className="flex justify-between sm:px-10 lg:px-60 ">
            <div className="p-1 m-1">
              <img src={pic} alt="profile avatar" className="rounded-full w-28 h-28 sm:h-48 sm:w-48 object-cover p-1 m-1" />
            </div>
            <div className="flex flex-col justify-center items-center p-1 m-1 ">
              <p className="font-bold text-sm sm:text-2xl text-slate-900 rounded-md text-center bg-pink-600 p-1 m-1 px-7 w-[150px]">{author.firstTag}</p>
              <p className="font-bold text-sm sm:text-2xl text-slate-900 rounded-md text-center bg-yellow-400 p-1 m-1 px-7 w-[150px]">{author.secondTag}</p>
              <p className="font-bold text-sm sm:text-2xl text-slate-900 rounded-md text-center bg-blue-600 p-1 m-1 px-7 w-[150px]">{author.thirdTag}</p>
            </div>
            <div className="p-1 m-1 flex flex-col justify-center items-center">
              <img src={Bricks} alt="bricks icon" className="sm:w-24" />
              <p className="text-white font-bold text-center text-5xl">{postCount + templatesCount + componentsCount + cssComponentsCount}</p>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-center">BRICKS</p>
            </div>
          </div>
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 text-md sm:text-xl to-blue-600 p-1 sm:py-2">Active since:</p>
          <p className="font-bold text-white uppercase from-pink-600 text-md sm:text-xl to-blue-600 p-1 sm:py-2">{date}</p>
        </div>

        {/* div with chart */}
        <div className="grid grid-col items-center m-1 py-3 mx-2 mt-[300px] sm:mt-[420px] bg-opacity-60 backdrop-blur-lg drop-shadow-lg justify-center rounded-xl border-[1px]">
          <PieChart postCount={postCount} templatesCount={templatesCount} componentsCount={componentsCount} cssComponentsCount={cssComponentsCount} />
          <div className="grid grid-col">
            <div className="flex flex-row-1 justify-center items-center py-2">
              <img src={Bricks} alt="bricks icon" className="h-[40px]" />
              <p className="font-bold text-white ml-2 text-xl sm:text-5xl to-blue-600">CONTRIBUTIONS: {postCount + templatesCount + componentsCount + cssComponentsCount}</p>
            </div>
            <div className="grid grid-cols-3 py-2">
              <div className="grid grid-cols-1 w-100 justify-center items-center">
                <p className="text-slate-300 font-bold text-center text-md  sm:text-xl">TEMPLATES</p>
                <p className="text-white text-center  text-xl  sm:text-3xl">{templatesCount}</p>
              </div>
              <div className="grid grid-cols-1 w-100 justify-center items-center">
                <p className="text-slate-300 font-bold text-center text-md  sm:text-xl">POST</p>
                <p className="text-white text-center text-xl sm:text-3xl ">{postCount}</p>
              </div>
              <div className="grid grid-cols-1 w-100 justify-center items-center">
                <p className="text-slate-300 font-bold text-center text-md  sm:text-xl">COMPONENTS</p>
                <p className="text-white text-center text-xl sm:text-3xl">{componentsCount + cssComponentsCount}</p>
              </div>
            </div>
          </div>
        </div>

        {/*  Post and parallax*/}
        <div className="grid  border-slate-300 py-4 m-1 my-1  grid-col items-center bg-opacity-40 backdrop-blur-lg drop-shadow-lg px-4">
          <Parallax bgImage={sep}
            blur={{ min: -15, max: 15 }}
            className=" h-40 lg:h-60  pt-[-10px] "
            bgImageAlt="blog logo"
            strength={200}>
            <p className="absolute font-extrabold z-10 text-4xl uppercase sm:text-6xl p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white pt-7 sm:pt-8">Discover how I contribute to Bricks →</p>
          </Parallax>
          <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 flex-shrink-0 w-16 h-16 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3v18h18V3H3m15 15H6v-1h12v1m0-2H6v-1h12v1m0-4H6V6h12v6z" />
          </svg>
          <p className="text-3xl mt-4 text-transparent bg-clip-text bg-gradient-to-r font-bold from-blue-600 to-white  sm:text-3xl">Posts uploaded:</p>
          {posts.map(post => (
            <Link to={`/BlogPost/${post.postTitle}`} key={post.postTitle} post={post} >
              <div className="">
                <div className="flex flex-row-1 items-center">
                  <h1 className="text-slate-200 text-left text-xl p-1 sm:text-2xl">-  {post.postTitle} </h1>
                  <p className="ml-3 font-semibold text-sm text-slate-200 bg-blue-600 rounded-md  px-2 py-1 sm:text-xl">READ →</p>
                </div>
                <div className="flex flex-row-1">
                  <h1 className="p-1 text-slate-400 text-center text-md sm:text-1xl">{post.postDate}</h1>    </div></div>
            </Link>
          ))}
        </div>

        {/* Components */}
        <div className="grid grid-col  border-slate-300 m-1 py-4 items-center px-4  my-1 bg-opacity-40 backdrop-blur-lg drop-shadow-lg lg:py-1">
          <svg aria-hidden="true" className="max-[700px]:w-10 mt-4 ml-1 max-[700px]:h-10 flex-shrink-0 w-16 h-16 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <p className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r font-bold  from-blue-600 to-white sm:text-3xl pb-2">Components uploaded:</p>
          {components.map(component => (
            <div className="flex flex-row-1" key={component.componentName}>
              <h1 className="text-slate-200 text-left text-xl p-1 sm:text-2xl">- {component.componentName}</h1>
              {/* <p className="p-2 text-slate-200 text-md">{component.componentPreview.sys.createdAt}</p> */}
            </div>
          ))}
        </div>

        {/* CSS Components */}
        <div className="grid grid-col  border-slate-300 m-1 py-4 items-center px-4  my-1 bg-opacity-40 backdrop-blur-lg drop-shadow-lg lg:py-1">
          <svg aria-hidden="true" className="max-[700px]:w-10 mt-4 ml-1 max-[700px]:h-10 flex-shrink-0 w-16 h-16 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <p className=" text-3xl text-transparent bg-clip-text bg-gradient-to-r font-bold  from-blue-600 to-white sm:text-3xl pb-2">Css components uploaded:</p>
          {cssComponents.map(component => (
            <div className="flex flex-row-1" key={component.componentName}>
              <h1 className="text-slate-200 text-left text-xl p-1 sm:text-2xl">- {component.componentName}</h1>
              {/* <p className="p-2 text-slate-200 text-md">{component.componentPreview.sys.createdAt}</p> */}
            </div>
          ))}
        </div>

        {/* Templates */}
        <div className="justify-center  border-slate-300 m-1 py-4  items-center px-4  bg-opacity-40 backdrop-blur-lg drop-shadow-lg  lg:py-1">
          <svg aria-hidden="true" className="max-[700px]:w-10 p-1 mt-4 ml-2 max-[700px]:h-10 flex-shrink-0 w-16 h-16 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="white"
              d="M6 3h2v1H6zm3 0h2v1H9zm5 0v4h-3V6h2V4h-1V3zM5 6h2v1H5zm3 0h2v1H8zM3 4v2h1v1H2V3h3v1zm3 5h2v1H6zm3 0h2v1H9zm5 0v4h-3v-1h2v-2h-1V9zm-9 3h2v1H5zm3 0h2v1H8zm-5-2v2h1v1H2V9h3v1zm12-9H1v14h14V1zm1-1v16H0V0h16z"
            />                           </svg>
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold  from-blue-600 to-white sm:text-3xl">Templates uploaded:</p>
          {templates.map(template => (
            <div key={template.templateTitle}>
              <h1 className="p-1 text-slate-200 text-xl sm:text-2xl">- {template.templateTitle}</h1>
            </div>
          ))}
        </div>

        {/* Author info */}
        <div className="grid grid-col items-center px-4 py-3 bg-opacity-40 backdrop-blur-lg drop-shadow-lg pb-40 ">
          <Parallax bgImage={sep}
            blur={{ min: -15, max: 15 }}
            className=" h-28 lg:h-40  pt-[10px] "
            bgImageAlt="blog logo"
            strength={200}>
            <p className="absolute font-extrabold z-10 text-4xl p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-white -mt-5 sm:pt-12 uppercase">Read more about me →</p>
          </Parallax>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-bold pt-10 from-blue-600 to-white sm:text-3xl">About me:</p>
          <p className="p-1 text-slate-200 text-xl sm:text-2xl lg:py-3">{author.authorIntro}</p>
          <p className="p-1 text-slate-200 text-xl sm:text-2xl lg:pt-3">{author.authorDescription}</p>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r font-bold pt-10 from-blue-600 to-white sm:text-3xl">Links:</p>
          <a rel="noreferrer" target="_blank" href={author.authorInstagram}>
            <svg
              viewBox="0 0 1024 1024"
              fill="white"
              height="1em"
              width="1em"
              className="w-20 mb-20 h-20"

            >
              <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
            </svg>
          </a>
          <Parallax bgImage={Logo}
            blur={{ min: -15, max: 15 }}
            className=" h-60 lg:h-80  pt-[10px] "
            bgImageAlt="blog logo"
            strength={200}>
          </Parallax>
        </div>
      </div>
    </>
  )
}

export default AuthorPage