import BaseTransport from "./base.transport";

interface dataProps {
    userName: string,
    userList?: object
}

class UserTransport extends BaseTransport {
    constructor(URLRequest: string, user: string = '') {
        super(URLRequest + user)
    }

    userGet = async () => {
        return await this.get("")
        .then(user => {
            return user
        })
        .catch(err => {
            console.error(err)
        })
    }

    userAdd = async (date: dataProps) => {
        return this.post("/addUser", date)
        .then(res => alert(res.des))
        .catch(err => alert(err.response.data))
    }

    userListUpdate = async (date: dataProps) => {
        return this.put("/updateList", date)
        .then(res => alert(res.des))
        .catch(err => alert(err.response.data))
    }
}

export default UserTransport