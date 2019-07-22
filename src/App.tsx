import React from 'react'
import styles from './app.module.css'
import Messages from './ui/messages/Messages';
import DialogsContainer from "./ui/dialogs/DialogsContainer";
import Header from "./ui/header/Header";

const App: React.FC = () => {
    return (
        <>
            <div className={styles.header}>
                <Header/>
            </div>
            <div className={styles.appWrapper}>
                <div className={styles.dialogs}>
                    <DialogsContainer/>
                </div>
                <div className={styles.messages}>
                    <Messages/>
                </div>
            </div>
        </>
    )
}

export default App;
