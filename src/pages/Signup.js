import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import Logo from "../media/logoBlog.png"

// React helemet
import Seo from '../components/Seo'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [blogname, setblogname] = useState('')

    const { signup, error, isLoading } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(email, password, blogname)
    }

    return (
        <div className='2xl:px-40 h-auto pt-[140px] bg-slate-100 flex flex-col lg:grid lg:grid-cols-2 pb-10'>

            <Seo
                title='Bricks - Sign up'
                description='Build the web faster: discover our guides, templates and UI components.'
                name='Bricks-platform'
                type='landing page' />

            <div className=''>
                <div className=' sm:grid grid-cols-4 gap-2 p-4'>

                    <div className='p-1 rounded-xl flex overflow-hidden items-center justify-center flex-row  col-span-3 h-[150px]'>
                        <div className='flex-flex-col'>
                            <h1 className="text-slate-500 p-2 text-xl min-[500px]:text-2xl font-mono text-center"><b>Create </b>your account →</h1>
                            <p className="text-slate-400 text-sm min-[500px]:text-xl p-2 font-mono text-center">Sign up and start publishing</p>
                        </div>
                    </div>

                    <div className='p-1 rounded-xl flex items-center justify-center col-span-1 sm:h-[150px] overflow-hidden'>
                        <img className="hidden sm:w-[180px] sm:flex sm:ml-[70px]" alt="todo card" src={Logo} />
                    </div>

                    <div>
                    </div>

                    <div className='p-1 rounded-xl flex flex-row overflow-hidden col-span-3 h-[150px] '>
                        <div className='flex flex-col justify-center'>
                            <h1 className="text-slate-500 p-2 text-xl min-[500px]:text-2xl font-mono text-center"><b>Submit</b> your Bricks →</h1>
                            <p className="text-slate-400 text-sm min-[500px]:text-xl p-2 font-mono text-center">Submit <b>components, posts and templates.</b></p>
                        </div>
                    </div>

                    <div className='p-1 rounded-xl flex items-center justify-center col-span-1 sm:h-[150px]  overflow-hidden'>
                        <img className="hidden sm:flex sm:w-[180px] sm:mr-[70px]" alt="todo card" src={Logo} />
                    </div>

                    <div className='p-1 rounded-xl  px-4 col-span-3 h-[150px] flex flex-row justify-center items-center'>
                        <h1 className="text-slate-500 p-2 text-xl min-[500px]:text-2xl font-mono text-center"><b>Edit </b>your published contributions →</h1>
                    </div>
                </div>
            </div>

            <form action="#" method="POST" onSubmit={handleSubmit}>
                <div className=' pt-10 flex flex-col justify-center items-center'>

                    <div className='w-[270px] flex flex-row mt-14 items-center px-2 bg-black justify-center'>
                        <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                        <h1 className="text-white text-2xl float-left p-2 ml-2">Bricks</h1>
                        <h1 className="text-white text-2xl float-left -ml-2 p-2">Hub</h1>
                    </div>

                    <div className='w-[270px]'>
                        <h2 className="mt-6 text-xl font-semibold text-slate-600 px-1 py-4">Create your account</h2>
                    </div>

                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" name="email" type="email" onChange={(e) => setEmail(e.target.value)}
                            value={email} autoComplete="email" required className="w-[270px] relative block border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                    </div>

                    <div>
                        <label htmlFor="blogname" className="sr-only">Blog name</label>
                        <input id="blogname" name="blogname" type="blogname" onChange={(e) => setblogname(e.target.value)}
                            value={blogname} required className="w-[270px] relative block  border border-gray-300 px-3 py-2 mt-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Author name" />
                    </div>

                    <div>
                        <label htmlFor="password" class="sr-only">Password</label>
                        <input id="password" onChange={(e) => setPassword(e.target.value)}
                            value={password} name="password" type="password" autoCompletev="current-password" required className="w-[270px] relative block border border-gray-300 px-3 py-2 mt-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
                    </div>

                    <button disabled={isLoading}
                        className=" cursor-pointer h-[37px] rounded-md w-[270px] mt-3 bg-blue-600 hover:bg-white hover:border-[1px] group hover:border-blue-600 ">
                        <p className='text-white px-2 py-1 hover:text-blue-600 font-bold'>Sign up</p>
                    </button>
                    {error && <div className='text-red-600 text-xl font-bold py-2'>{error}</div>}
                    <Link to="/login">
                        <p className="mt-4 text-center underline text-sm text-slate-600 hover:font-semibold">
                            Or Log in if you already have an account.
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Signup