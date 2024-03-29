// Overview: Form for submit a template

// React basic import
import { useState, React } from "react"

// Context
import { useUserContext } from '../../hooks/useUserContext'
import { useSubmissionsContext } from '../../hooks/useSubmissionsContext'

function TemplateForm() {

    // Hooks to use context
    const { dispatch2 } = useSubmissionsContext();
    const { user } = useUserContext();

    // State for set submission from the form
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

        const submission = { title: `template ${title}`, description }

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
                ("My message: errors while passing data backend")
        }
        if (response.ok) {
            setTitle(title)
            setDescription(description)
            setError(null)
            dispatch2({ type: 'CREATE_SUBMISSION', payload: json })
            console.log("My message: Succesfully submitted a new template", json)
            setIsSubmitted(true);
        }
    }

    return (

        <>
            <form onSubmit={handlePost} className="flex flex-col p-2" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

                {/* Confirmation modal */}
                {isSubmitted && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
                        <div className="bg-white p-8 rounded-md">
                            <h2 className="text-lg font-semibold mb-4">Form submitted!</h2>
                            <p className="text-md">
                                Thank you for submitting the template. We will review
                                it shortly.
                            </p>
                        </div>
                    </div>
                )}

                {/* Template title */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Template title:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Select a title that clearly defines your template.</p>
                <input type="text" name="Template title" placeholder="Title" className='bg-slate-400 rounded-md p-1 mb-3' onChange={(e) => setTitle(e.target.value)}
                    value={title} />

                {/* Template description */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Template description:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* Create a brief and informative description</p>
                <input type="text" name="Template description" placeholder="Description" className='bg-slate-400 rounded-md p-1 mb-3 '
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />

                {/* Link */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Github link:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* The link to your Github repository</p>
                <input type="text" name="Template Github link" placeholder="Link" className='bg-slate-400 rounded-md p-1 mb-3' />

                {/* Blog Post Link */}
                <p className='font-semibold text-slate-100 text-lg p-1'>Blog post link:</p>
                <p className='font-semibold text-slate-400 text-md pb-1'>* By linking your template to a specific blog article, you can provide your readers with a more in-depth and personalized experience.</p>
                <input type="text" name="Blog post link" placeholder="Link" className='bg-slate-400 rounded-md p-1 mb-3' />
                {error && <div className='text-red-600 text-xl font-bold py-2'>{error}</div>}

                {/* Hidden text */}
                <input type="hidden" name="User name" value={user.blogname} />
                <input type="hidden" name="by:" value={user.email} />
                <input type="hidden" name="_subject" value="New template submitted" />

                <button
                    className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                    <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
                </button>
            </form>
        </>
    );
}

export default TemplateForm;