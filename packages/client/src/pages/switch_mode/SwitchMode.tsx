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
        <div>
            <button onClick={switchUser}>User</button>
            <button onClick={switchAdmin}>Admin</button>
        </div>
    )
}

export default SwitchMode