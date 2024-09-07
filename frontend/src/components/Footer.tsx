import { FC } from "react";



const Footer: FC = () => {

    return(
        <footer className="w-full h-[300px] bg-[#474747] mt-48 p-10">
            <div className="flex flex-row gap-16 justify-center items-center">
                <div className="flex flex-row text-4xl items-center gap-5">
                    <img src="https://sun1-87.userapi.com/s/v1/ig2/FNRtpu3eyZrePomH3e81-sRLiXUbDNggm049CcesV3WDV-QnK35cROdtzIuYrW9OmEphz91IqgYgZp62HuWLk_Q_.jpg?size=600x600&quality=95&crop=0%2C0%2C600%2C600&ava=1&clckid=62089932" className="size-20" alt="logo"/>
                    <h1 className="self-center select-none text-white">Cinnabon Luv</h1>   
                </div>
                <div className="self-center">
                    <h1 className="p-5 text-white font-bold">Навигация</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <p className="text-[#DBDFD0] cursor-pointer">Главная</p>
                        <p className="text-[#DBDFD0] cursor-pointer">Доставка</p>
                        <p className="text-[#DBDFD0] cursor-pointer">О нас</p>
                        <p className="text-[#DBDFD0] cursor-pointer">Блог</p>
                        <p className="text-[#DBDFD0] cursor-pointer">Меню</p>
                        <p className="text-[#DBDFD0] cursor-pointer">Контакты</p>
                    </div>
                </div>
                <div className="self-center">
                    <h1 className="text-white font-bold">Подписывайтесь на нас</h1>
                    <div className="flex flex-row gap-5 p-2">
                        <img className="size-8 cursor-pointer" src="src/icons/tg.svg"/>
                        <img className="size-8 cursor-pointer" src="src/icons/vk.svg"/>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer