import {instance} from "./instance";

const profileAPI = {
    async getProfile(userId: number) {
        let data: any = await instance.get(`/profile/${userId}`)
        return data.data
    },
}

export default profileAPI