import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { push } from "connected-react-router";
import {
    Route,
    Switch
} from 'react-router-dom'
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PrimaryNavigationDrawer from "./Drawers/PrimaryNavigationDrawer";

import Routes from "../Constants/Routes";
import {
    PRIMARY
} from "./Drawers/DrawerIds";
import useNavigationStyles from '../Styles/NavigationStyles'

import {
    setDrawerState
} from '../Redux/StateManagement'

function ApplicationUI(props) {
    const {
        location,
        setDrawerState,
    } = props;

    const classes = useNavigationStyles();

    const defaultRoute = _.find(Routes, 'isDefault');
    const route = _.find(Routes, { path: location }) || defaultRoute;
    const { isNavbarHidden } = route;

    return (
        <div className={classes.root}>
            { !isNavbarHidden && <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => setDrawerState(PRIMARY, true)}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {_.get(route || defaultRoute, 'title')}
                    </Typography>
                </Toolbar>
            </AppBar>}
            { !isNavbarHidden && <nav className={classes.drawer} aria-label="mailbox folders">
                <PrimaryNavigationDrawer/>
            </nav> }
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    {Routes.map(({ path, Component }, index) => {
                        return (
                            <Route exact path={path} component={Component} key={index} />
                        )
                    })}
                    <Route component={_.get(defaultRoute, 'Component')} />
                </Switch>
            </main>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {
        router
    } = state;

    return {
        location: router.location.pathname, // /projects/calculator
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDrawerState: (...args) => dispatch(setDrawerState(PRIMARY, ...args)),
        changePage: (routeId) => dispatch(push(routeId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationUI);
