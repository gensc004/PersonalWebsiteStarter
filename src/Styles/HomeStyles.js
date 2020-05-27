import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    column: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        width: '100%',
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

    // drawer: {
    //     [theme.breakpoints.up('md')]: {
    //         width: drawerWidth,
    //         flexShrink: 0,
    //     },
    // },
    // appBar: {
    //     [theme.breakpoints.up('md')]: {
    //         width: `calc(100% - ${drawerWidth}px)`,
    //         marginLeft: drawerWidth,
    //     },
    // },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    //     [theme.breakpoints.up('md')]: {
    //         display: 'none',
    //     },
    // },
    // selectedRoute: {
    //     color: theme.palette.primary.main
    // },
}))