import hamburger from "./assets/images/icon-hamburger.svg"
import closeBtn from "./assets/images/icon-close.svg"
import logo from "./assets/images/logo.svg"

function NavBar({toggleMenu, openMenu, closeMenu}) {
  return (
    <nav className="h-[80px] flex justify-between sticky top-[0] items-center bg-white md:px-16 sm:px-20 px-8 lg:px-24 z-20 relative">
        <div className="">
            <img src={logo} alt="easy bank logo" />
        </div>
        <div className="hidden md:block basis-1/3 h-full flex">
          <ul className="flex items-center justify-between md:gap-3 lg:gap-5 h-full text-[#9698a6]">
            <a className="transition-[background] delay-150 duration-300 h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:30%_3px] hover:bg-[length:100%_3px] bg-bottom" href="#"><li>Home</li></a>
            <a className="transition-[background] delay-150 duration-300 h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:30%_3px] hover:bg-[length:100%_3px] bg-bottom" href="#"><li>About</li></a>
            <a className="transition-[background] delay-150 duration-300 h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:30%_3px] hover:bg-[length:100%_3px] bg-bottom" href="#"><li>Contact</li></a>
            <a className="transition-[background] delay-150 duration-300 h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:30%_3px] hover:bg-[length:100%_3px] bg-bottom" href="#"><li>Blog</li></a>
            <a className="transition-[background] delay-150 duration-300 h-full flex items-center hover:text-[#2d314d] hover:bg-gradient-to-r from-[#31d35c] to-[#2bb7da] bg-no-repeat bg-[length:30%_3px] hover:bg-[length:100%_3px] bg-bottom" href="#"><li>Careers</li></a>
          </ul>
        </div>
        <div className="basis-1/4 md:hidden relative">
        <button onClick={openMenu} className={`${toggleMenu ? "invisible" : toggleMenu === undefined ? "" : "visible animate-rotateL"} transition ease-in-out delay-150 duration-300 ml-auto flex items-center justify center relative`}>
            <img src={hamburger} alt="hamburger menu" />
        </button>
        <button onClick={closeMenu} className={`${toggleMenu ? "visible animate-rotateR": "invisible"} transition ease-in-out delay-150 duration-300ml-auto flex items-center justify center absolute right-[0] top-[0]`}>
            <img src={closeBtn} alt="x button" />
        </button>
        </div>
        <div className="hidden md:block">
          <a className="transition ease-in-out delay-100 duration-300 bg-gradient-to-r from-[#31d35c] to-[#2bb7da] hover:opacity-70 hover:scale-105 text-sm text-white ml-auto block text-center px-6 py-2 rounded-full" href="">Request Invite</a>
        </div>
    </nav>
  )
}

export default NavBar