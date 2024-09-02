import { FC } from "react";
import { useNavigate } from "react-router-dom";




const Header: FC = () => {
    let navigate = useNavigate();


    return(
        <header className="w-full h-20 bg-[#f2bb85] mb-5 flex items-center justify-between">
            <img src="https://sun1-87.userapi.com/s/v1/ig2/FNRtpu3eyZrePomH3e81-sRLiXUbDNggm049CcesV3WDV-QnK35cROdtzIuYrW9OmEphz91IqgYgZp62HuWLk_Q_.jpg?size=600x600&quality=95&crop=0%2C0%2C600%2C600&ava=1&clckid=62089932" className="col-span-1 size-20" alt="logo"/>
            <ul className="h-full flex items-center gap-10 mr-16 text-3xl">
                <li onClick={() => navigate('/', {replace: false})} className="cursor-pointer h-full content-center hover:bg-cyan-500/10 transition-colors ease-in-out duration-500">Home</li>
                <li className="cursor-pointer h-full content-center hover:bg-cyan-500/10 transition-colors ease-in-out duration-500">Find Us</li>
                <li className="cursor-pointer h-full content-center hover:bg-cyan-500/10 transition-colors ease-in-out duration-500">Support</li>
                <li onClick={() => navigate('/admin', {replace: true})} className="cursor-pointer h-full content-center hover:bg-cyan-500/10 transition-colors ease-in-out duration-500">Admin Panel</li>
            </ul>
            
        </header>
    )
}

export default Header