import { useState } from "react"
import { useSelector } from "react-redux"
import UserTransport from "../../utils/UsersTransport"
// import UserTransport from "../../utils/UsersTransport"

interface CreateListProps {
    userName: string
}


const CreateList = (props: CreateListProps) => {

    const [nameNewList, setNameNewList] = useState("")
    const [checkbox, setCheckbox] = useState({})

    const date = useSelector(state => state.cites)

    const handleSubmit = async (event: React.FormEvent) => {
        try {
            event.preventDefault()
        
            const list: Array<string> = []
            const json: object = {}

            Object.entries(checkbox).map(el => {
                if(el[1]) {
                    list.push(el[0])
                }
            }) 

            json[`${nameNewList}`] = list

            const date = {userName: props.userName, userList: json}
            console.log(date)

            const transport = new UserTransport("http://localhost:3001/api/user/")
            transport.put("/updateList", date)
            .then(el => {
                console.log(el)
            }).catch(err => console.error(err))
        } catch (error) {
            console.error(error)
        }
    }

    const handleToggle = ({ target }) => {
        setCheckbox(s => ({ ...s, [target.id]: !s[target.id] }));
    }


        
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <input type="text" value={nameNewList} onChange={el => setNameNewList(el.target.value)} placeholder="Введите название списка"/>
                
                <div>
                    {
                        date.map((el, index: number) => {
                            return <label key={index} htmlFor={el.city}><input  type="checkbox" onChange={handleToggle} name="select_list" id={el.city} /> {el.city} </label>
                        })
                    }
                </div>
                
                <input type="submit" value="Создать" />
            </form>
        </div>
    )
}

export default CreateList