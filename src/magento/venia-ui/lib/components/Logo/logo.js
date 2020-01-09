import React from 'react';
import PropTypes from 'prop-types';
import { mergeClasses } from '../../classify';
import logo from './surmawala-icon.svg';

const Logo = props => {
    const { height } = props;
    const classes = mergeClasses({}, props.classes);

    return (
        <img
            className={classes.logo}
            src={logo}
            height={height}
            alt="Surmawala"
            title="Surmawala"
        />
    );
};

Logo.propTypes = {
    classes: PropTypes.shape({
        logo: PropTypes.string
    }),
    height: PropTypes.number
};

Logo.defaultProps = {
    height: 24
};

export default Logo;
