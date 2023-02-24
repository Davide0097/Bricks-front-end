// Overview: Form for sending the author informations for the first time

import { useUserContext } from '../../hooks/useUserContext'

function AuthorForm() {

    const { user } = useUserContext();

    return (

        <form className="flex flex-col" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

            {/* Already filled */}
            <p className='font-semibold text-slate-100 text-lg p-1'>Author Name</p>
            <p className='font-semibold text-slate-400 text-lg p-1'>{user.blogname}</p>
            <p className='font-semibold text-slate-100 text-lg p-1'>Author Email</p>
            <p className='font-semibold text-slate-400 text-lg p-1'>{user.email}</p>

            {/* tags */}
            <p className='font-semibold text-slate-100 text-lg p-1'>Your tags</p>
            <p className='font-semibold text-slate-400 text-md pb-1'>* Tags are going to  be showed on your public profile, choose 3 tags to describe your prefered languages or framework</p>
            <input type="text" name="Tags" placeholder="Tags" className='bg-slate-400 rounded-md p-1 mb-3' />

            {/* Bio */}
            <p className='font-semibold text-slate-100 text-lg p-1'>Bio</p>
            <p className='font-semibold text-slate-400 text-md pb-1'>* Provide a brief bio about yourself. This can include your background, interests, and any relevant experience or achievements. Your bio will help us understand who you are and how you can contribute to our community.</p>
            <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px]" name="Bio" placeholder="Bio"></textarea>

            {/* Profile pic */}
            <p className='font-semibold text-slate-100 text-lg mt-4 p-1'>Profile Img</p>
            <p className='font-semibold text-slate-400 text-md pb-1'>* your profile pic.</p>
            <input className="text-sm text-slate-400
            file: file:py-2 file:px-6
            file:rounded-md file:border-0
            file:text-sm file:font-medium
            file:bg-blue-600 file:text-white
            hover:file:cursor-pointer
            hover:file:text-slate-400" type="file" name="file" placeholder="" />

            {/* Hidden text */}
            <input type="hidden" name="User name" value={user.blogname} />
            <input type="hidden" name="by:" value={user.email} />
            <input type="hidden" name="_subject" value="First time profile submitted" />


            <button
                className=" cursor-pointer h-[37px] rounded-md w-[70px] mt-5 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                <input className="text-white group-hover:text-blue-600 font-semibold " type="submit" value="Send" />
            </button>
        </form>

    );
}

export default AuthorForm;