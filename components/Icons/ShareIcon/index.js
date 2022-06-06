
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        width: 17,
        height: 20,
        color: theme.palette.text.primary
    }
}));

const ShareIcon = ({ className, viewBox, color, ...rest }) => {
    const classes = useStyles();
    return (
        <SvgIcon viewBox={viewBox || "0 0 15 10"} {...rest} className={clsx(classes.root, className)}>
            <g id="Icons">
                <g id="share_link_option" transform="translate(-320.000000, -76.000000)">
                    <g id="Group-14-Copy-28" transform="translate(40.000000, 58.000000)">
                        <g id="share" transform="translate(274.000000, 12.000000)">
                            <g id="share_icon" transform="translate(6.000000, 6.000000)">
                                <path d="M12.7768341,3.83684135 L9.08716947,0.147252404 C8.995875,0.0559579327 8.88782091,0.0102980769 8.76290625,0.0102980769 C8.63799159,0.0102980769 8.52986178,0.0559579327 8.43864303,0.147252404 C8.34734856,0.238597356 8.30163822,0.346701923 8.30163822,0.471591346 L8.30163822,2.31638582 L6.6874399,2.31638582 C3.26191587,2.31638582 1.16019952,3.28445553 0.381811298,5.22054447 C0.127262019,5.86422476 0,6.66421875 0,7.6202488 C0,8.41769351 0.305080529,9.50101082 0.915191106,10.8702512 C0.929578125,10.9039471 0.954717548,10.96147 0.990811298,11.0431226 C1.02687981,11.1247248 1.05926322,11.1967861 1.08808774,11.2593065 C1.11701322,11.3216755 1.14826082,11.3745288 1.18185577,11.4177151 C1.23945433,11.4994183 1.30674519,11.5403582 1.3836274,11.5403582 C1.4556887,11.5403582 1.51215144,11.5163546 1.55301562,11.4683221 C1.59377885,11.4203149 1.61419832,11.3601923 1.61419832,11.2883077 C1.61419832,11.2449447 1.60819111,11.1813894 1.59615144,11.0972632 C1.58413702,11.013137 1.57810457,10.9568257 1.57810457,10.9279507 C1.55405048,10.6013906 1.54203606,10.3056995 1.54203606,10.0416599 C1.54203606,9.55646394 1.58413702,9.12167308 1.66813702,8.73736298 C1.75226322,8.35297716 1.8687476,8.02035937 2.01771635,7.73928245 C2.16665986,7.45810457 2.35876442,7.21567067 2.59423197,7.01147596 C2.82959856,6.80728125 3.08298678,6.64039183 3.35442187,6.51065625 C3.62590745,6.38089543 3.945375,6.27879808 4.31290024,6.20436418 C4.68040024,6.12990505 5.05029808,6.07823798 5.42266947,6.04938822 C5.79504087,6.02053846 6.21660577,6.00620192 6.6874399,6.00620192 L8.30163822,6.00620192 L8.30163822,7.85104687 C8.30163822,7.9759363 8.3472476,8.08406611 8.43846635,8.1753101 C8.52983654,8.26650361 8.63789062,8.31221394 8.76272957,8.31221394 C8.88761899,8.31221394 8.9957488,8.26650361 9.08716947,8.1753101 L12.7767584,4.48559495 C12.8680529,4.39430048 12.9136623,4.28624639 12.9136623,4.16133173 C12.9136623,4.03644231 12.8680529,3.9283125 12.7768341,3.83684135 Z" id="Path"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </SvgIcon>
    )
};

export default ShareIcon;