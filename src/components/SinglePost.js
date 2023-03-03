// Overview: component to show the single post in the blog page

import PostTags from "../components/postTags";

const SinglePost = ({ post }) => {

    return (
        <div>
            <div className="border border-slate-300 min-w[300px] rounded-xl p-4 bg-gradient-to-r from-slate-200 to-white">
                <button className=" float-right w-[120px] bg-blue-600 border-[1px] rounded-md hover:bg-white hover:border-[1px] group hover:border-blue-600 "><p className="text-white text-md font-semibold p-1  px-2 group-hover:text-blue-600">Read More →</p></button>
                <h1 className='text-xl uppercase font-bold text-transparent bg-clip-text p-1 bg-gradient-to-r from-black to-pink-600 mt-10'>{post.postTitle}</h1>
                <PostTags key={post.postTitle} post={post}></PostTags>
                <p className="text-slate-700 p-1">{post.postText}</p>
                <div className="w-max flex float-right mt-6 justify-center items-center">
                    <h1 className="text-slate-700 p-1" >By</h1>
                    <img src={post.postAuthorIm.fields.file.url} className="w-[20px] m-1 bg-red-200 rounded-xl h-[20px] " alt="author Img" />
                    <h1 className="text-slate-700 font-bold p-1" > {post.postAuthor}</h1>
                    <h1 className="text-slate-700 p-1  float-right" >on  <b>{post.postDate}</b> </h1>
                </div >
            </div>
        </div>
    );
};

export default SinglePost;