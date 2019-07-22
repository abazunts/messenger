import {IItems} from '../../dal/entities';
import usersAPI from "../../dal/usersAPI";
import {statuses} from "../../dal/statuses";


const SET_FIND_USERS = 'MESSANGER/USERSREDUCER/SET_FIND_USERS'
const SET_STATUS = 'MESSANGER/USERSREDUCER/SET_STATUS';
const SET_TOTAL_COUNT = 'MESSANGER/USERSREDUCER/SET_TOTAL_COUNT';
const SET_PAGE_NUMBER = 'MESSANGER/USERSREDUCER/SET_PAGE_NUMBER';

interface IAction {
    type: string
    items: any
    status: string
    totalCount: string
    pageNumber: number
}



const initState = {
    items: [{
        name: 'Artem Bazunts',
        id: 1,
        uniqueUrlName: null,
        photos: {
            small: '',
            large: '',
        },
        status: '',
        followed: false
    }],

    pageNumber: 1,
    status: statuses.NOT_INITIALIZED,
    pageSize: 20,
    totalCount: '',
    currentPage: 1,
}

const usersReducer = (state = initState, action: IAction) => {
    switch (action.type) {
        case SET_FIND_USERS:
            return {...state, items: action.items}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount,};
        case SET_PAGE_NUMBER:
            return {...state, pageNumber: action.pageNumber, currentPage: action.pageNumber,};
        default:
            return {...state}
    }
}

const setUsersFind = (items: IItems[]) => ({type: SET_FIND_USERS, items})
export const setTotalCount = (totalCount: string) => ({type: SET_TOTAL_COUNT, totalCount})
export const setStatus = (status: string) => ({type: SET_STATUS, status})
export const setPageNumber = (pageNumber: number) => ({type: SET_PAGE_NUMBER, pageNumber})


export const getUsersFind = (userName: string) => async (dispatch: Function) => {
        let items: IItems[] = await usersAPI.getUsersFind(userName)
        dispatch(setUsersFind(items))
}

export const getUsers = () => async (dispatch: Function, getState: Function) => {
    let state = getState().users
    dispatch(setStatus(statuses.IN_PROGRESS))
    let response = await usersAPI.getUsers(state.pageSize, state.pageNumber)
    dispatch(setUsersFind(response.items));
    dispatch(setTotalCount(response.totalCount))
    dispatch(setStatus(statuses.SUCCESS))
};

export default usersReducer