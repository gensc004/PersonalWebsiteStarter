import { push } from "connected-react-router";
import { connect } from 'react-redux'
import React from "react"
import _ from "lodash"
import Routes from "../../Constants/Routes";
import NavigationItems from "../../Constants/NavigationItems";
import Drawer from "../../Shared/Drawer";
import Logo from "./Headers/Logo"

import {
    PRIMARY
} from "./DrawerIds";

import {
    setDrawerState
} from "../../Redux/StateManagement"


function determineSelectedItem(items, activeRoute) {
    return _.map(items, (item) => ({
        ...item,
        children: determineSelectedItem(item.children, activeRoute),
        isSelected: item.routeId === activeRoute.routeId,
        path: _.get(_.find(Routes, { routeId: item.routeId }), 'path', '/nicor/404')
    }));
}

function PrimaryNavigationDrawer(props) {
    const {
        state,
        isOpen,
        setDrawerState,
        changePage,
        location,
        container,
    } = props;

    let activeRoute = _.find(Routes, { path: location });
    if (!activeRoute) {
        activeRoute = _.find(Routes, { isDefault: true })
    }

    const visibleItems = determineSelectedItem(NavigationItems, activeRoute);

    return (
        <div>
            <Drawer
                container={container}
                isOpen={isOpen}
                setDrawerState={setDrawerState}
                onClick={ ({path}) => changePage(path) }
                items={visibleItems}
                Header={Logo}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    const {
        router,
        StateManagement,
    } = state;


    return {
        state,
        location: router.location.pathname,
        isOpen: _.get(StateManagement, `${PRIMARY}.isOpen`, false),
        args: _.get(StateManagement, `${PRIMARY}.args`)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setDrawerState: (...args) => dispatch(setDrawerState(PRIMARY, ...args)),
        changePage: (routeId) => dispatch(push(routeId))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrimaryNavigationDrawer)