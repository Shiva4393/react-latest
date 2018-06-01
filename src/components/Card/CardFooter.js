import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from '@material-ui/core/styles';

import cardFooterStyle from '../../assets/jss/components/cardFooterStyle';

function CardFooter({ ...props }) {
    const { classes, className, children, ...rest } = props;
    const cardFooterClasses = classNames({
        [classes.cardFooter]: true,
        [className]: className !== undefined
    })
    return (
        <div className={cardFooterClasses} {...rest}>
            {children}
        </div>
    )
}

CardFooter.prototype = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default withStyles(cardFooterStyle)(CardFooter);