// ##############################
// // // CustomCheckbox styles
// #############################

import green from '@material-ui/core/colors/green';

const customCheckbox = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
    size: {
        width: 21,
        height: 21,
        marginRight: 10
    },
    sizeIcon: {
        fontSize: 20,
    },
    formControlLabel: {
        // margin: "11px 0 0 0",
        marginLeft: 0
    }
}

export default customCheckbox;