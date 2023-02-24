// Overview: Form for delete a template

import { useUserContext } from '../../hooks/useUserContext'

function DeleteFormTemplate({ selectedTemplate }) {

    const { user } = useUserContext();

    return (

        <form className="flex flex-col" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

            {/* hidden text */}
            <input type="hidden" name="User email" value={user.blogname} />
            <input type="hidden" name="By:" value={user.email} />
            <input type="hidden" name="_subject" value="New edit request for template" />
            <input type="hidden" name="Template" value={selectedTemplate.templateTitle} />

            {/* Request */}
            <p className='font-semibold text-slate-400 text-md p-1'>
                Explain in a few lines the changes you want to make to "{selectedTemplate.templateTitle}"
            </p>
            <textarea className="bg-slate-400 border-[1px] border-slate-600 rounded-md min-h-[200px]" name="Request" placeholder="Request"></textarea>

            <button
                className=" cursor-pointer h-[37px] rounded-md w-[70px] mt-3 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                <input className="text-white group-hover:text-blue-600 font-semibold " type="submit" value="Send" />
            </button>
        </form>

    );
}

export default DeleteFormTemplate;