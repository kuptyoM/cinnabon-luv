import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import AdminPanel from "../AdminPanel";

const Router: FC = () => {
    
    return (  
        <BrowserRouter>
        
        <Routes>
            <Route element={<App />} path="/"/>
            <Route element={<AdminPanel />} path="/admin"/>
        </Routes>
            

        </BrowserRouter>
    );
}

export default Router;