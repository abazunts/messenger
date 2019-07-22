import React from 'react';
import s from "../Preloader/preloader.module.css";
import loader from '../../assets/gif/ajax-loader.gif'


let Preloader = () => {
    return (
        <div>
            <img className={s.loadGif} src={loader}/>
        </div>
    )
}

export default Preloader;