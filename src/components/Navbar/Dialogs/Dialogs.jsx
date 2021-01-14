import React from "react";
import s from './Dialogs.module.css'
import Message from "./Messages/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/FormControls";
import {maxLengthCreator, requireField} from "../../../utils/validators/Validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message sms={m.sms} key={m.id}/>)



    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.sendMessage}>
                <NewMessageInputReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10);

const NewMessageInputForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} validate={[requireField, maxLength10]} placeholder={"enter your message"}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const NewMessageInputReduxForm = reduxForm({form:'NewMessageInputForm'})(NewMessageInputForm);

export default Dialogs;