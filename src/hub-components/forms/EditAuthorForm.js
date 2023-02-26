// Overview: Form for editing author info

import { useUserContext } from '../../hooks/useUserContext'
import { useState } from 'react';

function EditAuthorForm() {

    // State delcaration for track when the form is submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Declaraion fo user info
    const { user } = useUserContext();

    // Function to manage form submission
    const handleSubmit = () => {
        setIsSubmitted(true);
    };
    return (

        <form className="flex flex-col"
            target="_blank"
            action="https://mailthis.to/buildthewebfaster@gmail.com"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
        >

            {/* Confirmation modal */}
            {isSubmitted && (
                <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-lg font-semibold mb-4">Form submitted!</h2>
                        <p className="text-md">
                            Thank you for submitting your editing request. We will review
                            it shortly.
                        </p>
                    </div>
                </div>
            )}

            {/* Intro text */}
            <p className='font-semibold text-slate-400 p-1 text-sm sm:text-md'>Submit a request to edit your public informations</p>

            {/* tags description */}
            <p className='font-semibold text-slate-100 text-lg p-1'>New Tags:</p>
            <input type="text" maxLength={10} name="Tag 1" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] mt-2 p-1 mb-3' />
            <input type="text" maxLength={10} name="Tag 2" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />
            <input type="text" maxLength={10} name="Tag 3" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />

            {/* Bio */}
            <p className='font-semibold text-slate-100 text-lg p-1'>Biography:</p>
            <p className='font-semibold text-slate-400 text-sm sm:text-md pb-1'>* Write a new brief biography.</p>
            <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px]" name="Bio" placeholder="Bio"></textarea>

            {/* Profile pic */}
            <p className='font-semibold text-slate-400 text-lg mt-4 p-1'>Profile Pic:</p>
            <p className='font-semibold text-slate-400 text-md pb-1'>* Your profile picture is an important visual representation of yourself that can help others identify and remember you on the platform. <br />Keep in mind that the file size cannot exceed 1Megabyte.</p>
            <input className="text-sm text-slate-400
            file: file:py-2 file:px-6
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-blue-600 file:text-white
            hover:file:cursor-pointer
            hover:file:text-slate-400" type="file" name="file" placeholder="" />

            {/* Instagram */}
            <p className='font-semibold text-slate-100 text-lg mt-4 p-1'>Instagram</p>
            <p className='font-semibold text-slate-400 text-md pb-1'>* Your Instagram name</p>
            <input type="text" name="Instagram" placeholder="authortag" className=' bg-slate-400 rounded-md p-1 mb-3 ' />

            {/* Hidden text */}
            <input type="hidden" name="User name" value={user.blogname} />
            <input type="hidden" name="by" value={user.email} />
            <input type="hidden" name="_subject" value="Edit public author info" />
            <input type="hidden" name="_after" value="https://bricks-platform.com" />

            {/* Spam */}
            <input type="hidden" name="_honeypot" value="" />
            <input type="hidden" name="_confirmation" value="Thanks for editing your profile info !" />

            <button
                className="cursor-pointer h-[37px] rounded-md  mt-5 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                <input className="text-white group-hover:text-blue-600 font-semibold " type="submit" value="Submit your request" />
            </button>

        </form>
    );
}

export default EditAuthorForm;