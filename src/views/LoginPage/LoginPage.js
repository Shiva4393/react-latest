import React from "react";

/* material-ui components */
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Button, Icon, CircularProgress } from '@material-ui/core';
import { FormControl, FormControlLabel, InputLabel, Input, Checkbox } from '@material-ui/core';
/* Core Components */
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

/* jss */
import loginPageStyle from '../../assets/jss/views/loginPage';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cardAnimaton: "cardHidden",
            emailId: "",
            password: "",
            remember: false,
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

    handleChange = prop => event => {
        if(prop === 'remember')
            this.setState({ [prop]: event.target.checked});
        else
            this.setState({ [prop]: event.target.value });
    }

    onSubmit() {
        console.log(this.state)
        this.setState(
            { submit: true, progress: true },
            () => {
                this.timer = setTimeout(() => {
                  this.setState({
                    submit: false,
                    progress: false,
                  });
                }, 2000);
              },
        )
    }
    
    render(){
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card className={classes[this.state.cardAnimaton]}>
                            <form className={classes.form}>
                                <CardHeader className={classes.cardHeader}>
                                    
                                </CardHeader>
                                <CardBody>
                                    <FormControl className={classes.formControl} fullWidth={true}>
                                        <InputLabel htmlFor="email">Email Id</InputLabel>
                                        <Input id="email" value={this.state.emailId} onChange={this.handleChange('emailId')} />
                                    </FormControl>

                                    <FormControl className={classes.formControl} fullWidth={true}>
                                        <InputLabel htmlFor="pwd">Password</InputLabel>
                                        <Input id="pwd" type="password" value={this.state.password} onChange={this.handleChange('password')} />
                                    </FormControl>
                                    <div className={classes.forgotBlock}>
                                        <FormControlLabel className={classes.formControlLabel}
                                            control={
                                                <Checkbox className={classes.checkboxSize} checked={this.state.remember} onChange={this.handleChange('remember')} value="remember" color="primary" />
                                            }
                                            label="Remember me"
                                        />
                                        <Link to='/forgot-password' className={classes.right}>Forgot Password?</Link>
                                    </div>
                                </CardBody>
                                <CardFooter className={classes.cardFooter}>
                                    <div className={classes.wrapper}>
                                        <Button variant="raised" color="primary" fullWidth={true} onClick={this.onSubmit}
                                            disabled={this.state.submit && this.state.progress}>
                                            SIGN IN 
                                        </Button>
                                        {this.state.submit && this.state.progress
                                            ? (<CircularProgress color="secondary" size={24} className={classes.buttonProgress} />)
                                            : null
                                        }
                                    </div>
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