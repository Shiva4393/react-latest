import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
/* material-ui components */
import { withStyles } from '@material-ui/core/styles';

/* core components */
import cardHeaderStyle from '../../assets/jss/components/cardHeaderStyle';

function CardHeader({ ...props }) {
    const { classes, className, children, color, plainCard, ...rest } = props;
    const cardHeaderClasses = classNames({
        [classes.cardHeader]: true,
        [classes[color + "CardHeader"]]: color,
        [classes.cardHeaderPlain]: plainCard,
        [className]: className !== undefined
    })
    return (
        <div className={cardHeaderClasses} {...rest}>
            {children}
        </div>
    );
}

CardHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
    plainCard: PropTypes.bool
};

export default withStyles(cardHeaderStyle)(CardHeader);