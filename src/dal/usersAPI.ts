import {instance} from "./instance";



const usersAPI = {
    async getUsersFind(userName: string) {
        let data = await instance.get(`/users?term=${userName}`)
        return data.data.items
    },

   async getUsers(pageSize: number, pageNumber: number) {
        let response = await instance.get(`/users?page=${pageNumber}&count=${pageSize}`)
            return response.data
    },
}

export default usersAPI