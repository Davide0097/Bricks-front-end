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
        }
    }

    return (

        <>
            <form onSubmit={handlePost} className="flex flex-col  p-2" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

                {/* Post title */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post title</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Select a title that clearly defines your post</p>
                <input type="text" name="Post Title" placeholder="Title" className='bg-slate-400 rounded-md p-1 mb-3'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                {/* Post Intro */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post intro</p>
                <p className='font-semibold text-slate-400 text-md pb-1'> * The intro of your post, a brief and informative description</p>
                <input type="text" name="Post Intro" placeholder="Intro" className='bg-slate-400 rounded-md p-1 mb-3 '
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />

                {/* Post tags */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post Tags</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Choose three tags for your post</p>
                <input type="text" name="Post Tags" placeholder="Post Tags" className='bg-slate-400 rounded-md p-1 mb-3 ' />

                {/* Post body */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Post Body</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* The content</p>
                <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[400px] text-lg p-1" name="Post Body" placeholder="Body"></textarea>

                {error && <div className='text-red-600 text-xl font-bold py-2'>{error}</div>}

                {/* Hidden text */}
                <input type="hidden" name="User name" value={user.blogname} />
                <input type="hidden" name="by:" value={user.email} />
                <input type="hidden" name="_subject" value="New post submitted" />

                {/* Img */}
                {/* <p className='font-semibold text-slate-400 text-md mt-3 p-1'>img:</p>
                <input type="file" name="file" placeholder="Attachments (optional)" /> */}

                <button
                    className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                    <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
                </button>
            </form>
        </>
    );
}

export default Componentform;