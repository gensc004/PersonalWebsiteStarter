import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import _ from 'lodash'

import useNavigationStyles from '../Styles/NavigationStyles'

function HRTListItem (props) {
    const {
        index,
        action,
        classes,
        theme,
        onClick,
        isChild
    } = props

    const [isOpen, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!isOpen);
    };

    if (!_.isEmpty(action.children)) {
        const isChildSelected = _.find(action.children, { isSelected: true })
        return (
            <React.Fragment>
                <ListItem
                    button
                    key={action.title}
                    onClick={handleClick}
                    className={isChildSelected && !isOpen ? classes.selectedRoute : undefined}
                >
                    <ListItemIcon> <action.Icon /> </ListItemIcon>
                    <ListItemText primary={action.title} />
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={isOpen}>
                    <List>
                        {_.map(action.children, (childAction, childIndex) => (
                            <HRTListItem
                                action={childAction}
                                index={childIndex}
                                theme={theme}
                                onClick={onClick}
                                classes={classes}
                                isChild={true}
                            />
                        ))}
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }

    return (
        <ListItem button key={action.title}
                  onClick={() => onClick(action)}
                  className={`${isChild ? classes.nested : ''} ${action.isSelected ? classes.selectedRoute : undefined}`}>
            <ListItemIcon> <action.Icon /> </ListItemIcon>
            <ListItemText primary={action.title} />
        </ListItem>
    )
}

function HRTDrawer(props) {
    const {
        Header,
        onClick,
        setDrawerState,
        items,
        isOpen,
        container,
    } = props;

    const classes = useNavigationStyles();
    const theme = useTheme();

    const drawer = (
        <div>
            {Header && <Header/>}
            <List>
                {items.map((action, index) => (
                    <HRTListItem
                        key={action.title}
                        index={index}
                        action={action}
                        classes={classes}
                        theme={theme}
                        onClick={onClick}
                    />
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Hidden mdUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={isOpen}
                    onClose={() => setDrawerState(false)}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open={isOpen}
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HRTDrawer)