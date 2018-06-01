import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
} from "../recon-react";
import headerLogo from '../../images/login_hdr_bg.png';
import Logo from '../../images/logo.png';

const cardHeaderStyle = {
    cardHeader: {
        borderRadius: "3px",
        padding: "1rem 15px",
        border: "0",
        marginBottom: "0",
        backgroundImage: `url(${Logo}), url(${headerLogo})`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center center, left top',
        backgroundSize: "35%, cover",
        height: "60px"
    },
    cardHeaderPlain: {
        marginLeft: "0px",
        marginRight: "0px"
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader
};

export default cardHeaderStyle;
