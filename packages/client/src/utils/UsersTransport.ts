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
        return await this.post("/addUser", date)
    }

    userListUpdate = async (date: dataProps) => {
        return await this.put("/updateList", date)
    }
}

export default UserTransport