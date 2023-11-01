import hamburger from "./assets/images/icon-hamburger.svg"
import closeBtn from "./assets/images/icon-close.svg"
import logo from "./assets/images/logo.svg"

function NavBar({toggleMenu, handleToggleMenu}) {
  return (
    <nav className="flex justify-between items-center bg-white h-[65px] md:px-16 sm:px-20 px-8 lg:px-24 z-20 relative">
    {/* <nav className="flex justify-between items-center bg-white p-4 z-20 relative"> */}
        <div className="">
            <img src={logo} alt="easy bank logo" />
        </div>
        <div className="hidden md:block basis-1/3 h-full flex">
        {/* <div className="hidden md:block basis-1/3"> */}
          <ul className="flex items-center justify-between md:gap-3 lg:gap-5 h-full text-[#9698a6]">
            <a className="h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:100%_3px] bg-bottom" href="#"><li>Home</li></a>
            <a className="h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:100%_3px] bg-bottom" href="#"><li>About</li></a>
            <a className="h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:100%_3px] bg-bottom" href="#"><li>Contact</li></a>
            <a className="h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:100%_3px] bg-bottom" href="#"><li>Blog</li></a>
            <a className="h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:100%_3px] bg-bottom" href="#"><li>Careers</li></a>
          </ul>
        </div>
        <div className="basis-1/4 md:hidden">
        <button onClick={handleToggleMenu} className="ml-auto block">
            { toggleMenu ?
              <img className="" src={closeBtn} alt="x button" />
              :
              <img className="" src={hamburger} alt="hamburger menu" />
            }
        </button>
        </div>
        <div className="hidden md:block">
          <a className="bg-gradient-to-r from-[#31d35c] to-[#2bb7da] hover:opacity-70 text-sm text-white ml-auto block text-center px-6 py-2 rounded-full" href="">Request Invite</a>
        </div>
    </nav>
  )
}

export default NavBar