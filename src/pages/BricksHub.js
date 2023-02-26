// Overview: this page contains all the dashboard

// Component for each dashboard section;
// General dashboard
// Posts dashboard
// Templates dashboard
// Components dashboard
// Submissions dashboard
import Dashbord from '../hub-components/GeneralDashbord'
import PostDashbord from '../hub-components/PostDashbord'
import TemplatesDashbord from '../hub-components/TemplatesDashbord'
import ComponentDashbord from '../hub-components/ComponentsDashbord'
import AllAuthorSubmission from '../hub-components/SubmissionsDashbord'

// Import for using context; user context and Submissions context
import { useUserContext } from '../hooks/useUserContext'
import { useSubmissionsContext } from '../hooks/useSubmissionsContext'

// Import for using Contentful Hooks
import useContentful from "../hooks/useContentfulPost"
import useContentfulTemplates from "../hooks/useContentfulTemplates"
import useContentfulComponents from '../hooks/useContentfulComponents'
import useContentfulAuthors from "../hooks/useContentfulAuthors"
import useContentfulCssComponents from '../hooks/useContentfulCssComponents'

// UseState and useEffect
import { useState, useEffect } from 'react'

const BricksHub = () => {

   // State declaration to set the count (number) for published content; post, templates, components, css-components
   const [postCount, setPostCount] = useState(0)
   const [templatesCount, setTemplatesCount] = useState(0)
   const [componentsCount, setComponentsCount] = useState(0)
   const [cssComponentsCount, setCssComponentsCount] = useState(0)

   // Sate declaration to set objects containing post, templates, components, css-components from the CMS
   const [posts, setPosts] = useState([]);
   const [templates, setTemplates] = useState([]);
   const [components, setComponents] = useState([]);
   const [cssComponents, setCssComponents] = useState([]);

   // Sate declaration to set object containing author info
   const [author, setAuthor] = useState([]);
   const [pic, setPic] = useState("");

   // Sate declaration for the sidebar buttons
   const [selectedButton, setSelectedButton] = useState('button1');

   // State declaration in order to render paragraph in case i have not components, posts or templates
   const [componentsError, setComponentsError] = useState(null);
   const [postsError, setPostsError] = useState(null);
   const [templatesError, setTemplatesError] = useState(null);

   // State declaration for submissions made by the author
   const [filteredSubmissionsPost, setFilteredSubmissionsPost] = useState([]);
   const [filteredSubmissionsComponents, setFilteredSubmissionsComponents] = useState([]);
   const [filteredSubmissionsTemplates, setFilteredSubmissionsTemplates] = useState([]);

   // Functions to get all the posts, templates, components, css components, authors
   const { getPosts } = useContentful();
   const { getTemplates } = useContentfulTemplates();
   const { getComponents } = useContentfulComponents();
   const { getCssComponents } = useContentfulCssComponents();
   const { getAuthors } = useContentfulAuthors();

   // Using hooks
   const { user } = useUserContext();
   const { dispatch2, submissions } = useSubmissionsContext();

   // POSTS - useEffect to get all the posts of that specific author i receive in the context
   useEffect(() => {
      try {
         getPosts().then(response => {
            // Filter the posts to only get the ones with the matching author
            const allPosts = response.filter(post => post.postAuthor === user.blogname);
            setPosts(allPosts);
            setPostCount(allPosts.length)
         })
      } catch (error) {
         setPostsError(true);
      }
   }, [user.blogname])

   // COMPONENTS - useEffect to get all the components of the author
   useEffect(() => {
      try {
         getComponents().then(response => {
            const allComponents = response.filter(component => component.componentAuthor === user.blogname);
            setComponents(allComponents);
            setComponentsCount(allComponents.length);
         })
      } catch (error) {
         setComponentsError(true);
      }
   }, [user.blogname]);

   // CSS-COMPONENTS - useEffect to get all the css components of the author
   useEffect(() => {
      try {
         getCssComponents().then(response => {
            const allCssComponents = response.filter(component => component.componentAuthor === user.blogname);
            setCssComponents(allCssComponents);
            setCssComponentsCount(allCssComponents.length)
         })
      } catch (error) {
         setComponentsError(true);
      }
   }, [user.blogname]);

   // TEMPLATES - useEffect to get all the templates of the author
   useEffect(() => {
      try {
         getTemplates().then(response => {
            const alltemplates = response.filter(template => template.templateAuthor === user.blogname);
            setTemplates(alltemplates)
            setTemplatesCount(alltemplates.length)
         })
      } catch (error) {
         setTemplatesError(true);
      }
   }, [user.blogname])

   // AUTHOR - useEffect to get author informations that match blogName in context
   useEffect(() => {
      getAuthors().then(response => {
         const author = response.find(author => author.authorName === user.blogname);
         setAuthor(author);
         setPic(author.authorImg.fields.file.url);
      });
   }, [user]);

   // SUBMISSIONS - useEffect to get submissions made by that author
   useEffect(() => {
      const fetchSubmissions = async () => {
         const response = await fetch('https://bricks-back-end.onrender.com/api/submissions/CreatorHub', {
            headers: { 'Authorization': `Bearer ${user.token}` },
         })
         const json = await response.json()
         if (response.ok) {
            dispatch2({ type: 'SET_SUBMISSIONS', payload: json });

            // Splitting submissions made by the author based on the first string in the title
            setFilteredSubmissionsPost(json.filter(submission => submission.title.split(" ")[0] === "post"))
            setFilteredSubmissionsComponents(json.filter(submission => submission.title.split(" ")[0] === "component"))
            setFilteredSubmissionsTemplates(json.filter(submission => submission.title.split(" ")[0] === "template"))
         }
      }
      if (user) {
         fetchSubmissions()
      }
   }, [dispatch2, user])

   // Function to show the submissions dahsboard
   function handleSelectedButtonChange(newButton) {
      setSelectedButton("button5");
   }

   return (
      <>
         <div className="pt-[130px] bg-slate-800 flex flex-row 2xl:pr-80  2xl:pl-40">

            {/* SideBar */}
            <div className='bg-slate-800 md:w-[170px] flex flex-col items-center '>
               {pic && <><img src={pic} alt="tailwind component Author Preview" className="max-[700px]:hidden mt-5  mb-5 h-[100px] w-[100px] rounded-full object-cover p-1 m-1" /></>}
               <ul className="space-y-1">
                  <li>
                     <button onClick={() => setSelectedButton('button1')} className="md:w-[170px] px-2 flex  items-center py-3 text-lg font-normal text-slate-200 hover:bg-slate-900 ">
                        <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-400" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="max-[700px]:hidden flex-1 ml-3 text-left whitespace-nowrap text-slate-200  font-semibold">Dashbord</span>
                     </button>
                  </li>
                  <li>
                     <button onClick={() => setSelectedButton('button2')} className="md:w-[170px] px-2 flex items-center py-3 text-lg font-normal text-gray-900 dark:text-white hover:bg-slate-900 ">
                        <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M3 3v18h18V3H3m15 15H6v-1h12v1m0-2H6v-1h12v1m0-4H6V6h12v6z" />
                        </svg>
                        <span className="max-[700px]:hidden flex-1 ml-3 whitespace-nowrap text-slate-200 text-left font-semibold">Posts</span>
                     </button></li>

                  <li>
                     <button onClick={() => setSelectedButton('button3')} className="md:w-[170px] px-2 flex items-center py-3 text-lg font-normal text-gray-900 dark:text-white hover:bg-slate-900 ">
                        <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        <span className="max-[700px]:hidden flex-1 ml-3 whitespace-nowrap text-slate-200 text-left font-semibold">Components</span>
                     </button></li>

                  <li>
                     <button onClick={() => setSelectedButton('button4')} className="md:w-[170px] px-2 flex items-center py-3 text-lg font-normal text-gray-900 dark:text-white hover:bg-slate-900 ">
                        <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 flex-shrink-0 w-6 h-6 text-slate-200 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                           <path
                              fill="currentColor"
                              d="M6 3h2v1H6zm3 0h2v1H9zm5 0v4h-3V6h2V4h-1V3zM5 6h2v1H5zm3 0h2v1H8zM3 4v2h1v1H2V3h3v1zm3 5h2v1H6zm3 0h2v1H9zm5 0v4h-3v-1h2v-2h-1V9zm-9 3h2v1H5zm3 0h2v1H8zm-5-2v2h1v1H2V9h3v1zm12-9H1v14h14V1zm1-1v16H0V0h16z"
                           />                           </svg>
                        <span className="max-[700px]:hidden flex-1 ml-3 whitespace-nowrap text-slate-200 text-left font-semibold">Templates</span>
                     </button></li>

                  <li>
                     <button onClick={() => setSelectedButton('button5')} className="md:w-[170px] px-2 flex items-center py-3 text-lg font-normal text-gray-900 hover:bg-slate-900 ">
                        <svg aria-hidden="true" className="max-[700px]:w-10 max-[700px]:h-10 flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-400 dark:group-hover:text-white" fill="white" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                           <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
                        </svg>
                        <span className="max-[700px]:hidden flex-1 ml-3 whitespace-nowrap text-slate-200 text-left font-semibold">Submissions</span>
                     </button>
                  </li>
               </ul>
            </div>

            <div className='bg-slate-900 h-full w-full float-right'>

               {/* Dashbord */}
               {selectedButton === 'button1' &&
                  <Dashbord
                     author={author}
                     posts={posts}
                     components={components}
                     cssComponents={cssComponents}
                     templates={templates}
                     postCount={postCount}
                     templatesCount={templatesCount}
                     componentsCount={componentsCount}
                     cssComponentsCount={cssComponentsCount}

                     filteredSubmissionsPost={filteredSubmissionsPost}
                     filteredSubmissionsComponents={filteredSubmissionsComponents}
                     onSelectedButtonChange={handleSelectedButtonChange}

                     filteredSubmissionsTemplates={filteredSubmissionsTemplates} />
               }
               {/* const dashboardProps = {
   author,
   posts,
   components,
   templates,
   postCount,
   templatesCount,
   componentsCount,
   filteredSubmissionsPost,
   filteredSubmissionsComponents,
   filteredSubmissionsTemplates
};

{selectedButton === 'button1' &&
   <Dashbord {...dashboardProps} />
} */}
               {/* Post */}
               {selectedButton === 'button2' &&
                  <div>
                     {postsError ? <p className='font-semibold text-slate-400 text-sm ml-auto mr-2 underline'>Submit your first posts</p> :
                        <PostDashbord
                           posts={posts}
                           filteredSubmissionsPost={filteredSubmissionsPost}
                           selectedButton={selectedButton}
                           postCount={postCount}
                           onSelectedButtonChange={handleSelectedButtonChange}
                        />
                     }
                  </div>
               }

               {/* Components */}
               {selectedButton === 'button3' && <div>
                  {componentsError ? <p>aggiungi component</p> :
                     <ComponentDashbord
                        components={components}
                        filteredSubmissionsComponents={filteredSubmissionsComponents}
                        componentsCount={componentsCount}
                        onSelectedButtonChange={handleSelectedButtonChange}
                        cssComponents={cssComponents}
                        cssComponentsCount={cssComponentsCount}
                     />
                  }
               </div>
               }

               {/* Templates */}
               {selectedButton === 'button4' &&
                  <div>
                     {templatesError ? <p>aggiungi your first template</p> :
                        <TemplatesDashbord
                           templates={templates}
                           filteredSubmissionsTemplates={filteredSubmissionsTemplates}
                           templatesCount={templatesCount}
                           onSelectedButtonChange={handleSelectedButtonChange}

                        />
                     }
                  </div>
               }

               {/* Submissions */}
               {selectedButton === 'button5' &&
                  <AllAuthorSubmission />
               }
            </div>
         </div>
      </>
   )
}

export default BricksHub


