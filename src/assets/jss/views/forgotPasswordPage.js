import { container, primaryColor, formControl } from '../recon-react';

const forgotPasswordStyle = theme => ({
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
    wrapper: {
        margin: theme.spacing.unit,
        position: "relative"
    },
    formControl: {
        ...formControl
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
    back: {
        textAlign: "center"
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    a: {
        color: primaryColor,
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    whiteFont: {
        "&,&:hover,&:focus": {
            color: "#FFFFFF"
        }
    }
})

export default forgotPasswordStyle;