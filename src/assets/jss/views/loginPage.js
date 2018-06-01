import { container } from '../recon-react';

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
    /*hrText: {
        lineHeight: "1em",
        position: "relative",
        outline: 0,
        border: 0,
        color: "black",
        textAlign: "center",
        height: "1.5em",
        opacity: .5,
        '&:after': {
            content: "attr(data-content)",
            position: "relative",
            display: "inline-block",
            // color: "black",
            padding: "0 .5em",
            lineHeight: "1.5em",
            color: "#818078",
            backgroundColor: "#fcfcfa"
        },
        '&:before': {
            content: "",
            // background: "linear-gradient(to right, transparent, #818078, transparent)",
            position: "absolute",
            left: 0,
            top: "50%",
            width: "100%",
            height: "1px"
        },
    },*/
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
        backgroundColor: "#fcfcfa",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "0 auto",
        width: "30px",
        textAlign: "center",
        top: "-9px"
    }
})


export default loginPageStyle;