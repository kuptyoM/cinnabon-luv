import { FC } from "react";
import Header from "./components/Header";

const AdminPanel: FC = () => {
    return ( 
        <div className="container mx-auto w-3/5 bg-gray-100 h-screen flex pt-20">
            <Header />
            <form className="flex flex-col gap-3">
                <h1>Login</h1>
                <input placeholder="login"/>
                <input placeholder="password"/>
                <button className="border border-solid border-black hover:bg-gray-300 transition-colors duration-300 ease-in-out">submit</button>
            </form>
        </div>
     );
}
 
export default AdminPanel;