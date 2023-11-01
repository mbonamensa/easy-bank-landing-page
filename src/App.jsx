import { useState } from "react"
import ArticleSection from "./ArticleSection"
import FooterSection from "./FooterSection"
import Hero from "./Hero"
import MainSection from "./MainSection"
import MobileMenu from "./MobileMenu"
import NavBar from "./NavBar"
import mockups from "./assets/images/image-mockups.png"
import { Fade, Slide } from "react-awesome-reveal";

function App () {
    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(prevState => !prevState)
    }

    return (
        <Fade>
            <div className="text-[#2d314d] font-primary md:overflow-x-hidden relative">
                <div className="my-0 mx-auto">
                    <header className="relative">
                        <NavBar toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}/>
                        <Hero />
                        <div className="h-[530px] max-w-[600px] md:w-[60%] absolute top-[-19px] right-[-102px]">
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
                {toggleMenu &&
                    <div onClick={handleToggleMenu} className="absolute top-[0] left-[0] h-[100%] w-[100%] z-10 bg-[#000000a6]">
                        <MobileMenu />
                    </div>
                }
            </div>
        </Fade>
    )
}

export default App