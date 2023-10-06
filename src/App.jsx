import Hero from "./Hero"
import NavBar from "./NavBar"

function App () {
    return (
        <div className="text-[#2d314d] font-primary">
            <div className="my-0 mx-auto">
                <header className="bg-[#f3f4f6]">
                    <NavBar />
                    <Hero />
                </header>
                <main>
                    <h2>Main</h2>
                </main>
                <footer>
                    <h3>Footer</h3>
                </footer>
            </div>
        </div>
    )
}

export default App