import BaseTransport from "./base.transport";

const URLRequest = "http://localhost:3001/api/citys/"

interface dataProps {
    city: string
}


class CitesTransport extends BaseTransport {
    constructor(URLRequest: string) {
        super(URLRequest)
    }

    citesGet = async () => {
        return this.get("/get")
        .then(cites => {
            return cites
        })
        .catch(err => {
            console.error(err)
        })
    }

    citesAdd = async (data: dataProps) => {
        try {
            return this.post("/add", data)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((res: any) => alert(res.des))
            .catch(err => alert(err.response.data))
        } catch (error) {
            console.error(error)
        }
    }

    citesDel = async (data: dataProps) => {
        return this.post("/del", data)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((res: any) => alert(res.des))
        .catch(err => alert(err.response.data))
    }
    
}

export const citesTransport = new CitesTransport(URLRequest)