import desktopBgIntro from "./assets/images/bg-intro-desktop.svg"
import mobileBgIntro from "./assets/images/bg-intro-mobile.png"

function Hero() {
  return (
      <div className="bg-[#fafafa] md:pl-8 lg:pl-12 flex md:flex-row flex-col-reverse md:h-[80vh] items-center justify-start relative overflow-hidden">
        <div className="text-center md:text-left px-6 sm:px-12 flex flex-col items-center basis-2/5 mt-10 md:mb-0 mb-20">
              <h1 className="text-4xl">Next generation digital banking</h1>
              <p className="text-sm text-[#9698a6] mt-4">Take your financial life online. Your Easybank account will be a one-stop-shop 
              for spending, saving, budgeting, investing, and much more.</p>
              <a className="bg-gradient-to-r from-[#31d35c] hover:opacity-70 text-white to-[#2bb7da] block md:mr-auto text-center w-[180px] py-2 px-3 mt-6 rounded-full" href="">Request Invite</a>
        </div>

        <div className="w-full md:absolute md:top-[-43%] md:right-[-33%] lg:top-[-43%] lg:right-[-33%] max-w-[1077px]">
              <img className="w-full md:hidden lg:hidden" src={mobileBgIntro} alt="" />
              <img className="w-full md:block lg:block hidden" src={desktopBgIntro} alt="" />
        </div>
      </div>
  )
}

export default Hero