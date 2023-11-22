import onBoardingIcon from "./assets/images/icon-onboarding.svg"
import apiIcon from "./assets/images/icon-api.svg"
import budgetingIcon from "./assets/images/icon-budgeting.svg"
import onlineIcon from "./assets/images/icon-online.svg"
import AnimateOnScroll from "./AnimateOnScroll"

function MainSection() {
    return (
        <div className="md:px-20 sm:px-20 px-8 lg:px-24 py-24 bg-[#f3f4f6]">
            <AnimateOnScroll>
                <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">Why choose Easybank?</h2>
                <div className="tex-sm text-[#9698a6] mt-4">
                    <p>We leverage Open Banking to turn your bank account into your financial hub.</p>
                    <p>Controlyour finances like never before.</p>
                </div>
                </div>
                <div className="mt-20 flex flex-col md:flex-row sm:flex-wrap lg:flex-nowrap gap-6 justify-between">
                
                    <div className="mt-6 sm:basis-[45%] text-center md:items-start md:text-left flex flex-col justify-center items-center">
                        <img className="" src={onlineIcon} alt="" />
                        <h3 className="mt-6 text-xl font-bold">Online Banking</h3>
                        <p className="mt-5 text-[#9698a6]">Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.</p>
                    </div>
                
                    <div className="mt-6 sm:basis-[45%] text-center md:items-start md:text-left flex flex-col justify-center items-center">
                        <img className="" src={budgetingIcon} alt="" />
                        <h3 className="mt-6 text-xl font-bold">Simple Budgeting</h3>
                        <p className="mt-5 text-[#9698a6]">See exactly where your money goes each month. Receive notifications when you're 
                        close to hitting your limits.</p>
                    </div>
                    <div className="mt-6 sm:basis-[45%] text-center md:items-start md:text-left flex flex-col justify-center items-center">
                        <img className="" src={onBoardingIcon} alt="" />
                        <h3 className="mt-6 text-xl font-bold">Fast Onboarding</h3>
                        <p className="mt-5 text-[#9698a6]">We don't do branches. Open your account in minutes online and start taking control 
                        of your finances right away.</p>
                    </div>
                    <div className="mt-6 sm:basis-[45%] text-center md:items-start md:text-left flex flex-col justify-center items-center">
                        <img className="" src={apiIcon} alt="" />
                        <h3 className="mt-6 text-xl font-bold">Open API</h3>
                        <p className="mt-5 text-[#9698a6]">Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.</p>
                    </div>
                </div>
            </AnimateOnScroll>
        </div>
    )
}

export default MainSection