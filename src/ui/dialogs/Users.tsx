import React from "react"
import s from "./users.module.css"
import userPhoto from '../../assets/img/userphoto.png'
import Preloader from '../Preloader/Preloader';
import {statuses} from "../../dal/statuses";
import {IUsers} from "../../dal/entities";


let Users = (props: any) => {


    let {
        getUsers, status, pageSize, totalCount, setDialogs,
        currentPage, setPageNumber, users, onChangeText, inputValue
    } = props

    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let onClickPageNumber = (p: React.MouseEvent) => {
        setPageNumber(p);
        getUsers()
    };

    let onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeText(e.currentTarget.value)
    }
    let onClickUser = (e: any) => {
            if (e.target.dataset.name === 'user') {
                let id = e.target.dataset.id
                let userName = e.target.dataset.username
                let photos = e.target.dataset.photos
                debugger
                props.handleClose()
                props.setDialogs(id, userName, photos)
            }
    }

    return (
        <div className={s.wrapper}>
            <div className={s.users}>
                <div className={s.title}>Select user for star dialog</div>
                <input type='text' value={inputValue} onChange={onChange} placeholder='search user'/>
                {status === statuses.IN_PROGRESS && <div className={s.preloader}><Preloader/></div>}
                {status === statuses.SUCCESS &&
                <div className={s.usersBlock} onClick={onClickUser}>

                    {users.map((u: IUsers) => <div data-name={'user'} data-id={u.id} data-userName={u.name} data-photos={u.photos.small} key={u.id} className={s.user}>
                        <img data-name={'user'} data-id={u.id} data-userName={u.name} data-photos={u.photos.small} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        <span data-name={'user'} data-id={u.id} data-userName={u.name} data-photos={u.photos.small} className={s.fullName}>{u.name}</span>
                    </div>)
                    }
                </div>}
            </div>
            {status === statuses.SUCCESS &&
            <div className={s.navigation}>
                <div className={s.navigationPage}>
                    {pages.map((p: any) => <span onClick={() => onClickPageNumber(p)}
                                                 className={currentPage === p ? s.paginationActive : s.pagination}>{p}</span>)}
                </div>
            </div>}
        </div>
    )
}

export default Users;