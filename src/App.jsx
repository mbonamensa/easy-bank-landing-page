import { useState } from "react"
import ArticleSection from "./ArticleSection"
import FooterSection from "./FooterSection"
import Hero from "./Hero"
import MainSection from "./MainSection"
import MobileMenu from "./MobileMenu"
import NavBar from "./NavBar"
import mockups from "./assets/images/image-mockups.png"
import { Fade } from "react-awesome-reveal";

function App () {
    const [toggleMenu, setToggleMenu] = useState(undefined)
    const [closeMobileMenu, setCloseMobileMenu] = useState(true)

    function openMenu() {
        setToggleMenu(true)
        setCloseMobileMenu(false)
    }
    function closeMenu() {
        setToggleMenu(false)
        setTimeout(() => {               
            setCloseMobileMenu(true)
        }, 850);
    }

    return (
        <Fade>
            <div className="text-[#2d314d] font-primary md:overflow-x-clip relative">
                <div className="my-0 mx-auto">
                    <NavBar toggleMenu={toggleMenu} openMenu={openMenu} closeMenu={closeMenu}/>
                    <header className="relative">
                        <Hero />
                        <div className="h-[530px] max-w-[600px] md:w-[60%] absolute top-[-90px] right-[-102px]">
                            <img className="w-full md:block hidden lg:block" src={mockups} alt="" />
                        </div>
                    </header>
                    <main className="">
                            <MainSection />
                            <ArticleSection />
                    </main>
                    <footer>
                        <FooterSection />
                    </footer>
                </div>
                <div onClick={closeMenu} className={`fixed top-[0] ${toggleMenu ? "opacity-100 animate-easeIn" : "opacity-0 animate-easeOut"} ${closeMobileMenu && "hidden" } left-[0] h-[100%] w-[100%] z-10 bg-[#000000a6]`}>
                    <MobileMenu />
                </div>                
            </div>
        </Fade>
    )
}

export default App