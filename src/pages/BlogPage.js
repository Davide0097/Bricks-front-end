// Basic react import
import { useEffect, useState } from 'react'

// Links
import { Link } from 'react-router-dom'

// Images
import Logo from '../media/logoBlog.png'
import Search from "../media/search.png"

// Hook for getting posts
import useContentful from "../hooks/useContentfulPost"

// Component for showing the single posts
import SinglePost from "../components/SinglePost";

const BlogPage = () => {

    // State for the posts array, state for the search bar and state for the rendered posts
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredPosts, setFilteredPosts] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const { getPosts } = useContentful()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const loadMore = () => {
        setPage(page + 1);
    }

    const loadLess = () => {
        setPage(page - 1);
    }

    // Use effect to put the received posts in the posts state
    useEffect(() => {
        try {
            getPosts().then((response) => setPosts(response), setLoading(false));
        } catch (error) {
            console.log("My message: error getting posts in BlogPage:")
            console.error(error)
        }
    }, [])

    // Use effect to filter trough the posts array
    useEffect(() => {
        try {
            setFilteredPosts(
                posts.filter((post) =>
                    post.postTitle.toLowerCase().includes(searchTerm.toLowerCase())
                )
            )
        } catch (error) {
            console.log("My message: error filtering the posts in BlogPage:")
            console.error(error)
        }
    }, [searchTerm, posts])


    return (

        // Whole component
        <div className="bg-slate-100 w-100 pt-40 py-20 flex flex-col justify-center items-center border-[1px] border-slate-300">
            <h3 className="  text-center  font-extrabold  text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r  h-[80px] from-pink-600 to-blue-600 sm:mt-10 sm:my-4 uppercase">Blog</h3>
            <div className='flex'>
                <img src={Logo} alt="blog Logo" className="w-[25px] h-[25px] mr-1" />
                <h1 className="-translate-x-2  p-1 font-bold cursor-pointer text-left text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">BRICKS</h1>
            </div>
            <h1 className=" text-slate-500 text-2xl text-center font-semibold m-4">Unlock the full potential of web development, discover our guides, build the web, <b>Faster.</b>
            </h1>

            {/* Searchbar */}
            <div className='flex justify-center items-center'>
                <img className=" w-[40px] mt-20 py-2 mr-6"
                    src={Search} alt="search icon" />
                <input
                    className="border rounded-xl mt-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                    type="text"
                    placeholder="Search post"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </div>

            {loading ? (
                <div className="px-40 text-center font-extrabold h-[300px] text-4xl text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600 pt-10 m-4">Loading Posts...</div>
            ) : (
                // Posts container
                <div className=" w-full grid gap-10 py-10 grid-cols-1 lg:grid-cols-22 xl:grid-cols-2  2xl:grid-cols-3 px-4 sm:px-10 md:px-20 lg:px-40 2xl:px-60">
                    {filteredPosts.slice((page - 1) * 12, page * 12).map((post, postTitle) => (
                        <Link to={`/BlogPost/${post.postTitle}`} key={postTitle} post={post}  >
                            <SinglePost key={postTitle} post={post} />
                        </Link>
                    ))}
                </div>
            )}

            {/* Buttons */}
            <div>
                {page > 1 && (
                    <button className="bg-blue-600  border-[1px] rounded-xl m-2 mt-10 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadLess}>
                        <p className="text-white text-lg px-3 p-2 group-hover:text-blue-600"> &larr;  {page - 1} </p>
                    </button>
                )}
                {page < filteredPosts.length / 10 && (
                    <button className="bg-blue-600  border-[1px] rounded-xl m-2 mt-10 hover:bg-white hover:border-[1px] group hover:border-blue-600" onClick={loadMore}>
                        <p className="text-white text-lg  font-semibold px-3 p-2 group-hover:text-blue-600">go to page {page + 1} &rarr;</p>
                    </button>

                )}
            </div>
        </div>
    )
}

export default BlogPage




