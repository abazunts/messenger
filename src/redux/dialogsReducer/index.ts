import dialogsAPI from "../../dal/dialogsAPI";
import {IDialogs} from "../../dal/entities";
import profileAPI from "../../dal/profileAPI";

const SET_DIALOGS = 'MESSANGER/DIALOGSREDUCER/SET_DIALOGS'
const SET_ACTIVE_DIALOG = 'MESSANGER/DIALOGSREDUCER/SET_ACTIVE_DIALOG'

const initState = {

    dialogs: [
        {
            hasNewMessages: false,
            id: 2,
            lastDialogActivityDate: "2019-07-07T17:50:53.737",
            lastUserActivityDate: "2019-07-09T18:13:13.17",
            userName: "samurai",
        }
    ]
}

let dialogsReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        case SET_DIALOGS:
           return {
               ...state,
               dialogs: action.dialogs
           }
        default:
            return {...state}
    }
}

export const setDialogs = (dialogs: IDialogs[]) => ({type: SET_DIALOGS, dialogs})
export const setActiveDialog = (id: string) => ({type: SET_ACTIVE_DIALOG, id})



export const getDialogs = () => async (dispatch: Function) => {
    let dialogs: IDialogs[] = await dialogsAPI.getDialogs()
        dispatch(setDialogs(dialogs))
}

export default dialogsReducer