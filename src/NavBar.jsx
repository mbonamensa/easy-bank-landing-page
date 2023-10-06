import hamburger from "./assets/images/icon-hamburger.svg"
import logo from "./assets/images/logo.svg"

function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-white p-4">
        <div className="">
            <img src={logo} alt="easy bank logo" />
        </div>
        <div className="hidden md:block basis-1/3">
          <ul className="flex items-center justify-between gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="basis-1/4 h-[100%]">
            <img className="ml-auto" src={hamburger} alt="hamburger menu" />
        </div>
    </nav>
  )
}

export default NavBar