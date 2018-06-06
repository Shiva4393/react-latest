import React from "react";

import axios from 'axios';

/* material-ui components */
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Icon, CircularProgress } from '@material-ui/core';
/* Core Components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomCheckbox from '../../components/CustomInput/CustomCheckbox';

/* jss */
import loginPageStyle from '../../assets/jss/views/loginPage';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardAnimaton: "cardHidden",
            remember: false,
            loginForm: {
                emailId: {
                    id: "email",
                    formControlProps: {
                        fullWidth: true
                    },
                    labelText: "Email ID",
                    inputProps: {
                        type: "text",
                        value: ''
                    },
                    validation: {
                        required: true,
                        regx: /^\w+(\.\w+)*@[a-zA-Z]+\.[a-zA-Z]{2,6}$/
                    },
                    valid: false,
                    errorMessage: 'Please Enter Email ID'
                },
                password: {
                    id: "password",
                    formControlProps: {
                        fullWidth: true
                    },
                    labelText: "Password",
                    inputProps: {
                        type: "password",
                        value: ''
                    },
                    validation: {
                        required: true,
                        regx: /^.{6,}$/
                    },
                    valid: false,
                    errorMessage: 'Please Enter Password'
                }
            },
            submit: false,
            progress: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ cardAnimaton: "" });
        }, 700);
    }

    checkValidity(value, identifier){
        let isValid = true, msg = '';

        if (identifier.validation.required) {
            isValid = value.trim() !== '' && isValid;
            if (!isValid) msg = ("Please Enter " + identifier.labelText);
        }

        if (identifier.validation.regx) {
            isValid = identifier.validation.regx.test(String(value).toLowerCase()) && isValid;
            if (!isValid) msg = ("Please Enter Valid " + identifier.labelText);
        }

        return {
            isValid: isValid,
            msg: msg
        };
    }

    handleChange(ev, prop){
        const updatedLoginForm = {
            ...this.state.loginForm
        }
        const updatedFormElement = {
            ...updatedLoginForm[prop]
        }
        const updatedFormProps = {
            ...updatedFormElement['inputProps']
        }
        updatedFormProps.value = ev.target.value;
        let status = this.checkValidity(updatedFormProps.value, updatedFormElement);
        updatedFormElement.valid = status.isValid;
        updatedFormElement.errorMessage = status.msg;
        updatedFormElement['inputProps'] = updatedFormProps;
        updatedLoginForm[prop] = updatedFormElement;
        this.setState({ loginForm: updatedLoginForm});
    }

    handleCheckbox = ev => {
        this.setState({
            remember: ev.target.checked
        })
    }

    onSubmit() {
        let formData = {}, isValid = true;
        for(var formIdentifier in this.state.loginForm){
            formData[formIdentifier] = this.state.loginForm[formIdentifier]['inputProps'].value;
            isValid = this.state.loginForm[formIdentifier].valid && isValid;
        }
        formData['remember'] = this.state.remember;
        this.setState({ submit: true });
        if(isValid){
            this.setState({ submit: true, progress: true });

            this.checkLogin(formData)
            .then(response =>{
                console.log(response);
                this.timer = setTimeout(() => {
                    this.setState({ submit: false, progress: false });
                }, 2000);
            })
        }
    }

    checkLogin(params) {
        return axios.post('getLogin', params)
    }
    
    render(){
        const { classes } = this.props;
        let formElementsArray = [];
        for(var key in this.state.loginForm){
            formElementsArray.push({
                id: key,
                config: this.state.loginForm[key]
            })
        }
        return(
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[this.state.cardAnimaton]}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}></CardHeader>
                                <CardBody>
                                    {formElementsArray.map(formElement => (
                                        <CustomInput
                                            error={!formElement.config.valid && this.state.submit}
                                            msg={formElement.config.errorMessage}
                                            key={formElement.id}
                                            labelText={formElement.config.labelText}
                                            id={formElement.config.id}
                                            formControlProps={{
                                                ...formElement.config.formControlProps
                                            }}
                                            inputProps={{
                                                ...formElement.config.inputProps
                                                /*endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                )*/
                                            }}
                                            changeFiled={(ev) => this.handleChange(ev, formElement.id)}
                                        />
                                    ))}

                                    <div className={classes.forgotBlock}>
                                        <CustomCheckbox
                                            formControlProps={{
                                                label: 'Remeber me'
                                            }}
                                            checkProps={{
                                                checked: this.state.remember
                                            }}
                                            changeFiled={this.handleCheckbox}
                                        />
                                        <Link to='/forgot-password' className={classes.right}>Forgot Password?</Link>
                                    </div>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <div className={classes.wrapper}>
                                        <Button variant="raised" color="primary" fullWidth={true}
                                            disabled={this.state.submit && this.state.progress} onClick={this.onSubmit}>
                                            SIGN IN 
                                        </Button>
                                        {this.state.submit && this.state.progress
                                            ? (<CircularProgress color="secondary" size={24} className={classes.buttonProgress} />)
                                            : null
                                        }
                                    </div>
                                    <div className={classes.hrBorder}>
                                        <span className={classes.hrText}>OR</span>
                                    </div>
                                    <Button variant="raised" fullWidth={true} className={classes.ssoButton}>
                                        <Icon className={classes.leftIcon}>send</Icon>
                                        Sign in with Google
                                    </Button>
                                </CardFooter>
                                <div />
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(loginPageStyle)(LoginPage);