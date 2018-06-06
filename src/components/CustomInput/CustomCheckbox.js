import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles, FormControlLabel, Checkbox } from "@material-ui/core";

import customCheckbox from '../../assets/jss/components/customCheckboxStyle';

function CustomCheckbox({ ...props }) {
    const { 
        classes,
        formControlProps,
        checkProps
    } = props;
    const formControlClasses = classNames({
        [classes.formControlLabel]: true,
        [formControlProps.className]: formControlProps.className !== undefined
    });
    return (
        <FormControlLabel {...formControlProps}
            className={formControlClasses}
            control={
                <Checkbox
                    className={classes.size}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                    }}
                    {...checkProps}
                    onChange={props.changeFiled}
                />
            }
        />
    )
}

CustomCheckbox.prototype = {
    classes: PropTypes.object.isRequired,
    formControlProps: PropTypes.object,
    checkProps: PropTypes.object
}

export default withStyles(customCheckbox)(CustomCheckbox);