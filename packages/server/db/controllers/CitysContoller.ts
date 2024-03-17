import CitysModel from "../models/CitysModel";

class CitysController {

    private City = CitysModel

    getCity = () => {
        try {
            return this.City.find({}).limit(100)
        } catch (error) {
            console.error(error)
        }
    }

    addCity = async (city: string) => {
        try {
            const find = await this.City.findOne({city: city}).then(status => status)
            if(find === null) {
            new this.City({city: city}).save()
            return {status: "ok", des: "Город успешно добавлен"}
            } else {
                return {status: "err", des: "Данный город уже есть в базе."}
            }
        } catch (error) {
            console.error(error)
        }
    }

    delCity = async (city: string) => {
        try {
            return this.City.deleteOne({city: city}).then(status => {
                if (status.deletedCount !== 0) {
                    return {status: "ok", des: "Город удален"}
                } else {
                    return {status: "err", des: "Города нет в базе."}
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export default new CitysController()