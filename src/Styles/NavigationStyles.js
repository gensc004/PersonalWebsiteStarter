import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    routeContainer: {
        width: '100%',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    selectedRoute: {
        color: theme.palette.primary.main
    },
    notification: {
        color: 'red',
        paddingLeft: '5px'
    }
}))