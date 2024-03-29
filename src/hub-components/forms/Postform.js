// Overview: Form for submit a post

// React import
import { React, useState } from 'react';

// Context
import { useSubmissionsContext } from '../../hooks/useSubmissionsContext'
import { useUserContext } from '../../hooks/useUserContext'


function Componentform() {

    // Global context
    const { user } = useUserContext();
    const { dispatch2 } = useSubmissionsContext();

    // Sate for title and description for CRUD operations
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    // State delcaration for track when the form is submitted
    const [isSubmitted, setIsSubmitted] = useState(false);


    // Function to pass title and description of the post to submissions
    const handlePost = async (e) => {
        if (!user) {
            setError('you msut be login!')
            return
        }
        const submission = {
            title: `post ${title}`,
            description
        }
        const response = await fetch('https://bricks-back-end.onrender.com/api/submissions/CreatorHub', {
            method: 'POST',
            body: JSON.stringify(submission),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
                ("errore mentre passo dati a back-end")
        }
        if (response.ok) {
            setTitle(title)
            setDescription(description)
            setError(null)
            console.log(error)
            dispatch2({ type: 'CREATE_SUBMISSION', payload: json })
            console.log("messo nuovo post in submissions", json)
            setIsSubmitted(true);
        }
    }

    return (

        <>
            <form onSubmit={handlePost} className="flex flex-col  p-2" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

                {/* Confirmation modal */}
                {isSubmitted && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                        <div className="bg-white p-8 rounded-md">
                            <h2 className="text-lg font-semibold mb-4">Form submitted!</h2>
                            <p className="text-md">
                                Thank you for submitting the post. We will review
                                it shortly.<br />Consider to add a template related to this blog post, you can easily submit a template
                                from the template dashboard.
                            </p>
                        </div>
                    </div>
                )}

                {/* Post title */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post title:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Select a title that clearly defines your blog post.</p>
                <input type="text" name="Post Title" placeholder="Title" className='bg-slate-400 rounded-md p-1 mb-3'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                {/* Post Intro */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post intro:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'> * The intro of your post, a brief and informative description.</p>
                <input type="text" name="Post Intro" placeholder="Intro" className='bg-slate-400 rounded-md p-1 mb-3 '
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />

                {/* Post tags */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post Tags:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Choose three tags for your post.</p>
                <input type="text" maxLength={10} name="Tag 1" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] mt-2 p-1 mb-3' />
                <input type="text" maxLength={10} name="Tag 2" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />
                <input type="text" maxLength={10} name="Tag 3" placeholder="Choose a tag" className='bg-slate-400 rounded-md w-[250px] p-1 mb-3' />

                {/* Post body */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post Body:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* The content of your post, which will be reviewed by us, does not require any specific formatting or text highlighting.</p>
                <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[400px] text-lg p-1" name="Post Body" placeholder="Body"></textarea>
                {error && <div className='text-red-600 text-xl font-bold py-2'>{error}</div>}

                {/* Hidden text */}
                <input type="hidden" name="User name" value={user.blogname} />
                <input type="hidden" name="by:" value={user.email} />
                <input type="hidden" name="_subject" value="New post submitted" />
                <input type="hidden" name="_after" value="https://bricks-platform.com" />

                <button
                    className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                    <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
                </button>
            </form>
        </>
    );
}

export default Componentform;