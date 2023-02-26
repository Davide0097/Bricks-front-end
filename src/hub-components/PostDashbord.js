// Overview: Posts dashboard for Brickshub

// Components
import Postform from './forms/Postform'
import DeleteFormPost from './forms/DeleteFormPost';

// React import
import { useState } from 'react'

// Link and date fns
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

const PostDashbord = ({ posts, filteredSubmissionsPost, postCount, onSelectedButtonChange }) => {

   // State for select the single post
   // State for delete post form
   const [selectedPost, setSelectedPost] = useState(null);
   const [showForm, setShowForm] = useState(false);
   function handleButtonClick(newButton) {
      onSelectedButtonChange("button5");
   }
   return (
      <div>

         <div className='xl:grid  xl:grid-cols-2  min-[500px]:p-5'>

            {/* Delete post form */}
            {showForm && (
               <div className=' col-span-2 bg-slate-800 rounded-xl p-2 m-1'>
                  <div className='flex flex-row p-2 justify-left items-center border-b-[2px] border-slate-900  mb-3 m-1'>
                     <svg viewBox="0 0 1000 1000" fill="currentColor" height="1em" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" width="1em" aria-hidden="true">
                        <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
                     </svg>
                     <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Request</p>
                  </div>
                  <DeleteFormPost selectedPost={selectedPost} />
                  <button className="" onClick={() => {
                     setShowForm(false);
                  }}
                  >
                     <p className="text-slate-400  font-bold text-lg px-1 pt-5">&rarr; Back</p>
                  </button>
               </div>
            )}

            {/* Published post section */}
            <div className='bg-slate-800 rounded-2xl p-1 h-[355px] overflow-auto m-1'>
               <div className='flex flex-row p-2 justify-left items-center mb-3  border-b-[2px] border-slate-900'>
                  <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                     <path d="M7 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zM2 1a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V3a2 2 0 00-2-2H2zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H2zm.854-3.646a.5.5 0 01-.708 0l-1-1a.5.5 0 11.708-.708l.646.647 1.646-1.647a.5.5 0 11.708.708l-2 2zm0 8a.5.5 0 01-.708 0l-1-1a.5.5 0 01.708-.708l.646.647 1.646-1.647a.5.5 0 01.708.708l-2 2zM7 10.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zm0-5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
                  </svg>
                  <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Published posts</p>
                  <Link className='text-right font-semibold text-slate-400 text-sm ml-auto mr-2 underline' to="/BlogPage">
                     <p> Go to blog &rarr; </p>
                  </Link>
               </div>
               {postCount === 0 ?

                  <div className='flex flex-col justify-center items-center'>
                     <h1 className="text-slate-400  text-md md:py-6 p-2 md:px-14"><b>Welcome, </b>It seems that there are currently <b>no published posts</b> visible on the dashboard. <br /><br />
                        If you have already submitted a post, please check back later. Otherwise, consider creating a new post to share with your audience.</h1>
                  </div>

                  : (
                     posts && posts.map(post =>
                     (<div key={post.postDate} className=" flex flex-row px-2 py-1 hover:bg-slate-900 justify-left items-center" >
                        <div className='flex flex-col justify-left items-left'>
                           <h1 className="text-slate-100 font-bold text-md p-1">{post.postTitle}</h1>
                           <h1 className="text-slate-400 font-bold text-sm -mt-1 p-1">Published on: {post.postDate}</h1>
                        </div>
                        <div className='ml-3 mt-1 bg-green-500 rounded-[140px]'>
                           <p className="font-semibold text-slate-800 text-sm px-3 max-[450px]:hidden">Online</p>
                        </div>
                        <Link to={`/BlogPost/${post.postTitle}`} post={post}>
                           <div className='cursor-pointer ml-3 mt-1  rounded-[140px] hover:border-slate-400 border-[1px] border-white'>
                              <p className="font-semibold hover:text-slate-400 text-sm px-3 text-white">Read </p>
                           </div>
                        </Link>
                        <button onClick={() => {
                           setShowForm(true);
                           setSelectedPost(post);
                        }} className='cursor-pointer flex flex-row ml-auto p-4 mr-2'>
                           <div className="w-[4px] h-[4px] bg-slate-400 rounded-xl ml-1"></div>
                           <div className="w-[4px] ml-1 h-[4px] bg-slate-400 rounded-xl"></div>
                           <div className="w-[4px] ml-1 h-[4px] bg-slate-400 rounded-xl"></div>
                        </button>
                     </div>)
                     ))}
            </div>

            {/* Submitted post section */}
            <div className="bg-slate-800  row-span-2 rounded-2xl h-[400px] md:h-[580px] overflow-auto m-1">
               <div className='flex flex-row p-2 justify-left items-center mb-3 m-1  border-b-[2px] border-slate-900'>
                  <svg viewBox="0 0 1000 1000" fill="currentColor" height="1em" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" width="1em" aria-hidden="true">
                     <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
                  </svg>
                  <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Submitted posts</p>

                  <div onClick={handleButtonClick} className='text-right font-semibold text-slate-400 text-sm ml-auto mr-2 underline cursor-pointer' >
                     <p> All the submissions &rarr; </p>
                  </div>
               </div>

               {filteredSubmissionsPost.length === 0 ? <div className='flex flex-col justify-center items-center'>
                  <h1 className="text-slate-400  text-md md:py-6 p-2 md:px-14">It appears that there are no <b>posts </b>currently visible on the dashboard.
                     We suggest submitting your first piece of content to populate this dashboard.</h1>
               </div> : (

                  filteredSubmissionsPost && (filteredSubmissionsPost.map((submission) =>
                  (<div key={submission.createdAt} className='p-1' >
                     <div className=" flex flex-row px-2 py-3 hover:bg-slate-900 justify-left items-center">
                        <div className='flex flex-col justify-left  items-left '>
                           <h1 className="text-slate-400 font-bold text-sm px-1">Title:</h1>
                           <h1 className="text-slate-100 font-bold text-md p-1">{submission.title.split(" ").slice(1).join(" ")}</h1>
                           <h1 className="text-slate-400 font-bold text-sm px-1">Intro:</h1>
                           <h1 className="text-slate-100 font-bold text-md  p-1">{submission.description} </h1>
                        </div>
                        <div className='flex flex-row ml-auto mr-2'>
                           <h1 className="text-slate-400 font-bold text-sm px-1">{formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}</h1>
                        </div>

                     </div>
                  </div>)
                  ))


               )}


            </div>

            {/* Actions section */}
            <Link to={"/RequirmentsPage"} className="bg-slate-800 rounded-2xl cursor-pointer grid grid-cols-2 m-1">
               <p className=" text-md uppercase font-bold p-1 col-span-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600  m-2 ml-auto"> INFO <b>+</b></p>
               <div className="bg-slate-900 flex flex-row items-center justify-center col-span-2 w-100 rounded-2xl  p-1 m-1">
                  <svg
                     fill="currentColor"
                     viewBox="0 0 16 16"
                     height="1em"
                     width="1em"
                     aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1 p-2"
                  >
                     <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                  <span className="p-1  text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Requirments &rarr;</span>
                  <p className='font-semibold text-slate-400 text-sm ml-auto  m-1 p-1 mr-2'>Requirments and content control</p>
               </div>
               <div className="bg-slate-900 w-100 rounded-2xl p-2  m-1">
                  <svg aria-hidden="true" className="flex-shrink-0 w-12 h-12 text-slate-200 m-1 p-2" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path d="M6.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                     <path d="M1.5 2A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13zm13 1a.5.5 0 01.5.5v6l-3.775-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12v.54A.505.505 0 011 12.5v-9a.5.5 0 01.5-.5h13z" />
                  </svg>
                  <span className="p-2 text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Images requirments &rarr;</span>
               </div>
               <div className="bg-slate-900  w-100 rounded-2xl p-2  m-1">
                  <svg aria-hidden="true" className="flex-shrink-0 w-12 h-12 text-slate-200 m-1 p-2" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path
                        fillRule="evenodd"
                        d="M0 .5A.5.5 0 01.5 0h4a.5.5 0 010 1h-4A.5.5 0 010 .5zm0 2A.5.5 0 01.5 2h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm9 0a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-9 2A.5.5 0 01.5 4h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm5 0a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm7 0a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm-12 2A.5.5 0 01.5 6h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm8 0a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-8 2A.5.5 0 01.5 8h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm7 0a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-7 2a.5.5 0 01.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 2a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5z"
                     /></svg>
                  <span className="p-2  text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">Text requirments &rarr;</span>
               </div>
            </Link>

            {/* Form */}
            <div className='bg-slate-800 col-span-2 p-1 rounded-2xl overflow-auto mb-5 my-2 m-1'>
               <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                  <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-10 h-10 text-slate-200 m-1">
                     <path d="M19 6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1h-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v1H3v14h10.09a5.47 5.47 0 01-.09-1 6 6 0 018-5.66V6m-1 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3z" />
                  </svg>
                  <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Submit a new post</p>
               </div>
               <Postform />
            </div>
         </div>
      </div>
   );
};

export default PostDashbord;