import { Schema, model } from "mongoose";

interface IUserModel {
    userName: string,
    userList: [object]
}

const UserModel = new Schema<IUserModel>({
    userName: {type: String, required: true},
    userList: [{type: Object}]
})

export default model("Users", UserModel)