// Overview: Templates dashboard for Brickshub

import TemplateForm from './forms/TemplateForm'
import DeleteFormTemplate from './forms/DeleteFormTemplate';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns'


const PostDashbord = ({ templates, filteredSubmissionsTemplates, templatesCount, onSelectedButtonChange }) => {


   const [selectedTemplate, setSelectedTemplate] = useState(null);
   const [showFormTemplate, setShowFormTemplate] = useState(false);
   function handleButtonClick(newButton) {
      onSelectedButtonChange("button5");
   }

   return (
      <div className='xl:grid xl:grid-cols-2 min-[500px]:p-5'>
         {showFormTemplate && (
            <div className=' col-span-2 bg-slate-800 rounded-xl p-2 m-1'>
               <div className='flex flex-row p-2 justify-left items-center mb-3 m-1'>

                  <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Request</p>
               </div>
               <DeleteFormTemplate selectedTemplate={selectedTemplate} />
               <button className="" onClick={() => {
                  setShowFormTemplate(false);
               }}
               >
                  <p className="text-slate-400  font-bold text-lg px-1 pt-5">&rarr; Back</p>
               </button>
            </div>
         )}

         {/* Published templates */}
         <div className='bg-slate-800 rounded-2xl p-1 m-1 h-[375px] overflow-auto'>
            <div className='flex flex-row p-2 justify-left items-center  mb-3 border-b-[2px] border-slate-900 '>
               <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                  <path d="M7 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zM2 1a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V3a2 2 0 00-2-2H2zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H2zm.854-3.646a.5.5 0 01-.708 0l-1-1a.5.5 0 11.708-.708l.646.647 1.646-1.647a.5.5 0 11.708.708l-2 2zm0 8a.5.5 0 01-.708 0l-1-1a.5.5 0 01.708-.708l.646.647 1.646-1.647a.5.5 0 01.708.708l-2 2zM7 10.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1zm0-5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 8a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" />
               </svg>
               <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Published templates</p>
               <Link className='text-right font-semibold text-slate-400 text-sm ml-auto mr-2 underline' to="/TemplatesPage">

                  <p className='text-right font-semibold text-slate-400 text-sm ml-auto mr-2 underline'>
                     Go to templates &rarr;
                  </p>
               </Link>

            </div>
            {templatesCount === 0 ? <div className='flex flex-col justify-center items-center'>
               <h1 className="text-slate-400  text-md md:py-6 p-2 md:px-14"><b>Welcome, </b>It seems that there are currently <b>no published templates</b> visible on the dashboard. <br /><br />
                  If you have already submitted a template, please check back later. Otherwise, consider creating a new template to share with your audience.</h1>
            </div> : (
               templates.map(template => (

                  (<div key={template.templateTitle} className=" flex flex-row px-2 py-1 cursor-pointer hover:bg-slate-900 justify-left items-center">
                     <div className='flex flex-col justify-left items-left'>
                        <h1 className="text-slate-100 font-bold text-md p-1">{template.templateTitle}</h1>
                     </div>

                     <div className='ml-4 mt-1 bg-green-500 rounded-[140px]'>
                        <p className="max-[400px]:hidden font-semibold text-slate-800 text-sm px-3 ">Online</p>
                     </div>
                     <div className='ml-3 mt-1 bg-slate-800 rounded-[140px] border-slate-400 border-[1px]'>
                        <p className="font-semibold text-slate-400 text-sm px-3 ">Read</p>
                     </div>
                     <button onClick={() => {
                        setShowFormTemplate(true)
                        setSelectedTemplate(template);
                     }} className='flex flex-row ml-auto p-4 mr-1'>
                        <div className="w-[4px] h-[4px] bg-slate-400 rounded-xl ml-1"></div>
                        <div className="w-[4px] ml-1 h-[4px] bg-slate-400 rounded-xl"></div>
                        <div className="w-[4px] ml-1 h-[4px] bg-slate-400 rounded-xl"></div>
                     </button>
                  </div>)
               )))}
         </div>

         {/* submitted templates */}
         <div className="bg-slate-800 p-1 w-100 row-span-2 rounded-2xl h-[400px] md:h-[500px] overflow-auto m-1">
            <div className='flex flex-row p-2 justify-left items-center  mb-3 border-b-[2px] border-slate-900 '>
               <svg viewBox="0 0 1000 1000" fill="currentColor" height="1em" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" width="1em" aria-hidden="true">
                  <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
               </svg>
               <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Submitted templates</p>
               <div onClick={handleButtonClick} className='text-right font-semibold text-slate-400 text-sm ml-auto mr-2 underline cursor-pointer' >
                  <p> All the submissions &rarr; </p>
               </div>
            </div>


            {filteredSubmissionsTemplates.length === 0 ? <div className='flex flex-col justify-center items-center'>
               <h1 className="text-slate-400  text-md md:py-6 p-2 md:px-14">It appears that there are no <b>templates </b>currently visible on the dashboard.
                  We suggest submitting your first piece of content to populate this dashboard.</h1>
            </div> : (
               filteredSubmissionsTemplates && (filteredSubmissionsTemplates.map((submission) =>

               (<div key={submission.title} className=" flex flex-row px-2 py-3 cursor-pointer hover:bg-slate-900  justify-left items-center">
                  <div className='flex flex-col justify-left items-left'>
                     <h1 className="text-slate-400 font-bold text-sm px-1">Template title:</h1>
                     <h1 className="text-slate-100 font-bold text-md p-1">{submission.title.split(" ").slice(1).join(" ")}</h1>
                     <h1 className="text-slate-400 font-bold text-sm px-1">Short description:</h1>
                     <h1 className="text-slate-100 font-bold text-md  p-1">{submission.description} </h1>
                  </div>
                  <div className='flex flex-row ml-auto mr-2 cursor-pointer'>
                     <h1 className="text-slate-400 font-bold text-sm px-1">{formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}</h1>
                  </div>
               </div>)
               ))

            )}


         </div>

         {/* Actions section */}
         <Link to={"/RequirmentsPage"} className="bg-slate-800 rounded-2xl grid grid-cols-2 m-1">
            <p className=" text-md uppercase font-bold p-1 col-span-2 mr-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 m-2 ml-auto"> INFO <b>+</b></p>
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

         </Link>

         {/* Form */}
         <div className='bg-slate-800 col-span-2 rounded-2xl p-1 overflow-auto mb-5 m-1'>
            <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
               <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-10 h-10 text-slate-200 m-1">
                  <path d="M19 6V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1h-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v1H3v14h10.09a5.47 5.47 0 01-.09-1 6 6 0 018-5.66V6m-1 9v3h3v2h-3v3h-2v-3h-3v-2h3v-3z" />
               </svg>
               <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Submit a new template</p>
            </div>
            <TemplateForm />
         </div>
      </div>
   );
};

export default PostDashbord;