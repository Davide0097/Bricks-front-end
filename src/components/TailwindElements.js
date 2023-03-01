// Overview: component rendered in the components page to show tailwind components

// Component preview
import ComponentPreview from './CodePreview'

// Component to edit title
import ComponentTitleEditor from './ComponentTitleEditor'

// Use effect e useState
import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

// Img
import Logo from '../media/logoBlog.png'
import Search from "../media/search.png"

// Component code
import Code from "../components/Code"

// Contentful component
import useContentfulComponents from '../hooks/useContentfulComponents'

const TailwindElements = () => {
    // State for showing loading component
    // State for search bar
    // State for component filtered by search bar
    // State for pages
    // State for components
    // State for full page component
    // State for clicked component
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredComponents, setFilteredComponents] = useState([]);
    const [page, setPage] = useState(1);
    const [components, setComponents] = useState([]);
    const [showFullPage, setShowFullPage] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    // Increment page number when button is clicked
    // Decrement page number when button is clicked
    const loadMore = () => {
        setPage(page + 1)
    }
    const loadLess = () => {
        setPage(page - 1)
    }

    // Use effect to scrol up when the page change 
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    //  Use effect to get components
    const { getComponents } = useContentfulComponents()
    useEffect(() => {
        try {
            getComponents().then((response) =>
                setComponents(response),
                setLoading(false));
        } catch (error) {
            console.log("my message: error getting components in tailwind elements.js:")
            console.error(error)
        }
    }, [])

    // Use effect to filter trough the components array
    useEffect(() => {
        try {
            setFilteredComponents(
                components.filter((component) =>
                    component.componentName.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
        } catch (error) {
            console.log("my message: error filtering the components:")
            console.error(error)
        }
    }, [searchTerm, components])

    const myDiv = useRef(null);

    const navigateToDiv = () => {
        myDiv.current.scrollIntoView();
    };

    const resetRef = () => {
        myDiv.current = null;
    };

    return (
        <>
            <div className="bg-slate-100 w-100 px-4 sm:px-20 2xl:px-[340px] flex flex-col justify-center items-center">

                {/* Div iniziale con titolo */}
                <div className='flex mt-2' >
                    <h1 className=" text-slate-500 text-2xl mr-2  font-semibold -mt-1">TAILWIND</h1>
                    <img alt="blog logo" src={Logo} className="w-[25px] h-[25px] mr-1 " />
                    <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-black">BRICKS</h1>
                </div>

                {/* Searchbar */}
                <div className='flex  justify-center items-center'>
                    <img className=" w-[40px] mt-6 mr-6"
                        src={Search} alt="search icon" />
                    <input
                        className="border mt-6 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                        type="text"
                        placeholder="Search component"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </div>

                {/* Buttons */}
                <div>
                    <button onClick={() => setSearchTerm("")} className="w-18 bg-white m-2 font-semibold -translate-y-1 rounded-md  mt-10 border-[1px] border-slate-300  hover:border-black">
                        <p className="text-slate-600  p-2">All the components</p>
                    </button>
                    <button onClick={() => setSearchTerm("navbar")} className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">NavBars</p>
                    </button>
                    <button onClick={() => setSearchTerm("hero")} className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Hero</p>
                    </button>
                    <button onClick={() => setSearchTerm("card")}
                        className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Cards</p>
                    </button>
                    <button
                        className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Sections</p>
                    </button>
                    <button onClick={() => setSearchTerm("footer")}
                        className=" rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Footers</p>
                    </button>
                    <button onClick={() => setSearchTerm("button")}
                        className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Buttons</p>
                    </button>
                    <button onClick={() => setSearchTerm("modal")}
                        className="rounded-md w-18 m-2 -translate-y-1 ml-2 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className="text-white group-hover:text-blue-600 font-semibold p-2">Modals</p>
                    </button>
                </div>

                {/* Loading component */}
                {loading ? (
                    <div className="px-4  sm:px-40 text-center font-extrabold text-4xl h-[300px] text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600 pt-20 m-4">Loading tailwind components...</div>
                ) : (
                    <>
                        {/* Cards container */}
                        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4  md:px-20 lg:px-20 gap-8 py-6 md:py-20">

                            {/* Single card */}
                            {filteredComponents.slice((page - 1) * 12, page * 12).map((component, componentName) => (
                                <div
                                    key={component.componentName}
                                    onClick={() => {
                                        setSelectedComponent(component);
                                        setShowFullPage(true);
                                        navigateToDiv(myDiv);
                                    }} component={component}
                                    className="border border-slate-300 sm:min-w[300px] bg-gradient-to-r from-slate-200 to-white rounded-xl p-2">
                                    <img className="object-cover object-center w-full rounded-lg h-40"
                                        src={component.componentPreview.fields.file.url} alt="component Preview" />
                                    <p className="bg-slate-100  font-bold float-right m-2 border-[1px] text-sm p-1 rounded-md text-slate-500">TAILWIND</p>
                                    <ComponentTitleEditor title={component.componentName} />
                                    <h1 className="text-slate-700 p-1" >{component.componentDescription}</h1>
                                    <div className="w-100 flex flex-col mt-8 justify-center items-center" >
                                        <Link to={`/AuthorPage/${component.componentAuthor}`} key={component.componentAuthor} component={component}  >
                                            <div className="w-100 flex flex-row justify-center items-center">
                                                <img src={component.componentAuthorImg.fields.file.url} alt="tailwind component Author Preview" className="w-[20px] m-1 bg-red-200 rounded-xl h-[20px] " />
                                                <h1 className="text-slate-700 p-2 min-w-[100px] font-semibold underline" >{component.componentAuthor}</h1>
                                            </div >
                                        </Link>
                                        <button className=" w-[100px]  mt-2   bg-blue-600  border-[1px] rounded-md  hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                                            <p className="text-white text-md font-semibold p-1  px-2 group-hover:text-blue-600">Code →</p>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Full page div */}
                        {showFullPage && (
                            <div ref={myDiv} className="p-3 bg-slate-900 rounded-xl">

                                <div className="p-2 w-[340px] sm:w-[500px] md:w-[800px] xl:w-[1280px]">
                                    <p className='text-2xl text-left font-bold p-1
                                        text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 
                                         uppercase'>Editor and Preview &darr;</p>
                                    <ComponentPreview componentCode={selectedComponent.componentCode} className="" />
                                </div>

                                <div className="p-2 w-[340px] sm:w-[500px] md:w-[800px] xl:w-[1280px]">
                                    <p className='text-2xl text-left font-bold p-1
                                        text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 
                                         uppercase'>Original code &darr;</p>
                                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                                        <Code content={selectedComponent.componentCode}>{selectedComponent.componentCode}</Code>
                                        <div className="">
                                            <Link to={`/AuthorPage/${selectedComponent.componentAuthor}`} key={selectedComponent.componentAuthor} selectedComponent={selectedComponent}  >
                                                <div className='mt-3 px-2'>
                                                    <img src={selectedComponent.componentAuthorImg.fields.file.url} alt="tailwind component Author Preview" className="w-[40px] float-right h-[40px] m-3  rounded-[500px]" />
                                                    <p className='text-md sm:text-2xl text-right font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 mb-1'>by {selectedComponent.componentAuthor}</p>
                                                    <p className='text-sm sm:text-md text-right font-bold text-slate-200 mb-3'>READ MORE ABOUT THE AUTHOR</p>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>
                                    <button onClick={() => { setShowFullPage(false); resetRef(); }}
                                        className="h-[37px] my-6 rounded-md w-18 -translate-y-1 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600">
                                        <p className="text-white group-hover:text-blue-600 font-semibold  px-4">back</p>
                                    </button>
                                </div>

                            </div>
                        )}
                    </>
                )}

                {/* Buttons */}
                <div>
                    {page > 1 && (
                        <button className="bg-blue-600  border-[1px] rounded-xl m-2 mb-20 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadLess}>
                            <p className="text-white text-lg px-3 p-2 group-hover:text-blue-600"> &larr;  {page - 1} </p>
                        </button>
                    )}
                    {page < filteredComponents.length / 10 && (
                        <button className="bg-blue-600  border-[1px] rounded-xl m-2 mb-20 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadMore}>
                            <p className="text-white text-lg  font-semibold px-3 p-2 group-hover:text-blue-600">go to page {page + 1} &rarr;</p>
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default TailwindElements