
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 20,
        height: 20,
        color :theme.palette.text.primary
    }
}));

const SecheduleIcon = ({ className, viewBox, color, ...rest }) => {

    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 19 18"} {...rest} className={clsx(classes.root, className)}>
            <g id="Icons">
                <g id="Icons" transform="translate(-707.000000, -319.000000)" >
                    <g id="Group-17-2" transform="translate(707.000000, 319.000000)">
                        <g id="calendar-page-empty" transform="translate(0.500000, 0.000000)">
                            <path fill={color} d="M17.2056623,3.10873908 C16.938089,2.84086948 16.6206304,2.70691617 16.2541012,2.70691617 L14.9008283,2.70691617 L14.9008283,1.69180409 C14.9008283,1.2266524 14.7350254,0.828347753 14.403753,0.497038279 C14.0722954,0.165728806 13.6742129,0 13.208839,0 L11.1476798,0 C10.6823429,0 10.2841123,0.165728806 9.95280286,0.497075314 C9.62138229,0.828347753 9.45572755,1.22668944 9.45572755,1.69184112 L9.45572755,2.7069532 L8.16488034,2.7069532 L8.16488034,1.69184112 C8.16488034,1.22668944 7.99915153,0.828384787 7.66780503,0.497075314 C7.33653259,0.165728806 6.93826497,0 6.47292811,0 L4.41165776,0 C3.946432,0 3.54812735,0.165728806 3.21678084,0.497075314 C2.88550841,0.828347753 2.71974257,1.22668944 2.71974257,1.69184112 L2.71974257,2.7069532 L1.36643262,2.7069532 C0.999792356,2.7069532 0.682630012,2.84090652 0.414760414,3.10877612 C0.146890816,3.37660868 0.0129375,3.69391916 0.0129375,4.06044832 L0.0129375,16.6466901 C0.0129375,17.01296 0.146890816,17.3301964 0.414760414,17.5982141 C0.682592977,17.8660096 0.999755322,18 1.36643262,18 L16.253842,18 C16.6203711,18 16.9378668,17.8660467 17.2054031,17.5982141 C17.4733097,17.3303075 17.6073,17.0129229 17.6073,16.6466901 L17.6073,4.06041129 C17.6073,3.69377102 17.4734208,3.37660868 17.2056623,3.10873908 Z M2.31451249,14.7503451 L2.31451249,6.76721635 L15.3057621,6.76721635 L15.3057621,14.7503451 L2.31451249,14.7503451 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
};

export default SecheduleIcon;


