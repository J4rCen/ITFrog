import { useNavigate } from "react-router-dom"


const SwitchMode = () => {

    const navigate = useNavigate()

    const switchUser = () => {
        navigate("/user")
    }

    const switchAdmin = () => {
        navigate("/admin")
    }

    return (
        <div className="display_flex_center">
            <button className="input_width" onClick={switchUser}>User</button>
            <button className="input_width" onClick={switchAdmin}>Admin</button>
        </div>
    )
}

export default SwitchMode