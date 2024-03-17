import { useEffect, useState } from "react"

interface UserListProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    list: Array<any>
}

const UserList = (props: UserListProps) => {

    const [list, setUserList] = useState({})
    const [viewList, setViewList] = useState('')

    useEffect(() => {
        if(props.list.length !== 0) {
            const map: object = {}

            props.list.map(el => {
                const date = Object.entries(el)
                map[`${date[0][0]}`] = date[0][1]
            })

            setUserList(map)
        }
    }, [props])

    return (
        <div>
            <div>
                {
                    Object.keys(list) !== undefined 
                    ? Object.keys(list).map(el => {
                        return <button onClick={() => setViewList(el)}>Просмотреть список: {el}</button>
                    })
                    : ''
                }
            </div>

            <div>
                <ul>
                    {
                        Object.keys(list) !== undefined && viewList !== ''
                        ? list[`${viewList}`].map((el: string) => {
                            return <li>{el}</li>
                        })
                        : ''
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserList