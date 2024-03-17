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
        <div className="display_flex_center">

            <div>
                <button onClick={handleClick}>{ switchMode ? "Просмотреть список" : "Создать список"}</button>
            </div>

            {
                switchMode 
                ? <CreateList userName={userName}/>
                : <UserList list={userList}/>
            }

        </div>
    )
}

export default UserMenu