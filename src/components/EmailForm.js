// Overview: Component for the email form that appear on the homepage, about page, component page and templates page

function ContactForm() {

    return (
        <form className="flex flex-col" target="_blank" action="https://mailthis.to/buildthewebfaster@gmail.com" method="POST" encType="multipart/form-data">

            {/* Hidden text */}
            <input type="hidden" name="Subject" value="New collaboration request from home" />

            {/* Email */}
            <p className='font-semibold text-slate-800 text-lg p-1'>Your e-mail</p>
            <p className='font-semibold text-slate-600 text-md pb-1'>* Please provide your email.</p>
            <input type="text" name="Email:" placeholder="youremail@yourdomain.com" className='bg-gray-100 rounded-lg p-3 mb-7 ' />

            {/* Request main text */}
            <p className='font-semibold text-slate-600 text-md pb-1'>Let's team up and make something great <b> together!</b></p>
            <textarea className="bg-gray-100 border rounded-lg min-h-[200px] 2xl:h-[400px] p-3" name="Request" placeholder="Write here..."></textarea>

            <button
                className="h-[37px] rounded-md w-[70px] mt-2  bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                <input type="submit" value="Submit" className="text-white group-hover:text-blue-600 font-semibold " />
            </button>
        </form>
    );
}

export default ContactForm;