// Overview: Submissions dashboard for Brickshub

// Context import
import { useSubmissionsContext } from '../hooks/useSubmissionsContext'

// Date fns library
import { formatDistanceToNow } from 'date-fns'

function AllAuthorSubmission() {

   // Hooks for using the context
   const { submissions } = useSubmissionsContext();


   return (
      <>
         <div className='bg-slate-800 rounded-2xl h-screen p-2 m-3 overflow-auto'>

            {/* Title */}
            <div className='flex flex-row p-2 justify-left items-center mb-3 m-1 border-b-[2px] border-slate-900'>
               <svg viewBox="0 0 1000 1000" fill="currentColor" height="1em" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" width="1em" aria-hidden="true">
                  <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
               </svg>
               <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">all the submissions</p>
            </div>

            {/* If  no submissions */}
            {submissions.length === 0 ?
               <div className="p-2 md:p-20 flex flex-col md:flex md:flex-row justify-center items-center">
                  <svg viewBox="0 0 960 1000" fill="white" height="1em" width="1em" className='w-16 h-16 p-2 md:mr-10'>
                     <path d="M480 222c72 0 123 27 153 81s45 119.667 45 197c0 76-15 141-45 195s-81 81-153 81-123-27-153-81-45-119-45-195c0-77.333 15-143 45-197s81-81 153-81m-86 278c0 12 1.333 34 4 66l106-194c9.333-16 7.333-30-6-42-8-2.667-14-4-18-4-57.333 0-86 58-86 174m86 172c57.333 0 86-57.333 86-172 0-26.667-2-54.667-6-84L442 620c-14.667 20-10.667 35.333 12 46 1.333 1.333 3.333 2 6 2 1.333 0 2 .667 2 2 1.333 0 4 .333 8 1s7.333 1 10 1m0-652c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980c-132 0-245-47-339-141S0 632 0 500c0-133.333 47-246.667 141-340S348 20 480 20m0 872c108 0 200.333-38.333 277-115s115-169 115-277c0-109.333-38.333-202-115-278S588 108 480 108s-200.333 38-277 114S88 390.667 88 500c0 108 38.333 200.333 115 277s169 115 277 115" />
                  </svg>
                  <p className='text-2xl text-slate-400'>
                     <b> Welcome!</b> It appears that there are no <b>components, posts, or templates</b> currently visible on the dashboard.<br /> We suggest submitting your first piece of content to populate this dashboard.
                  </p>
               </div>

               // if there are submissions
               : (
                  <div className=''>
                     <div className='grid grid-cols-1 justify-center items-center'>
                        {submissions && submissions.map((submission) => {

                           if (submission.title.startsWith("post")) {

                              return (
                                 <div key={submission.createdAt} className='md:grid  p-2 hover:bg-slate-900'>
                                    <div className=''>
                                       <p className='uppercase text-transparent text-sm lg:text-md bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-semibold p-1 mr-8'>post</p>
                                    </div>
                                    <div className='flex flex-col'>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1 -mb-1">Post title:</h1>
                                       <h1 className="text-slate-100 font-bold  text-sm lg:text-lg p-1">{submission.title.split(" ").slice(1).join(" ")}</h1>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1 -mb-1">Post header:</h1>
                                       <h1 className="text-slate-100 font-bold  text-sm lg:text-lg p-1">{submission.description}</h1>
                                    </div>
                                    <div className='ml-auto lg:w-[160px] float-right border-l-[2px] border-slate-900 p-2'>
                                       <h1 className=" text-slate-400 font-bold text-sm lg:text-md px-1">Submitted</h1>
                                       <h1 className="text-slate-100 font-bold text-sm lg:text-md px-1 ">{formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}</h1>
                                    </div>
                                 </div>
                              )
                           }
                           if (submission.title.startsWith("template")) {

                              return (
                                 <div key={submission.createdAt} className='md:grid p-2 hover:bg-slate-900'>
                                    <div className=''>
                                       <p className='uppercase  text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-semibold p-1 mr-8'>template</p>
                                    </div>
                                    <div className='flex flex-col'>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1 -mb-1">Title:</h1>
                                       <h1 className="text-slate-100 font-bold text-sm lg:text-lg  p-1">{submission.title.split(" ").slice(1).join(" ")}</h1>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md -mb-1 px-1">Description:</h1>
                                       <h1 className="text-slate-100 font-bold text-sm lg:text-lg   p-1">{submission.description}</h1>
                                    </div>
                                    <div className='lg:w-[160px] ml-auto float-right border-l-[2px] border-slate-900 p-2'>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1">Submitted</h1>
                                       <h1 className="text-slate-100 font-bold text-sm lg:text-md px-1 ">{formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}</h1>
                                    </div>
                                 </div>
                              )
                           } else if (submission.title.startsWith("component")) {

                              return (
                                 <div key={submission.createdAt} className='md:grid p-2 hover:bg-slate-900'>
                                    <div className=''>
                                       <p className='uppercase text-transparent  text-sm lg:text-md bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-semibold p-1 mr-8'>Component</p>
                                    </div>
                                    <div className='flex flex-col'>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1 -mb-1">Component title:</h1>
                                       <h1 className="text-slate-100 font-bold  text-sm lg:text-lg  p-1">{submission.title.split(" ").slice(1).join(" ")}</h1>
                                       <h1 className="text-slate-400 font-bold text-sm lg:text-md px-1 -mb-1"> Description:</h1>
                                       <h1 className="text-slate-100 font-bold  text-sm lg:text-lg   p-1">{submission.description}</h1>
                                    </div>
                                    <div className='lg:w-[160px] ml-auto float-right border-l-[2px] border-slate-900 p-2'>
                                       <h1 className="text-slate-400 font-bold  text-sm lg:text-md  lg:text-md px-1">Submitted</h1>
                                       <h1 className="text-slate-100 font-bold  text-sm lg:text-md  lg:text-md px-1">{formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}</h1>
                                    </div>
                                 </div>
                              )
                           }

                        })
                        }
                     </div>
                  </div>
               )}
         </div>
      </>
   );
}

export default AllAuthorSubmission;