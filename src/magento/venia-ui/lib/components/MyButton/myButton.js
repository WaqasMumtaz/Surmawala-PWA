import React from 'react';
import { mergeClasses } from '../../classify';
import defaultClasses from './myButton.css';

export const MyButton = (props)=>{
    const {
        children,
        classes: propClasses,
        priority,
        type,
        contentStyle,
        ...restProps
    } = props;
    const classes = mergeClasses(defaultClasses, props.classes);
    //const rootClassName = classes[getRootClassName(priority)];
    // const classes = mergeClasses(defaultClasses, props.classes);


    return (
        <button className={classes.buttonContainer} type={type} >
            <span className={contentStyle}>{props.content}</span>
        </button>
    );
}

export default MyButton;