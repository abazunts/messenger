import {instance} from "./instance"


interface IMessages {

}



const dialogsAPI = {
    async getDialogs() {
        let data: any = await instance.get('/dialogs')
        return data.data
    },

    async startDialogs(userId: number) {
        await instance.put(`/dialogs/${userId}`)
    },

    async getMessages(userId: number) {
        let messages: IMessages[] = await instance.get(`/dialogs/${userId}/messages`)
        debugger
        return messages
    },

    async sendMessage(userId: number, body: string) {
        await instance.post(`/dialogs/${userId}/messages`, {body})
    },
}

export default dialogsAPI