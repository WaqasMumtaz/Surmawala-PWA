import React, {Component} from "react";

import defaultClasses from './bottomNav.css';
import { mergeClasses } from '../../classify';
import logo from '../Logo/surmawala-icon.svg';
// import { Link, resourceUrl } from '@magento/venia-drivers';
import {Tabs, Tab} from '@material-ui/core';
import { withRouter , Link} from "react-router-dom";
//import TabScreens from './tabs';






const BottomNav =(props)=> {
    console.log('props value >>>', props)
    const classes = mergeClasses(defaultClasses, props.classes);
    const className = props.global ? classes.global : classes.root;
    const { children } = props
    console.log('children >>>', children)
    
    const routeFunction = (value)=>{
        //console.log('props history >>',props.history.push(value)); 
         console.log('rout value >>', value)
    }

    return (
        <div className={classes.mainDivNav}>
           <span className={classes.spanColor}>Hello To The World</span>
        </div>
    );

};

export default BottomNav;
