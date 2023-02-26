// Overview: Form for submit a component

// React import
import { React, useState } from "react"

// Context
import { useUserContext } from '../../hooks/useUserContext'
import { useSubmissionsContext } from '../../hooks/useSubmissionsContext'

function ComponentForm() {

    // Context
    const { dispatch2 } = useSubmissionsContext();
    const { user } = useUserContext();

    // State for passing data backend
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);


    // State delcaration for track when the form is submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlePost = async (e) => {

        if (!user) {
            setError('you msut be login!')
            return
        }

        const submission = {
            title: `component ${title}`,
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
            console.log("messo nuovo component in submissions", json)
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
                                Thank you for submitting the component. We will review
                                it shortly.
                            </p>
                        </div>
                    </div>
                )}
                
                {/* Component title */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Component title</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* The title of your Component</p>
                <input type="text" name="Component title" placeholder="Title" className='bg-slate-400 rounded-md p-1 mb-3' onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                {/* Component description */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Component description</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* The description of your component</p>
                <input type="text" name="Component description" placeholder="Description" className='bg-slate-400 rounded-md p-1 mb-3 '
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />

                {/* Component code */}
                <p className='font-semibold text-slate-100 text-lg p-1'>
                    Component code
                </p>
                <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px]" name="Code component" placeholder="Code"></textarea>

                {error && <div className='text-red-600 text-xl font-bold py-2'>{error}</div>}

                {/* hidden text */}
                <input type="hidden" name="User email" value={user.blogname} />
                <input type="hidden" name="By:" value={user.email} />
                <input type="hidden" name="_subject" value="New component submitted" />
                <input type="hidden" name="_after" value="https://bricks-platform.com" />

                <button
                    className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                    <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
                </button>
            </form>
        </>
    );
}

export default ComponentForm;