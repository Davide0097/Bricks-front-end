// Overview: Form for editing author info

import { useUserContext } from '../../hooks/useUserContext'

function EditAuthorForm() {

    const { user } = useUserContext();

    return (

        <form className="flex flex-col" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

            {/* Intro text */}
            <p className='font-semibold text-slate-400 p-1 text-sm sm:text-md'>Submit a request to edit your public informations</p>

            {/* tags description */}
            <p className='font-semibold text-slate-100 text-lg p-1'>New Tags</p>
            <input type="text" name="tag" placeholder="authortag" className=' bg-slate-400 rounded-md p-1 mb-3 ' />

            {/* Bio */}
            <p className='font-semibold text-slate-100 text-lg p-1'>Bio</p>
            <p className='font-semibold text-slate-400 text-sm sm:text-md pb-1'>* Write a new brief bio about yourself.</p>
            <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px]" name="Bio" placeholder="Bio"></textarea>

            {/* Profile pic */}
            <p className='font-semibold text-slate-400 text-lg mt-4 p-1'>Profile Img</p>
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

            <button
                className=" cursor-pointer h-[37px] rounded-md w-[70px] mt-3 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                <input className="text-white group-hover:text-blue-600 font-semibold " type="submit" value="Send" />
            </button>
        </form>
    );
}

export default EditAuthorForm;