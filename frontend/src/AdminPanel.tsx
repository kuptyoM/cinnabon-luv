import { FC, useState, FormEvent } from "react";
import axios from "axios";
import Header from "./components/Header";

const AdminPanel: FC = () => {

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        const sendAdminLogin = async () => {

            try {
                const response = await axios.post("http://localhost:8000/admin/login", {
                    login: login,
                    password: password
                });
                console.log(response.data); 
              } catch (error) {
                console.error("Error:", error);
              }
        }
  
        sendAdminLogin()
    }


    return ( 
        <div className="mx-auto w-full">
            <Header />
            <div className="container mx-auto flex pt-20 bg-gray-100 h-screen justify-center items-center">
                
                <form className="flex flex-col gap-3 border border-solid border-black p-5 bg-white">
                    <h1 className="font-bold text-center">Log In</h1>
                    <input placeholder="login" onChange={event => setLogin(event.target.value)} className="border border-solid rounded-2xl placeholder:p-2 hover:border-purple-600 focus:border-black transition-colors duration-500 ease-in-out"/>
                    <input placeholder="password" onChange={event => setPassword(event.target.value)} className="border border-solid rounded-2xl placeholder:p-2 focus:border-black hover:border-purple-600 transition-colors duration-500 ease-in-out"/>
                    <button className="border border-solid border-black hover:bg-gray-300 transition-colors duration-300 ease-in-out" onClick={handleSubmit}>submit</button>
                </form>
                
            </div>
            
        </div>
     );
}
 
export default AdminPanel;