import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {getUsers, setPageNumber} from '../../redux/usersReducer';
import {
    getCurrentPageSelector,
    getPageNumberSelector,
    getPageSizeSelector,
    getStatusSelector,
    getTotalCountSelector,
    getUserSelector
} from "../../redux/usersReducer/userSelector";
import {setDialogs} from "../../redux/dialogsReducer";


interface IProps {
    getUsers: Function
    pageNumber: number
    users: any
    status: string
    pageSize: number
    totalCount: number
    currentPage: number
    setDialogs: Function
    setActiveDialog: Function
    dialogs: any
}
interface IState {

}

 class UsersContainer extends React.Component<IProps, IState> {
     componentDidMount() {
         this.props.getUsers(this.props.pageNumber)
     }

     render() {
         return <Users { ...this.props}/>
     }
 }

let mapStateToProps = (state: any) => {
    return ({
        users: getUserSelector(state),
        pageNumber: getPageNumberSelector(state),
        status: getStatusSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
    })
};


export default connect(mapStateToProps, {getUsers,setPageNumber, setDialogs})(UsersContainer);