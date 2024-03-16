/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig} from "axios"


export abstract class BaseTransport {
    private client: AxiosInstance;

    protected constructor(baseURL: string) {
        this.client = axios.create({
            baseURL
        })
    }

    async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get(endpoint, {
          ...config
        })
        return response.data
    }

    async post<T>(
        endpoint: string,
        data?: any,
        config?: AxiosRequestConfig
      ): Promise<T> {
        const response: AxiosResponse<T> = await this.client.post(endpoint, data, {
          ...config
        })
        return response.data
    }
    
    async put<T>(
        endpoint: string,
        data: any,
        config?: AxiosRequestConfig
      ): Promise<T> {
        const response: AxiosResponse<T> = await this.client.put(endpoint, data, {
          ...config
        })
        return response.data
    }
    
    async delete<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
        const response: AxiosResponse<T> = await this.client.delete(
          endpoint,
          config
        )
        return response.data
    }
    
}

export default BaseTransport