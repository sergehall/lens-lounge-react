import React from "react";
import styles from "./dialogs.module.css";
import { DialogsContainer, DialogTitle, DialogContent } from "./dialogs.styles";
import {dialogsData} from "./dialogs-data-mock/dialogs-data-mock";

interface DialogData {
    id: string;
    title: string;
    message: string;
}

interface DialogsProps {
    dialogs: DialogData[];
    className?: string;
}

const Dialogs: React.FC<DialogsProps> = ({ dialogs = dialogsData, className = styles.dialogsContainer }) => {
    return (
        <DialogsContainer className={`${styles.dialogsContainer} ${className}`}>
            {dialogs.map((dialog) => (
                <div key={dialog.id} className={styles.dialog}>
                    <DialogTitle>{dialog.title}</DialogTitle>
                    <DialogContent>{dialog.message}</DialogContent>
                </div>
            ))}
        </DialogsContainer>
    );
};

export default Dialogs;
