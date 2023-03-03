// use effect e Use State
import { useEffect, useState } from 'react'

// Contentful
import useContentful from "../hooks/useContentfulPost"

// Use params
import { useParams } from "react-router-dom";

// Link
import { Link } from 'react-router-dom'

// Rich test
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Component
import PostTags from "../components/postTags";

// Targetting image
import { BLOCKS } from "@contentful/rich-text-types";

// React syntax highlighter
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const BlogPost = (post) => {

    const [loading, setLoading] = useState(true);
    const { index } = useParams();
    const { getPosts } = useContentful();
    const [single, setSingle] = useState([null]);

    useEffect(() => {
        getPosts().then(response => {
            const post = response.find(post => post.postTitle === index);
            setLoading(false);
            setSingle(post);
        });
    }, []);

    const RichText = ({ document }) => {

        const renderOptions = {

            // Adding space when i receive \n from the cms
            renderText: text => {
                return text.split('\n').reduce((children, textSegment, index) => {
                    return [...children, index > 0 && <br key={index} />, textSegment];
                }, []);
            },

            renderNode: {
                // Render the part of the content i receive in the JSON object that 
                // has the field document.content[each of thoose] that has the field "marks" or 
                // nodetype="paragraph"
                [BLOCKS.PARAGRAPH]: (node, children) => {
                    if (
                        node.content[0].marks || { type: 'code' }
                    ) {
                        if (node.content[0].value) {
                            return (
                                <div className="flex  mb-8">
                                    <SyntaxHighlighter
                                        className="w-[360px] sm:w-[600px]  xl:w-full"
                                        style={a11yDark}
                                        language="javascript"
                                        PreTag="div"
                                    >
                                        {node.content[0].value}
                                    </SyntaxHighlighter>
                                </div>
                            );
                        }
                    }
                },
                // Render the assets (images)
                [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                    return (
                        <div className="flex items-center justify-center min-w-[300px] mt-10 max-w-[500px] h-full">
                            <img
                                src={`https://${node.data.target.fields.file.url}`}
                                height={node.data.target.fields.file.details.image.height}
                                width={node.data.target.fields.file.details.image.width}
                                alt={node.data.target.fields.description}
                                className={"w-[600px] mx-auto my-auto"}
                            />
                        </div>
                    );
                }
            }
        };

        return <>{documentToReactComponents(document, renderOptions)}</>;
    }

    return (
        <>
            {loading ? (
                <div className="px-3 sm:px-40 lg:px-60 text-center font-extrabold text-4xl py-60 text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-600  ">Loading Post...</div>
            ) : (
                <>
                    {/* Title and tags */}
                    <div className="px-3 bg-gray-900 pb-4 pt-40">
                        <div className="container max-w-screen-lg  sm:px-20 mx-auto">
                            <h1 className='uppercase font-bold text-5xl pb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>{single.postTitle}</h1>
                            <PostTags key={single.postTitle} post={single}></PostTags>
                        </div>
                    </div>

                    {/* Whole article */}
                    <div className="container max-w-screen-lg mx-auto px-3 sm:px-20 py-4">
                        <h1 className="text-3xl font-bold text-gray-800">{single.postText}</h1>

                        {/* Name and date */}
                        <div className="flex flex-col justify-center items-center mt-4">
                            <Link to={`/AuthorPage/${single.postAuthor}`} key={single.postAuthor} single={single}>
                                <div className='border-[1px] border-slate-900 bg-slate-900 sm:w-[400px] my-6 p-2 rounded-md'>
                                    <div className='flex flex-row justify-center items-center '>
                                        <img src={single.postAuthorIm.fields.file.url} className="max-[385px]:hidden  w-[40px] float-right bg-red-200 rounded-[500px] h-[40px] m-2" alt="post Author Img" />
                                        <h1 className="text-slate-200 text-right font-bold p-1">By</h1>
                                        <h1 className="text-slate-200 text-right font-bold p-1"> {single.postAuthor}</h1>
                                        <h1 className="text-slate-200 text-right font-bold p-1"> /</h1>
                                        <h1 className="text-slate-200 text-right p-1" > <b> {single.postDate}</b></h1>
                                    </div>
                                    <p className='text-sm sm:text-md  w-100 text-center font-bold px-2 rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>&uarr; MORE ABOUT THE AUTHOR HERE &uarr;</p>
                                </div>
                            </Link>
                        </div>

                        {/* Box */}
                        <div className="text-xl my-2 font-semibold bg-gray-900 text-slate-200 rounded-md">
                            <p className='relative p-4'>{single.postBody}</p>
                        </div>

                        {/* Richtext */}
                        <div className='text-xl flex flex-col mt-10 px-1 h-full'>
                            <RichText document={single.postRich} />
                        </div>

                        {/* Name and date */}
                        <div className="flex flex-col justify-center items-center mt-4">
                            <Link to={`/AuthorPage/${single.postAuthor}`} key={single.postAuthor} single={single}>
                                <div className='border-[1px] border-slate-900 bg-slate-900 sm:w-[400px] my-6 p-2 rounded-md'>
                                    <div className='flex flex-row justify-center items-center '>
                                        <img src={single.postAuthorIm.fields.file.url} className="max-[385px]:hidden w-[40px] float-right bg-red-200 rounded-[500px] h-[40px] m-2" alt="post Author Img" />
                                        <h1 className="text-slate-200 text-right font-bold p-1">By</h1>
                                        <h1 className="text-slate-200 text-right font-bold p-1"> {single.postAuthor}</h1>
                                        <h1 className="text-slate-200 text-right font-bold p-1"> /</h1>
                                        <h1 className="text-slate-200 text-right p-1"> <b> {single.postDate}</b></h1>
                                    </div>
                                    <p className='text-sm sm:text-md  w-100 text-center font-bold px-2 rounded-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600'>&uarr; MORE ABOUT THE AUTHOR HERE &uarr;</p>
                                </div>
                            </Link>
                        </div>

                        {/* Button */}
                        <div className="flex justify-between py-4 items-center">
                            <Link to="/BlogPage">
                                <button className="mt-4 px-4 py-2 border-[1px] border-white font-semibold text-white bg-blue-600 rounded-lg hover:bg-white hover:border-[1px]  group hover:border-blue-600">
                                    <p className='text-white text-xl group-hover:text-blue-600'> Back to Blog </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default BlogPost