import React from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';
import BottomNav from '../../magento/venia-ui/lib/components/BottomNav/bottomNav'
import Home from '../../magento/venia-ui/lib/components/Home';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import Footer from '../Footer';
import Header from '../../magento/venia-ui/lib/components/Header';
//import Header from '@magento/venia-ui/lib/components/Header';
import defaultClasses from './main.css';

const Main = props => {
    const { children, isMasked } = props;
    console.log('main component children >>', props)
    const classes = mergeClasses(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    const pageClass = isMasked ? classes.page_masked : classes.page;
    const headingClass = isMasked ? classes.heading : classes.heading;

    useScrollLock(isMasked);

    return (
        <main className={rootClass}>
            <Header />
            <BottomNav />
            {/* <div className={headingClass}>Surmawala Pwa</div> */}
            <div className={pageClass}>{children}</div>
            {/* <div className={pageClass}><Home/></div> */}
            <Footer />
        </main>
    );
};

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};
