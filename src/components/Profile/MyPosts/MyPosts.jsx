import Post from "./Post/Post.jsx";
import React from "react";
import s from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../../utils/validators/Validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPosts = React.memo(props => {
    console.log ("RENDER")
    //reverse works only with a copy of array
    let postsElements = [...props.posts].reverse().map(p => <Post id={p.id} comment={p.comment} likesCount={p.likesCount}
                                                   commentsCount={p.commentsCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.content}>
            <NewPostReduxForm onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>

        </div>
    );
})

const maxLength30 = maxLengthCreator(30);

const NewPostInputForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.textarea}>
                <Field component={Textarea} name={"newPostText"} placeholder={"Insert your text"} validate={[requireField, maxLength30]}/>
            </div>
            <div className={s.button}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'NewPostInputForm'})(NewPostInputForm);


export default MyPosts;