import React from "react";




const Header: React.FC = () => {

    return(
        <div className="w-full h-20 bg-cyan-100 mb-10 content-center grid grid-cols-9">
            <img src="https://sun1-87.userapi.com/s/v1/ig2/FNRtpu3eyZrePomH3e81-sRLiXUbDNggm049CcesV3WDV-QnK35cROdtzIuYrW9OmEphz91IqgYgZp62HuWLk_Q_.jpg?size=600x600&quality=95&crop=0%2C0%2C600%2C600&ava=1&clckid=62089932" className="col-span-1 size-20" alt="logo"/>
            <h1 className="content-center text-3xl col-span-2 text-center cursor-pointer">Home</h1>
            <h1 className="content-center text-3xl col-span-2 text-center cursor-pointer">Find us</h1>
            <h1 className="content-center text-3xl col-span-2 text-center cursor-pointer">Support</h1>
            <h1 className="content-center text-3xl col-span-2 text-center cursor-pointer">Admin Panel</h1>
        </div>
    )
}

export default Header