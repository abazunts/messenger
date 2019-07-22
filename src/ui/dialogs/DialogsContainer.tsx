import React from 'react'
import Dialogs from './Dialogs';
import {getUsers, getUsersFind} from "../../redux/usersReducer";
import {connect} from "react-redux";
import {getDialogs, setActiveDialog} from "../../redux/dialogsReducer";

interface IProps {
    items: string
    getUsersFind: Function
    getUsers: Function
    dialogs: any
    setActiveDialog: Function
    getDialogs: Function
}

interface IState {
    inputValue: string
    modalOpen: boolean

}


class DialogsContainer extends React.Component<IProps, IState> {

    state = {
        inputValue: '',
        modalOpen: false

    }

    interval: any = null

    componentDidMount(): void {
        this.props.getDialogs()
    }


    getUsersFind = (userName: string) => {
        this.interval = setTimeout(()=> {
            this.props.getUsersFind(userName)
        }, 1000)

    }


    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    onChangeText = async (inputText: string) => {
        await this.setState({inputValue: inputText})
        clearInterval(this.interval)
        if (this.state.inputValue) {
            this.getUsersFind(this.state.inputValue)
        } else this.props.getUsers()
    }

    render() {
        return <Dialogs {...this.props}
                        onChangeText={this.onChangeText}
                        getUsersFind={this.getUsersFind}
                        inputValue={this.state.inputValue}
                        modalOpen={this.state.modalOpen}
                        handleOpen={this.handleOpen}
                        handleClose={this.handleClose}
        />
    }
}

let mapStateToProps = (state: any) => {
    return {
        items: state.users.items,
        dialogs: state.dialogs.dialogs
    }
}

export default connect(mapStateToProps, {getUsersFind, getUsers, setActiveDialog, getDialogs})(DialogsContainer)