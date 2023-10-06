import bgIntro from "./assets/images/bg-intro-desktop.svg"

function Hero() {
  return (
    <div className="flex items-center justify-between p-4">
       <div className="">
            <h1 className="text-4xl">Next generation digital banking</h1>
            <p className="text-sm mt-4">Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.</p>
            <a className="border-2 mt-4" href="">Request Invite</a>
       </div>

       <div className="">
            <img src={bgIntro} alt="" />
       </div>
    </div>
  )
}

export default Hero