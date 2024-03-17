import { useEffect } from "react"
import { useState } from "react"
import UserTransport from "../../utils/UsersTransport"
import UserSelection from "../../components/user_selection/UserSelection"
import UserMenu from "../../components/user_menu/UserMenu"

const URLRequest = "http://localhost:3001/api/user/"

const User = () => {
    const [userName, setUserName] = useState('')
    const [store, setStore] = useState({})

    useEffect(() => {

        const getDate = async () => {
            if(userName.length !== 0) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const userTransport: any = await new UserTransport(URLRequest, userName).userGet()
                setStore(userTransport)
            }
        }

        getDate()
       
    }, [userName])

    return (
        <div className="user_div display_flex_center">
            {   
                userName.length !== 0 && Object.keys(store).length !== 0
                ? <UserMenu store={store}/> 
                : <UserSelection setName={setUserName}/>
            }
        </div>
    )    
}

export default User