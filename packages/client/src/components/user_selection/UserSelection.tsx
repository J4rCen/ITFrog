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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => alert(res.des))
        .catch(err => alert(err.response.data))
    }

    return (
        <div className="display_flex_center">
            <input type="text" value={input} onChange={el => setInput(el.target.value)} placeholder="Введите имя пользователя"/>
            <button onClick={handleChange}>Войти</button>
            <button onClick={createUser}>Создать</button>
            
        </div>
    )
}

export default UserSelection