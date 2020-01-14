import React from 'react';

import defaultClasses from './bottomNav.css';
import { mergeClasses } from '../../classify';
import logo from '../Logo/surmawala-icon.svg';

const BottomNav = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;

    return (
        <div className={classes.mainDivNav}>
            {/* {console.log('This is bottom tab navigation page')} */}
            <span>Hello To The World</span>
        </div>
    );
};

export default BottomNav;
