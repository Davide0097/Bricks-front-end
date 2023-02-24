// Overview: General dashboard for Bricks Hub

// Hook for Log out
import { useLogout } from '../hooks/useLogOut';
import { useRemoveAccount } from '../hooks/useRemoveAccount';

// Hook for context
import { useUserContext } from '../hooks/useUserContext'

// Components
import PieChart from "../components/PieChartProfile";
import AuthorForm from './forms/AuthorForm';
import EditAuthorForm from './forms/EditAuthorForm';

// Link
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Dashbord({ author, pic, postCount, templatesCount, componentsCount, cssComponentsCount, filteredSubmissionsPost, filteredSubmissionsComponents, filteredSubmissionsTemplates, onSelectedButtonChange }) {

    // context
    const { user } = useUserContext();

    // Logout
    const { logout } = useLogout()

    const { removeAccount } = useRemoveAccount();

    // State for form if there are not published info for the user
    const [showForm, setShowForm] = useState(false);

    // Profile pic
    const [profilePic, setProfilePic] = useState([])

    // State if i have user and there are published info
    const [showEditForm, setShowEditForm] = useState(false);

    const [authorInfoPublished, setAuthorInfoPublished] = useState(null);

    // Log out function
    const handleLogOut = () => {
        logout()
    }


    const [showModal, setShowModal] = useState(false);
    const handleRemoveAccount = () => {
        removeAccount()
    }

    // Use effect for setting author=true if i have published author profile that matches the name of the logged account
    useEffect(() => {
        if ((author && author.authorImg)) {
            setAuthorInfoPublished(true);
            setProfilePic(author.authorImg.fields.file.url)
        } else {
            setAuthorInfoPublished(false);
        }
    }, [author]);
    function handleButtonClick(newButton) {
        onSelectedButtonChange("button5");
    }
    return (
        <>
            <div className='xl:grid xl:grid-cols-3 bg-slate-900 min-[500px]:p-5'>

                {showEditForm && (
                    <div className=' col-span-3 bg-slate-800 rounded-xl p-2 m-1'>
                        <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                            <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                                <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-6 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z" />
                                <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z" />
                            </svg>
                            <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Account Info edit</p>
                        </div>
                        <EditAuthorForm />
                        <button className=" " onClick={() => {
                            setShowEditForm(false);
                        }}
                        >
                            <p className="text-slate-400  font-bold text-lg px-1 pt-5">&rarr; Back</p>
                        </button>
                    </div>
                )}

                {/* Form if i dont have author info */}
                {showForm && (
                    <div className=' col-span-3 bg-slate-800 rounded-xl p-2 m-1'>
                        <div className='flex flex-row p-2 justify-left items-center mb-3 m-1'>
                            <svg viewBox="0 0 1000 1000" fill="currentColor" height="1em" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" width="1em" aria-hidden="true">
                                <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
                            </svg>
                            <p className=" text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">first time Request</p>
                        </div>
                        <AuthorForm />
                        <button className=" " onClick={() => {
                            setShowForm(false);
                        }}
                        >
                            <p className="text-slate-400  font-bold text-lg px-1 pt-5">&rarr; Back</p>
                        </button>
                    </div>
                )}

                {/* First box overview */}
                <div className='bg-slate-800 rounded-2xl col-span-2 sm:h-[310px] p-1 m-1'>
                    <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                        <svg aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1" fill=" white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Overview</p>
                    </div>
                    <div className='flex  flex-cols-2'>
                        <div className="sm:w-[220px]">
                            {postCount === 0 ? <div className='flex sm:h-[210px] flex-col justify-center items-center p-4'>
                                <h1 className="max-[390px]:hidden text-slate-400  text-md">* Publish your content to start viewing <b>charts and statistics.</b></h1>
                            </div> :
                                <div className="max-[700px]:hidden" >
                                    <PieChart postCount={postCount} templatesCount={templatesCount} componentsCount={componentsCount} cssComponentsCount={cssComponentsCount} />
                                </div>}
                        </div>
                        <div className='w-full p-2 h-100 rounded-xl  bg-slate-800 sm:grid sm:grid-cols-2'>
                            <div className='  rounded-xl p-2 m-1'>
                                <h1 className="text-white font-bold text-md sm:text-xl uppercase px-1">Contributions</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-6000 font-bold text-3xl p-1">{postCount + componentsCount + templatesCount + cssComponentsCount}</h1>
                            </div>
                            <div className='bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Posts</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1"> {postCount === 0 ? <p className='text-sm'>No post</p> : postCount}</h1>
                            </div>
                            <div className='bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Components</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1">{componentsCount === 0 ? <p className='text-sm'>No components</p> : componentsCount + cssComponentsCount}</h1>
                            </div>
                            <div className=' bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Templates</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1">{templatesCount === 0 ? <p className='text-sm'>No templates</p> : templatesCount}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal for removing the account */}
                {showModal && (
                    <>
                        <div class="fixed top-0 left-0 w-full h-full bg-black opacity-75 ">
                            <div class="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                                <div class="bg-white p-6 rounded-lg max-w-[600px]">
                                    <h2 class="text-xl font-bold mb-4 text-red-600">Are you sure you want to delete your account?</h2>
                                    <h2 class="text-xl mb-4"><b>This action cannot be undone and all of the content you've published will be permanently removed.</b><br /> If you still want to proceed, please click the 'Delete Account' button below.</h2>
                                    <h2 class="text-xl mb-4 font-bold">This operation may take several hours to complete and all of your published content will be permanently deleted from our platform.</h2>
                                    <div class="flex items-center justify-between">
                                        <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700" onClick={handleRemoveAccount} >Delete Account</button>
                                        <button class="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700" onClick={() => {
                                            setShowModal(false);
                                        }}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Secod box account info */}
                <div className='bg-slate-800 p-1 mb-3 rounded-2xl sm:h-[310px] m-1'>
                    <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                        <svg fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                            <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-6 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM19 15H9v-.25C9 12.901 11.254 11 14 11s5 1.901 5 3.75V15z" />
                            <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z" />
                        </svg>
                        <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Account Info</p>
                    </div>
                    <div className='p-2'>
                        <h1 className="text-slate-400 font-bold text-sm px-1">Email:</h1>
                        <h1 className="text-slate-100 font-bold text-md  p-1">{user.email} </h1>
                        <h1 className="text-slate-400 font-bold text-sm px-1">Author name:</h1>
                        <h1 className="text-slate-100 font-bold text-md  p-1">{user.blogname} </h1>

                        <div className="grid grid-cols-2 mt-3">
                            <div onClick={() => {
                                setShowModal(true);
                            }} className="bg-slate-900 rounded-xl m-1 px-2  p-1 cursor-pointer group hover:border-[1px] hover:border-white">
                                <svg aria-hidden="true" className="flex-shrink-0 w-10 h-10 text-slate-200 m-1 p-2 " fill="white" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
                                </svg>
                                <span className="p-2 text-left text-md font-semibold text-slate-400 group-hover:text-white">Remove account </span>
                            </div>

                            <div className="bg-slate-900 rounded-xl p-1 px-2 m-1 group hover:border-[1px] hover:border-white cursor-pointer">
                                <svg aria-hidden="true" className="flex-shrink-0 w-10 h-10 text-slate-200 m-1 p-2" fill="white" viewBox="0 0 900 1000" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M502 850V750h98v100c0 26.667-9.667 50-29 70s-43 30-71 30H100c-26.667 0-50-10-70-30S0 876.667 0 850V150c0-28 10-51.667 30-71s43.333-29 70-29h400c28 0 51.667 9.667 71 29s29 43 29 71v150h-98V150H100v700h402m398-326L702 720V600H252V450h450V330l198 194" />
                                </svg>
                                <span className="p-2 text-left text-md font-semibold text-slate-400 group-hover:text-white" onClick={handleLogOut}>Log out &rarr;</span>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Submissions overview and more */}
                <div className='bg-slate-800 p-2 rounded-2xl m-1'>
                    <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                        <svg fill="currentColor" viewBox="0 0 1000 1000" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                            <path d="M900 50c28 0 51.667 10 71 30s29 43.333 29 70v600c0 28-9.667 51.667-29 71s-43 29-71 29H702v-98h200V290H100v462h200v98H100c-26.667 0-50-9.667-70-29S0 778 0 750V150c0-26.667 10-50 30-70s43.333-30 70-30h800M130 218c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m100 0c25.333 0 38-12.667 38-38 0-10.667-3.667-19.333-11-26-7.333-6.667-16.333-10-27-10-10.667 0-19.667 3.667-27 11-7.333 7.333-11 15.667-11 25 0 10.667 3.667 19.667 11 27 7.333 7.333 16.333 11 27 11m672-6v-62H300v62h602M498 410l242 240H590v300H406V650H256l242-240" />
                            <path d="M16 12.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1.993-1.679a.5.5 0 00-.686.172l-1.17 1.95-.547-.547a.5.5 0 00-.708.708l.774.773a.75.75 0 001.174-.144l1.335-2.226a.5.5 0 00-.172-.686z" />
                        </svg>
                        <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">SUBMISSIONS OVERview</p>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-full p-2 h-100 rounded-xl bg-slate-800 sm:grid sm:grid-cols-2'>
                            <div className='  rounded-xl p-2 m-1'>
                                <h1 className="text-white font-bold text-md sm:text-xl uppercase px-1">submissions</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-6000 font-bold text-3xl p-1">{filteredSubmissionsPost.length + filteredSubmissionsComponents.length + filteredSubmissionsTemplates.length}</h1>
                            </div>
                            <div className='bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Posts</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1">{filteredSubmissionsPost.length === 0 ? <p className='text-sm'>No post</p> : filteredSubmissionsPost.length}</h1>
                            </div>
                            <div className='bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Components</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1">{filteredSubmissionsComponents.length === 0 ? <p className='text-sm'>No components</p> : filteredSubmissionsComponents.length}</h1>
                            </div>
                            <div className=' bg-slate-900 rounded-xl p-2 m-1'>
                                <h1 className="text-slate-400 font-bold text-md sm:text-lg px-1 uppercase">Templates</h1>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 font-bold text-3xl p-1">{filteredSubmissionsTemplates.length === 0 ? <p className='text-sm'>No templates</p> : filteredSubmissionsTemplates.length}</h1>
                            </div>
                        </div>

                    </div>
                    <div className='p-2'>
                        <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                            <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">MORE</p>
                        </div>
                        {authorInfoPublished && (<p onClick={() => {
                            setShowEditForm(true);
                        }} className="p-2 text-left text-md font-semibold text-slate-400 hover:text-white cursor-pointer">- Edit your public informations.</p>)}
                        <Link to={"/RequirmentsPage"}>
                            <p className="p-2 text-left text-md font-semibold text-slate-400 hover:text-white cursor-pointer">- Read more about content requirments.</p>
                        </Link>
                        <div onClick={handleButtonClick} className='p-2 text-left text-md font-semibold text-slate-400 hover:text-white cursor-pointer' >
                            <p>- All the submissions </p>
                        </div>
                    </div>
                </div>

                {/* Forth box */}
                <div className='bg-slate-800 rounded-2xl col-span-2  p-2 m-1'>
                    {authorInfoPublished && (
                        <>
                            <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                                <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                                    <path
                                        fill="currentColor"
                                        d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM13 14H2V2h11v12zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 113.001.001A1.5 1.5 0 015 4.5zM7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1z"
                                    />
                                </svg>
                                <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Your public profile</p>
                                <Link to={`/AuthorPage/${user.blogname}`} key={user.blogname} className='text-right font-semibold text-slate-400 hover:text-white text-md ml-auto mr-2 underline'  ><button >
                                    <p >
                                        Live view &rarr;
                                    </p>
                                </button></Link>
                            </div>
                            <div className='p-1'>
                                <h1 className="text-slate-400 font-bold text-md px-1">Name</h1>
                                <h1 className="text-slate-100 font-bold text-md  p-1 mb-6">{author.authorName}</h1>
                                <h1 className="text-slate-400 font-bold text-md px-1">Tags</h1>
                                <h1 className="text-slate-100 font-bold text-md  p-1 mb-6">{author.firstTag}, {author.secondTag}, {author.thirdTag} </h1>
                                <h1 className="text-slate-400 font-bold text-md px-1">Intro</h1>
                                <h1 className="text-slate-100 font-bold text-md  p-1 mb-6">{author.authorIntro}</h1>
                                <h1 className="text-slate-400 font-bold text-md px-1">Author desciption</h1>
                                <h1 className="text-slate-100 font-bold text-md  p-1 mb-6">{author.authorDescription}</h1>
                                <h1 className="text-slate-400 font-bold text-md px-1">Profile Image</h1>
                                <img src={profilePic} alt="tailwind component Author Preview" className="mb-6 w-[100px] h-[100px] rounded-[500px]" />
                                <a rel="noreferrer" target="_blank" href={author.authorInstagram}>
                                    <h1 className="text-slate-400 font-bold text-md px-1 underline">Instagram</h1>
                                </a>
                            </div>
                        </>
                    )}
                    {!authorInfoPublished && (
                        <>
                            <div className='flex flex-row p-2 justify-left items-center mb-3 border-b-[2px] border-slate-900'>
                                <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em" aria-hidden="true" className="flex-shrink-0 w-8 h-8 text-slate-200 m-1">
                                    <path
                                        fill="currentColor"
                                        d="M13.5 0h-12C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h12c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM13 14H2V2h11v12zM4 9h7v1H4zm0 2h7v1H4zm1-6.5a1.5 1.5 0 113.001.001A1.5 1.5 0 015 4.5zM7.5 6h-2C4.675 6 4 6.45 4 7v1h5V7c0-.55-.675-1-1.5-1z"
                                    />                                </svg>
                                <p className="text-md uppercase font-bold p-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600 ">Your public profile</p>

                            </div>
                            <div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className="text-slate-400  text-md md:py-6 p-2 md:px-14">
                                        <b> There are currently no public profiles associated with this account.</b> <br />
                                        If you have already submitted your information, please check back later.
                                        If not, please consider submitting your profile information for the first time.</h1>

                                    <button onClick={() => {
                                        setShowForm(true);
                                    }}
                                        className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                                        <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
                                    </button></div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </>
    );
}

export default Dashbord;