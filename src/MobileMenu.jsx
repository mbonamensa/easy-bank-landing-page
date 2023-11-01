import hamburger from "./assets/images/icon-hamburger.svg"
import logo from "./assets/images/logo.svg"
import { Fade } from "react-awesome-reveal"

function MobileMenu() {
  return (
    <Fade triggerOnce={false}>
        <div className="p-6 bg-white m-8 mt-24">
          <ul className="flex flex-col items-center justify-between gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
    </Fade>

  )
}

export default MobileMenu