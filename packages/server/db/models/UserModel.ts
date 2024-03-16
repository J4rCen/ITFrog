import { Schema, model } from "mongoose";

interface IUserModel {
    userName: string,
    userList: {
        citesList: [

        ]
    }
}

const UserModel = new Schema<IUserModel>({
    userName: {type: String, required: true},
    userList: {
        citesList: {type: String}
    }
})

export default model("Users", UserModel)