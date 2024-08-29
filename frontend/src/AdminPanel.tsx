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

    const handleClick = () => {
        const fetchAdmin = async () => {
            try {
                const response = await axios.get("http://localhost:8000/admin/dashboard");
                console.log(response.data); 
              } catch (error) {
                console.error("Error:", error);
              }
        }

        fetchAdmin()
    }

    return ( 
        <div className="container mx-auto w-3/5 bg-gray-100 h-screen flex pt-20">
            <Header />
            <form className="flex flex-col gap-3">
                <h1>Login</h1>
                <input placeholder="login" onChange={event => setLogin(event.target.value)}/>
                <input placeholder="password" onChange={event => setPassword(event.target.value)}/>
                <button className="border border-solid border-black hover:bg-gray-300 transition-colors duration-300 ease-in-out" onClick={handleSubmit}>submit</button>
            </form>
            <button onClick={handleClick}>test</button>
        </div>
     );
}
 
export default AdminPanel;