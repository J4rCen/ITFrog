import { Route, Routes } from "react-router-dom"
import Admin from "./admin/Admin"
import SwitchMode from "./switch_mode/SwitchMode"
import User from "./user/User"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SwitchMode/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/user" element={<User/>}/>
        </Routes>
        
    )
}

export default AppRoutes