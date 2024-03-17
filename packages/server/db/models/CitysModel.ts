import { Schema, model } from "mongoose";

interface ICitysModel {
    city: string
}

const CitysModel = new Schema<ICitysModel>({
    city: {type: String, required: true}
})

export default model("Citys", CitysModel)