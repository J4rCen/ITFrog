import { useState } from "react"
import { citesTransport } from "../../utils/CitesTransport"
import { useSelector } from "react-redux"

interface elProps {
    _id: string,
    city: string
}

const Admin = () => {
    const [inputText, setInputText] = useState('')
    const [actionSelection, setActionSelection] = useState("add")

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        actionSelection === "add" 
        ? citesTransport.citesAdd({city: inputText})
        : citesTransport.citesDel({city: inputText})

        setInputText('')
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const date = useSelector((state: any) => state.cites)

    return(
        <div className="admin_div display_flex_center">
            <form className="admin_div_form display_flex_center" action="" onSubmit={handleSubmit}>
                <input className="input_width" type="text" value={inputText} onChange={el => setInputText(el.target.value)} placeholder="Введите страну"/>
                <select className="input_width" name="action_selection" id="" onChange={select => setActionSelection(select.target.value)}>
                    <option value="add">Добавить</option>
                    <option value="del">Удалить</option>
                </select>
                <input className="input_width" type="submit" value="Отправить" />
            </form>
            <ul className="admin_div_ul">
                {
                    date.map((el: elProps) => <li key={el._id}>{el.city}</li>)
                }
            </ul>
        </div>
    )
}

export default Admin