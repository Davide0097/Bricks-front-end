// Images
import Seo from '../media/seo.png'
import Responsive from '../media/responsive.png'
import Accessibility from '../media/accessibility.png'
import Animated from '../media/animated.png'
import Logo from '../media/logoBlog.png'

// Use effect and Use state
import { useEffect, useState } from 'react'

// Links
import { Link } from 'react-router-dom'

// Components
import ContactForm from '../components/EmailForm';

// Contentful
import useContentfulTemplates from "../hooks/useContentfulTemplates"

const TemplatesPage = () => {

    const { getTemplates } = useContentfulTemplates()
    const [templates, setTemplates] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, showForm]);

    const loadMore = () => {
        setPage(page + 1)
    }
    const loadLess = () => {
        setPage(page - 1)
    }

    useEffect(() => {
        try {
            getTemplates().then((response) =>
                setTemplates(response),
                setLoading(false));

        } catch (error) {
            console.log("my message: error getting templates in TemplatesPage.js")
            console.error(error)
        }
    }, [])

    return (
        <div >

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

            {/* Whole page */}
            <div className="bg-slate-100 px-4 w-100 pt-40 py-z0 flex flex-col justify-center  items-center border-[1px] border-slate-300 ">
                <h3 className="px-10 sm:px-40 text-center font-extrabold h-[80px] text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 uppercase sm:mt-10 mt-2 sm:m-4">Templates</h3>
                <div className='flex'>
                    <img src={Logo} alt="blog Logo" className="w-[25px] h-[25px] mr-1 " />
                    <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1>
                </div>
                <h1 className=" text-slate-500 text-2xl text-center font-semibold my-4">Browse around our <b>templates.</b>
                </h1>

                {/* templates */}
                <div className="2xl:px-[400px]  grid grid-cols-2 px-2 sm:px-40 lg:grid-cols-4 py-8">
                    <div className="flex flex-col justify-center items-center bg-slate-900 border-1px rounded-xl py-2 lg:px-2">
                        <img src={Animated} alt="Interactive icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Versatile</b></h1>
                        <p className="text-slate-200 text-xl  text-center font-semibold px-1">Easy integration</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-2 lg:px-2">
                        <img src={Seo} alt="Seo icon" className="w-[25px] h-[25px]" />
                        <h1 className="text-2xl  text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>SEO </b></h1>
                        <p className=" text-slate-500 text-xl  text-center font-semibold px-1">Optimized for search engines</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-2 lg:px-2">
                        <img src={Accessibility} alt="Aria Tag icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Aria Tags</b></h1>
                        <p className="text-slate-500 text-xl  text-center font-semibold px-1">ARIA tags to enhance accessibility</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-2 lg:px-2">
                        <img src={Responsive} alt="Responsive icon" className="w-[29px] h-[29px]" />
                        <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> <b>Descriptive</b></h1>
                        <p className="text-slate-500 text-xl text-center font-semibold px-1">Documented resources</p>
                    </div>
                </div>

                {loading ? (
                    <div className="  sm:px-40 text-center font-extrabold text-4xl h-[300px] text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600 pt-20 m-4 ">Loading templates..</div>
                ) : (
                    <>
                        {/* Templates container */}
                        <div className=" w-full grid-cols-1 lg:grid-cols-2 grid xl:grid-cols-3 p-4 sm:px-40 2xl:px-[380px] gap-10 sm:py-20">
                            {templates.slice((page - 1) * 10, page * 10).map((template, templateTitle) => (
                                <div
                                    key={template.templateTitle}
                                    className="shadow-xl border border-slate-300 min-w[300px] bg-gradient-to-r from-slate-200 to-white rounded-xl p-4">
                                    <img src={template.templatePreview.fields.file.url} alt="blog Logo" className="w-full rounded-xl mb-3" />
                                    <h1 className="font-bold p-1" >{template.templateTitle}</h1>
                                    <h1 className="text-slate-700 p-1" >{template.templateDescription}</h1>
                                    <div className="w-100 flex flex-col pt-10 justify-right items-right">
                                        <a rel="noreferrer" target="_blank" href={`${template.templateBlogLink}`}><button className=" w-[100px] float-right  mb-2 bg-white font-semibold -translate-y-1 rounded-md  border-[1px] border-slate-400 hover:border-black">
                                            <p className="p-1  px-2 text-slate-600">Blog →</p></button>
                                        </a>
                                        <a rel="noreferrer" target="_blank" href={`${template.templateLink}`}><button className=" float-right w-[100px] bg-blue-600 border-[1px] rounded-md  hover:bg-white hover:border-[1px] group hover:border-blue-600">
                                            <p className="text-white text-md font-semibold p-1  px-2 group-hover:text-blue-600">GitHub →</p>
                                        </button></a>
                                    </div>
                                    <Link to={`/AuthorPage/${template.templateAuthor}`} key={template.templateAuthor} template={template}  >
                                        <div className="w-max flex -mt-8 justify-center items-center  ">
                                            <img src={template.templateAuthorImg.fields.file.url} className="w-[20px] m-1 bg-red-200 rounded-xl h-[20px]" alt="author Img" />
                                            <h1 className="text-slate-700 p-1 underline font-semibold" >{template.templateAuthor}</h1>
                                        </div >
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div>

                            {/* Buttons */}
                            {page > 1 && (
                                <button className="bg-blue-600  border-[1px] rounded-xl m-2 mt-2 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadLess}>
                                    <p className="text-white text-lg px-3 p-2 group-hover:text-blue-600"> &larr;  {page - 1} </p>
                                </button>
                            )}
                            {page < templates.length / 10 && (
                                <button className="bg-blue-600  border-[1px] rounded-xl m-2 mt-2 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadMore}>
                                    <p className="text-white text-lg  font-semibold px-3 p-2 group-hover:text-blue-600">go to page {page + 1} &rarr;</p>
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>

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

export default TemplatesPage