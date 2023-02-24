import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import Logo from "../media/logoBlog.png"
import LoginCard from '../media/Login.jpg'
import todo from '../media/todo.jpg'


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
        <div className='2xl:px-40 h-auto pt-[140px] bg-slate-100  flex flex-col lg:grid lg:grid-cols-2 pb-10'>
            <div className=''>
                <div className=' grid grid-cols-4 gap-2 p-4'>

                    <div className='p-1 bg-white rounded-xl flex overflow-hidden items-center justify-center flex-row  col-span-3 h-[150px] hover:bg-slate-200'>
                        <div className='flex-flex-col'>
                            <h1 className="text-slate-700  text-xl min-[500px]:text-3xl font-mono p-2 move-right-left">Create your account</h1>
                            <p className="text-slate-500 text-sm min-[500px]:text-xl p-2 font-mono move-right-left">Signup and start publishing →</p></div>
                    </div>

                    <div className='p-1 bg-white rounded-xl  flex items-center justify-center col-span-1 h-[150px] hover:bg-slate-200 overflow-hidden'>
                        <img className="move-right-leftImg w-[180px] ml-[70px]" alt="todo card" src={Logo} />
                    </div>

                    <div className='p-1 bg-white rounded-xl col-span-1 h-[150px] hover:bg-slate-200 flex flex-col px-2 justify-center items-center overflow-hidden'>
                        <div className='w-[270px] flex flex-row items-center px-2 bg-slate-300 justify-center move-right-left'>
                            <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                            <h1 className="text-black text-2xl float-left p-2 ml-2  move-right-left">Bricks</h1>
                            <h1 className="text-black text-2xl float-left font-bold -ml-2 p-2 move-right-left">Hub</h1>
                        </div>
                        <div className='ml-20 w-[270px] m-1 flex flex-row items-center px-2 bg-white justify-center move-right-left'>
                            <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                            <h1 className="text-black text-2xl float-left p-2 ml-2 move-right-left">Bricks</h1>
                            <h1 className="text-black text-2xl float-left font-bold -ml-2 p-2 move-right-left">Hub</h1>
                        </div>
                        <div className='w-[270px] flex flex-row  items-center px-2 bg-slate-300 justify-center move-right-left'>
                            <img alt="blog logo" src={Logo} className="w-[35px] h-[35px]" />
                            <h1 className="text-black text-2xl float-left p-2 ml-2 move-right-left">Bricks</h1>
                            <h1 className="text-black text-2xl float-left font-bold -ml-2 p-2 move-right-left">Hub</h1>
                        </div>
                    </div>

                    <div className='p-1 bg-white rounded-xl flex flex-row  overflow-hidden col-span-3 h-[150px] hover:bg-slate-200 '>
                        <img className="-ml-8 w-[200px] h-auto p-2" alt="Login card" src={LoginCard} />
                        <div className='flex flex-col justify-center'>
                            <h1 className="text-slate-700 p-2 text-xl min-[500px]:text-2xl font-mono move-right-left">Submit your Bricks !</h1>
                            <p className="max-[500px]:hidden p-2 text-slate-500 text-md">Submit <b>components, posts and templates.</b></p>
                        </div>
                    </div>

                    <div className='p-1 bg-white rounded-xl  px-4 col-span-4 h-[150px] hover:bg-slate-200 flex flex-row justify-center items-center'>
                        <h1 className="text-slate-800  text-xl min-[500px]:text-2xl font-mono p-2 move-right-left"><b>Edit and visualize </b>your published contributions.</h1>
                        <img className="w-[110px]" alt="todo card" src={todo} />
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
                            Or Login if you already have an account.
                        </p>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Signup