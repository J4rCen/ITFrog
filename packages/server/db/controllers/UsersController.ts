import UserModel from "../models/UserModel"

class UserController {
    private User = UserModel

    getUserList = async (UserName: String) => {
        try {
            return await this.User.find({"userName": UserName})
        } catch (error) {
            console.error(error)
        }
    }

    addNewUser = async (UserName: String) => {
        try {
            const find = await this.User.findOne({userName: UserName}).then(status => status)
            if(find === null) {
                new this.User({userName: UserName, userList: []}).save()
                return {status: "ok", des: "Пользователь создан"}
            } else {
                return {status: "err", des: "Пользователь уже есть"}
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    updateOneUserList = async (UserName: String, UserList: Object) => {
        try {
            this.User.findOneAndUpdate({userName: UserName},  {$push: {userList: UserList}}).then(status => status)
            return {status: "ok", des: "Список создан"}
        } catch (error) {
            console.error(error)
            return {status: "err", des: "Произошла ошибка"}
        }
    }
}

export default new UserController()