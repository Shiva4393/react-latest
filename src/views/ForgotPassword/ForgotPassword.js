import React from 'react';
import classNames from "classnames";
import { Link } from 'react-router-dom';
/* material-ui components */
import { withStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Icon } from '@material-ui/core';
import { FormControl, InputLabel, Input } from '@material-ui/core';
/* Core Components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

import forgotPasswordStyle from '../../assets/jss/views/forgotPasswordPage';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardAnimaton: "cardHidden",
            emailId: "",
            submit: false,
            progress: false
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ cardAnimaton: "" });
        }, 700);
    }

    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        })
    }

    onSubmit = () => {
        this.setState(
            {submit: true, progress: true},
            () => {
                this.timer = setTimeout(() => {
                    this.setState({submit: false, progress: false});
                }, 2000);
            }
        )
    }

    render() {
        const { classes } = this.props;
        const LinkClasses = classNames({
            [classes.a]: true,
            [classes.whiteFont]: true
        })
        return (
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[this.state.cardAnimaton]}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}></CardHeader>
                                <CardBody>
                                    <FormControl className={classes.formControl} fullWidth={true}>
                                        <InputLabel htmlFor="email">Email Id</InputLabel>
                                        <Input id="email" value={this.state.emailId} onChange={this.handleChange('emailId')} />
                                    </FormControl>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <div className={classes.wrapper}>
                                        <Button variant="raised" color="primary" fullWidth={true} onClick={this.onSubmit}
                                            disabled={this.state.submit && this.state.progress}>
                                            Reset Password Link 
                                        </Button>
                                        {this.state.submit && this.state.progress
                                            ? (<CircularProgress color="secondary" size={24} className={classes.buttonProgress} />)
                                            : null
                                        }
                                    </div>
                                </CardFooter>
                            </form>
                        </Card>
                        {!this.state.cardAnimaton
                            ? (<div className={classes.back}>
                                    <Link to="/" className={LinkClasses}>
                                        <Icon className={classes.leftIcon}>back</Icon><span>Back to Login</span>
                                    </Link>
                                </div>)
                            : null
                        }
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(forgotPasswordStyle)(ForgotPassword);