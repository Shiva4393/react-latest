import { container, formControl } from '../recon-react';

const loginPageStyle = theme => ({
    container: {
        ...container,
        zIndex: 2,
        position: 'relative',
        padding: '20vh',
        color: '#FFFFFF'
    },
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -60px, 0)"
    },

    form: {
        margin: "0"
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
    },
    right: {
        float: "right"
    },
    forgotBlock: {
        marginTop: 20
    },
    ssoButton:{
        background: '#fff',
        color: '#6e6e6e'
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    hrBorder: {
        width: "100%",
        height: '1px',
        background: "linear-gradient(to right, transparent, #818078, transparent)",
        position: "relative",
        margin: "30px auto"
    },
    hrText: {
        padding: "0 .5em",
        lineHeight: "1.5em",
        color: "#818078",
        backgroundColor: "#fff",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "30px",
        textAlign: "center",
        top: "-9px"
    },

    wrapper: {
        margin: theme.spacing.unit,
        position: "relative"
    },
    formControl: {
        ...formControl
    },
    formControlLabel: {
        marginLeft: 0
    },
    checkboxSize: {
        width: 21,
        height: 21,
        marginRight: 10
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
})


export default loginPageStyle;