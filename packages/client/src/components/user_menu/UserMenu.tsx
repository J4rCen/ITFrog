import { useEffect, useState } from "react"
import UserList from "../user_list/UserList"
import CreateList from "../create_list/CreateList"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserMenu = (props: any) => {
    const [userList, setUserList] = useState(Array)
    const [userName, setUserName] = useState(String)
    const [switchMode, setSwitchMode] = useState(false)

    useEffect(() => {
        if(props.store.length !== undefined) {
            setUserList(props.store[0].userList)
            setUserName(props.store[0].userName)
        }
    }, [props])

    const handleClick = () => {
        setSwitchMode(!switchMode)
    }

    return (
        <div>

            <div>
                <button onClick={handleClick}>{ switchMode ? "Создать список" : "Просмотреть список"}</button>
            </div>

            {
                switchMode 
                ? <UserList list={userList}/>
                : <CreateList userName={userName}/>
            }

        </div>
    )
}

export default UserMenu