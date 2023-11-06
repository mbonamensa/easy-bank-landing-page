import currencyImg from "./assets/images/image-currency.jpg"
import restaurantImg from "./assets/images/image-restaurant.jpg"
import planeImg from "./assets/images/image-plane.jpg"
import confettiImg from "./assets/images/image-confetti.jpg"

function ArticleSection() {
    return (
        <div className="sm:px-20 px-10 lg:px-24 py-24 bg-[#fafafa]">
            <h2 className="text-3xl font-bold mt-10">Latest Articles</h2>
            <div className="mt-4 flex flex-col md:flex-row sm:flex-wrap lg:flex-nowrap gap-6 justify-between">
                <div className="mt-10 basis-1/4 bg-white rounded overflow-hidden sm:basis-[45%] md:items-start md:text-left flex flex-col">
                    <div className="w-full h-[200px]">
                        <img className="h-full w-full object-cover" src={currencyImg} alt="" />
                    </div>
                    <div className="p-6">
                        <p className="text-[10px] text-[#9698a6]">By Claire Robinson</p>
                        <h3 className="mt-3 text-lg font-bold leading-6 hover:text-[#31d35c]"><a href="#">Receive money in any currency with no fees</a></h3>
                        <p className="mt-3 text-sm text-[#9698a6]">The world is getting smaller and we're becoming more mobile. So why should you be 
                        forced to only receive money in a single …</p>
                    </div>
                </div>
                <div className="mt-10 basis-1/4 bg-white rounded overflow-hidden sm:basis-[45%] md:items-start md:text-left flex flex-col">
                    <div className="w-full h-[200px]">
                        <img className="h-full w-full object-cover" src={restaurantImg} alt="" />
                    </div>
                    <div className="p-6">
                        <p className="text-[10px] text-[#9698a6]">By Wilson Hutton</p>
                        <h3 className="mt-3 text-lg font-bold leading-6 hover:text-[#31d35c]"><a href="#">Treat yourself without worrying about money</a></h3>
                        <p className="mt-3 text-sm text-[#9698a6]">Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …</p>
                    </div>
                </div>
                <div className="mt-10 basis-1/4 bg-white rounded overflow-hidden sm:basis-[45%] md:items-start md:text-left flex flex-col">
                    <div className="w-full h-[200px]">
                        <img className="h-full w-full object-cover" src={planeImg} alt="" />
                    </div>
                    <div className="p-6">
                        <p className="text-[10px] text-[#9698a6]">By Wilson Hutton</p>
                        <h3 className="mt-3 text-lg font-bold leading-6 hover:text-[#31d35c]"><a href="#">Take your Easybank card wherever you go</a></h3>
                        <p className="mt-3 text-sm text-[#9698a6]">We want you to enjoy your travels. This is why we don't charge any fees on purchases 
                    while you're abroad. We'll even show you </p>
                    </div>
                </div>
                <div className="mt-10 basis-1/4 bg-white rounded overflow-hidden sm:basis-[45%] md:items-start md:text-left flex flex-col">
                    <div className="w-full h-[200px]">
                        <img className="h-full w-full object-cover" src={confettiImg} alt="" />
                    </div>
                    <div className="p-6">
                        <p className="text-[10px] text-[#9698a6]">By Claire Robinson</p>
                        <h3 className="mt-3 text-lg font-bold leading-6 hover:text-[#31d35c]"><a href="#">Our invite-only Beta accounts are now live!</a></h3>
                        <p className="mt-3 text-sm text-[#9698a6]">After a lot of hard work by the whole team, we're excited to launch our closed beta. 
                        It's easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleSection