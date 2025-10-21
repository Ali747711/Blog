import { useState } from "react"
import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className=" sticky top-0 z-50 shadow-md flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-100 py-4 border-b border-gray-300 bg-gray-900 relative transition-all">

            <NavLink to={'/'}>
              <img className="w-25 h-15 md:w-30" src={assets.blogImg} alt="" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8 text-white ">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink  to={'/about'}>About Me</NavLink>
                <NavLink to={'/create'} className="font-medium cursor-pointer px-8 py-2 bg-primary-dull/50 hover:bg-primary-dull transition text-white rounded-lg">Create POST</NavLink>
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <a href="#" className="block">Home</a>
                <a href="#" className="block">About</a>
                <a href="#" className="block">Contact</a>
                <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>
            </div>

        </nav>
    )
}

export default Navbar