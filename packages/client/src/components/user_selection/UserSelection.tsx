import { useState } from "react"
import UserTransport from "../../utils/UsersTransport"

interface UserSelectionProps {
    setName: (el: string) => void
}

const UserSelection = (props: UserSelectionProps) => {
    const [input, setInput] = useState('')

    const handleChange = () => {
        props.setName(input)
    }

    const createUser = () => {
        const transport = new UserTransport("http://localhost:3001/api/user/")
        transport.post("/addUser", {userName: input})
    }

    return (
        <div>
            <input type="text" value={input} onChange={el => setInput(el.target.value)}/>
            <button onClick={handleChange}>Войти</button>
            <button onClick={createUser}>Создать</button>
            
        </div>
    )
}

export default UserSelection