// Overview: Form for sending the author informations for the first time

// Import for consuming User context
import { useUserContext } from '../../hooks/useUserContext'

// UseState
import { useState } from 'react';

function AuthorForm() {

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
      onSubmit={handleSubmit}
      action="https://mailthis.to/buildthewebfaster@gmail.com"
      method="POST"
      encType="multipart/form-data">

      {/* Confirmation modal */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Form submitted!</h2>
            <p className="text-md">
              Thank you for submitting your profile information. We will review
              it shortly and publish it on our platform.
            </p>
          </div>
        </div>
      )}

      {/* Already filled; Name and Email*/}
      <div className='flex flex-row'>
        <p className='font-semibold text-slate-100 text-lg p-1'>Author Name:</p>
        <p className='font-semibold text-slate-400 text-lg p-1'>{user.blogname}</p>
      </div>
      <div className='flex flex-row pt-6'>
        <p className='font-semibold text-slate-100 text-lg p-1'>Email:</p>
        <p className='font-semibold text-slate-400 text-lg p-1'>{user.email}</p>
      </div>
      <p className='font-semibold text-slate-400 text-md pb-1'>* E-mail won't be showed on your public profile</p>

      {/* Tags */}
      <p className='font-semibold text-slate-100 text-lg p-1 pt-6'>Your tags:</p>
      <p className='font-semibold text-slate-400 text-md pb-1'>* Tags are a way to identify and showcase your preferred programming languages or frameworks on your public profile. <br />These tags will help others understand what you specialize in and what kind of work you do. You should choose three tags that accurately represent your skills and interests in the field of programming.</p>
      <input type="text" maxLength={10} name="Tag 1" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] mt-2 p-1 mb-3' />
      <input type="text" maxLength={10} name="Tag 2" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />
      <input type="text" maxLength={10} name="Tag 3" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />

      {/* Bio */}
      <p className='font-semibold text-slate-100 text-lg p-1 pt-6'>Biography:</p>
      <p className='font-semibold text-slate-400 text-md pb-1'>* The bio field is an opportunity to introduce yourself and showcase your skills and experiences to potential collaborators or employers. It should provide a brief and informative summary of who you are, what you do, and what you're passionate about in the field of programming.<br />
        It cannot be longer than 500 words.</p>
      <textarea maxLength={500} className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px] pt-2" name="Bio" placeholder="Bio"></textarea>

      {/* Profile pic */}
      <p className='font-semibold text-slate-100 text-lg mt-6 p-1'>Profile pic:</p>
      <p className='font-semibold text-slate-400 text-md pb-1'>* Your profile picture is an important visual representation of yourself that can help others identify and remember you on the platform. <br />Keep in mind that the file size cannot exceed 1Megabyte.</p>
      <input className="text-sm text-slate-400
            file: file:py-2 file:px-6
            file:rounded-md file:border-0
            file:text-sm file:font-medium mt-2
            file:bg-blue-600 file:text-white
            hover:file:cursor-pointer
            hover:file:text-slate-400" type="file" name="file" placeholder="" />

      {/* Instagram */}
      <p className='font-semibold text-slate-100 text-lg p-1 pt-6'>Instagram:</p>
      <p className='font-semibold text-slate-400 text-md pb-1'>* Do you have an Instagram account? If so, you can add a link to your profile on your public profile page. This will allow others to easily access your Instagram account and follow you.</p>
      <input type="text" name="Instagram" placeholder="Intsgram" className='bg-slate-400 rounded-md w-[250px] pt-2 p-1 mb-3' />

      {/* Hidden text */}
      <input type="hidden" name="User name" value={user.blogname} />
      <input type="hidden" name="by:" value={user.email} />
      <input type="hidden" name="_subject" value="First time profile submitted" />
      <input type="hidden" name="_after" value="https://bricks-platform.com" />

      {/* Spam */}
      <input type="hidden" name="_honeypot" value="" />
      <input type="hidden" name="_confirmation" value="Thanks for submitting your profile info !" />

      <button
        className="cursor-pointer h-[37px] rounded-md  mt-5 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
        <input className="text-white group-hover:text-blue-600 font-semibold " type="submit" value="Submit your profile informations" />
      </button>
    </form>
  );
}

export default AuthorForm;