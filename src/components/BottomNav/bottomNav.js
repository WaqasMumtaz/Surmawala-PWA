import React from 'react';

import defaultClasses from './bottomNav.css';
import { mergeClasses } from '../../classify';
import logo from '../Logo/surmawala-icon.svg';

const BottomNav = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;

    return (
        <div className={classes.mainDivNav}>
            <div className={classes.childContainer}>
                <button >
                    <span>Home</span>
                </button>
                <button>
                    <span>Details</span>
                </button>
                <button>
                    <span>Categories</span>
                </button>
                <button>
                    <span>Cart</span>
                </button>
                <button>
                    <span>More Options</span>
                </button>
            </div>


        </div>

    );
};

export default BottomNav;
