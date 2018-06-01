import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import cardBodyStyle from '../../assets/jss/components/cardBodyStyle';

function CardBody({ ...props }) {
    const { classes, className, children, ...rest } = props;
    const cardBodyClasses = classNames({
        [classes.cardBody]: true,
        [className]: className !== undefined
    })
    return (
        <div className={cardBodyClasses} {...rest}>
            {children}
        </div>
    )
}

CardBody.prototype = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default withStyles(cardBodyStyle)(CardBody);