import React from "react";
import styles from "./FormControls.module.css"
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error},children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input} {...restProps} /></FormControl>
    )
}

export const createField = (component, validate, placeholder, name, props = {}, text = "") => {
    return <div>
        <Field component={component} validate={validate}
               placeholder={placeholder} name={name}
               {...props}/>{text}
    </div>
}