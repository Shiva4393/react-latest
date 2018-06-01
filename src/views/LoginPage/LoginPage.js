import React from "react";

/* material-ui components */
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Icon } from '@material-ui/core';
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
            emailId: "",
            password: "",
            remember: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ cardAnimaton: "" });
        }, 700);
    }

    onSubmit() {
        console.log(this.state)
    }
    
    render(){
        const { classes, ...rest } = this.props;
        return(
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[this.state.cardAnimaton]}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    
                                </CardHeader>
                                <CardBody>
                                    <CustomInput
                                        labelText="Email Id"
                                        id="email"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "text",
                                            /*endAdornment: (
                                                <InputAdornment position="end">
                                                    <People className={classes.inputIconsColor} />
                                                </InputAdornment>
                                            )*/
                                        }}
                                    />

                                    <CustomInput
                                        labelText="Password"
                                        id="pwd"
                                        formControlProps={{
                                            fullWidth: true
                                        }}
                                        inputProps={{
                                            type: "password",
                                            /*endAdornment: (
                                                <InputAdornment position="end">
                                                    <People className={classes.inputIconsColor} />
                                                </InputAdornment>
                                            )*/
                                        }}
                                    />
                                    <div className={classes.forgotBlock}>
                                        <CustomCheckbox
                                            formControlProps={{
                                                label: 'Remeber me'
                                            }}
                                            checkProps={{
                                            }}
                                        />
                                        <Link to='/forgot-password' className={classes.right}>Forgot Password?</Link>
                                    </div>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <Button variant="raised" color="primary" fullWidth={true} onClick={this.onSubmit}>
                                        SIGN IN 
                                    </Button>
                                    {/* <hr className={classes.hrText} data-content="OR" /> */}
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