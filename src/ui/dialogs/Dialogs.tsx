import React from 'react'
import s from "./users.module.css"
import Modal from "react-modal";
import UsersContainer from "./UsersContainer";
import userPhoto from "../../assets/img/userphoto.png";


interface IProps {
    onChangeText: Function
    getUsersFind: Function
    inputValue: string
    modalOpen: boolean
    handleOpen: (e: React.MouseEvent) => void
    handleClose: (e: React.MouseEvent) => void
    getUsers: Function
    items: any
    dialogs: any
    setActiveDialog: Function
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column'
    }
};


let Dialogs = (props: IProps) => {

    let onActiveDialog = (e: any) => {
        props.setActiveDialog(e.target.dataset.id)
    }

    return <div className={s.wrapperDialog}>
        <span className={s.dialogsTitle}>Dialogs</span>
        <div>
            <button className={s.buttonAddDialog} onClick={props.handleOpen}>Add Dialog</button>
            <Modal
                isOpen={props.modalOpen}
                onRequestClose={props.handleClose}
                contentLabel="Add Dialogs"
                style={customStyles}
            >
                <UsersContainer {...props}/>
                <button className={s.buttonCloseModal} onClick={props.handleClose}>Close</button>

            </Modal>
            {props.dialogs.map((d: any) => <div data-id={d.id} onClick={onActiveDialog} className={s.user}><img data-id={d.id}  src={d.photos != null ? d.photos : userPhoto}/><div className={s.nameUser}>{d.userName}</div></div>)}
        </div>

    </div>
}

export default Dialogs