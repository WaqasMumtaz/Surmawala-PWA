import React from 'react';

import defaultClasses from './bottomNav.css';
import { mergeClasses } from '../../classify';
import logo from '../Logo/surmawala-icon.svg';

const BottomNav = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;

    return (
        <div className={classes.mainDivNav}>
            <h1 className={classes.spanColor}>Hello To The World</h1>
        </div>
    );
};

export default BottomNav;
