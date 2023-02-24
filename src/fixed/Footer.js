// Overview: fixed component rendered in all the pages

import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div>
      <footer className="bg-slate-100 w-full absolute px-4 sm:px-20 md:px-40 lg:px-60 grid grid-cols-4 gap-0 md:gap-10 z-10 py-10 ">
        <div className="  max-w-[250px] p-2 col-span-4 sm:col-span-1">
          <h1 className="text-slate-900 font-medium ">General resources</h1>
          <Link to="/">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700">Home</p></Link>
          <Link to="/BlogPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700">Blog</p></Link>
          <Link to="/AboutPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700">About</p></Link>
          <Link to="/TemplatesPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700">Templates</p></Link>
          <Link to="/ComponentPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700">Components</p></Link>
        </div>
        <div className="  max-w-[250px] p-2 col-span-4 sm:col-span-1">
          <h1 className="text-slate-900 font-medium ">More</h1>
          <Link to="/BricksHub">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700"> Bricks Hub</p>
          </Link>
          <Link to="/AboutPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700"> Contact me</p>
          </Link>
        </div>

        <div className="max-w-[250px] p-2 col-span-4 sm:col-span-1 ">
          <h1 className="text-slate-900 font-medium">Bricks Hub</h1>
          <Link to="/Signup">
            <p className="text-slate-500  p-1 cursor-pointer hover:text-slate-700"> Signup</p>
          </Link>
          <Link to="/Login">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700"> Login </p>
          </Link>
          <Link to="/RequirmentsPage">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700"> Before publishing </p>
          </Link>
        </div>

        <div className="  max-w-[250px] p-2 col-span-4 sm:col-span-1">
          <h1 className="text-slate-900 font-medium  cursor-pointer hover:text-slate-700">Legal</h1>
          <Link to="/">
            <p className="text-slate-500 p-1 cursor-pointer hover:text-slate-700"> Privacy policy</p>
          </Link>
        </div>
        <div className="w-100 col-span-4">
          <h2 className="p-1 text-slate-900 font-bold w-100 text-2xl cursor-pointer ">Bricks</h2>
          <p className=" p-1 text-slate-500 w-1/2">Copyright © 2022 Bricks, Inc. All rights reserved.</p>
        </div>
      </footer >
    </div >
  )
}

export default Footer