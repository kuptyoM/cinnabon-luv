import { FC } from "react";
import { useNavigate } from "react-router-dom";




const Header: FC = () => {
    let navigate = useNavigate();


    return(
        <header className="w-full mx-auto h-20 mb-5 fixed top-0 z-10 bg-white">
            <div className="w-3/5 mx-auto flex items-center justify-between ">
                <div className="flex flex-row gap-10 text-5xl font-bold">
                    <img src="https://sun1-87.userapi.com/s/v1/ig2/FNRtpu3eyZrePomH3e81-sRLiXUbDNggm049CcesV3WDV-QnK35cROdtzIuYrW9OmEphz91IqgYgZp62HuWLk_Q_.jpg?size=600x600&quality=95&crop=0%2C0%2C600%2C600&ava=1&clckid=62089932" className="size-20" alt="logo"/>
                    <h1 className="self-center select-none">Cinnabon Luv</h1>   
                </div>
                <ul className="h-full flex items-center gap-5 text-2xl">
                    <li onClick={() => navigate('/', {replace: false})} className="px-5 rounded-3xl cursor-pointer p-2 content-center hover:bg-[#DBDFD0] transition-colors ease-in-out duration-300">Home</li>
                    <li className="px-5 rounded-3xl cursor-pointer p-2 content-center hover:bg-[#DBDFD0] transition-colors ease-in-out duration-300">Find Us</li>
                    <li className="px-5 rounded-3xl cursor-pointer p-2 content-center hover:bg-[#DBDFD0] transition-colors ease-in-out duration-300">Support</li>
                    <li onClick={() => navigate('/admin', {replace: true})} className="px-5 rounded-3xl cursor-pointer p-2 content-center hover:bg-[#DBDFD0] transition-colors ease-in-out duration-300">Admin Panel</li>
                </ul>
                <div className="mr-10 border border-black rounded-3xl w-48 h-12 flex items-center content-center justify-center hover:bg-[#DBDFD0] cursor-pointer hover:border-none transition-colors duration-500 ease-in-out">
                    Сделать что-то
                </div>
            </div>
            
            
        </header>
    )
}

export default Header