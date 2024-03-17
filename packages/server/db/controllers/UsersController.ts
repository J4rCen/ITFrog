import UserModel from "../models/UserModel"

class UserController {
    private User = UserModel

    getUserList = async (UserName: String) => {
        try {
            return this.User.find({"userName": UserName})
        } catch (error) {
            console.error(error)
        }
    }

    addNewUser = async (UserName: String) => {
        try {
            console.log(UserName)
            new this.User({userName: UserName}).save()
        } catch (error) {
            console.error(error)
        }
    }

    updateOneUserList = async (UserName: String, UserList: Object) => {
        try {
            this.User.findOneAndUpdate({userName: UserName},  {$push: {userList: UserList}}).then(el => console.log(el))
        } catch (error) {
            console.error(error)
        }
    }
}

export default new UserController()