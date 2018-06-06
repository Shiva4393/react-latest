import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";

import { withStyles } from '@material-ui/core/styles';
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText
} from '@material-ui/core';
// import { Clear, Check } from "@material-ui/icons";

import customInputStyle from '../../assets/jss/components/customInputStyle';


function CustomInput({ ...props }) {
    const {
        classes,
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        msg,
        white,
        inputRootCustomClasses,
        success
    } = props;

    const labelClasses = classNames({
        [" " + classes.labelRootError]: error,
        [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined,
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white
    });
    const formControlClasses = classNames({
        [classes.formControl]: true,
        [classes.formControlLabel]: labelText !== undefined,
        [formControlProps.className]: formControlProps.className !== undefined
    });

    return (
        <FormControl {...formControlProps} className={formControlClasses} error={error} aria-describedby="name-error-text">
            {labelText !== undefined ? (
                <InputLabel className={classes.labelRoot + " " + labelClasses} htmlFor={id} {...labelProps}>
                    {labelText}
                </InputLabel>
            ) : null}
            <Input classes={{
                input: inputClasses,
                root: marginTop,
                disabled: classes.disabled,
                underline: underlineClasses
            }} id={id} {...inputProps} 
            onChange={props.changeFiled}/>
            {error ? (
                // <Clear className={classes.feedback + " " + classes.labelRootError} />
                <FormHelperText id="name-error-text">{msg}</FormHelperText>
            ) : success ? (
                // <Check className={classes.feedback + " " + classes.labelRootSuccess} />
                null
            ) : null}
        </FormControl>
    )
}

CustomInput.propTypes = {
    classes: PropTypes.object.isRequired,
    labelText: PropTypes.node,
    labelProps: PropTypes.object,
    id: PropTypes.string,
    inputProps: PropTypes.object,
    formControlProps: PropTypes.object,
    inputRootCustomClasses: PropTypes.string,
    error: PropTypes.bool,
    success: PropTypes.bool,
    white: PropTypes.bool
};

export default withStyles(customInputStyle)(CustomInput);