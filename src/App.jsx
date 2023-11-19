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
    const [toggleMenu, setToggleMenu] = useState(false)
    const [closeMobileMenu, setCloseMobileMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(prevState => !prevState)
        setTimeout(() => {            
            toggleMenu === false ? setCloseMobileMenu(true) : setCloseMobileMenu(false)
        }, 1000);
    }

    return (
        <Fade>
            <div className="text-[#2d314d] font-primary md:overflow-x-clip relative">
                <div className="my-0 mx-auto">
                    <NavBar toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu}/>
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
                <div onClick={handleToggleMenu} className={`absolute top-[0] ${toggleMenu ? "block animate-easeIn" : "opacity-0 animate-easeOut"} ${!closeMobileMenu && "hidden" } left-[0] h-[100%] w-[100%] z-10 bg-[#000000a6]`}>
                    <MobileMenu />
                </div>                
                {/* <div onClick={handleToggleMenu} className={`absolute top-[0] ${toggleMenu ? "visible" : "hidden"} transition ease-in-out delay-150 duration-300 left-[0] h-[100%] w-[100%] ${!toggleMenu ? "z-0" : "z-10"} bg-[#000000a6]`}>
                    <MobileMenu />
                </div>                 */}
            </div>
        </Fade>
    )
    // ${toggleMenu ? "opacity-100" : "opacity-0"}
}

export default App