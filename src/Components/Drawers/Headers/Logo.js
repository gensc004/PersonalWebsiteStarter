import _ from 'lodash';
import React from 'react';
import { push } from "connected-react-router";
import { connect } from 'react-redux';
import { useTheme } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core'

import {
    Typography
} from "@material-ui/core";

import useNavigationStyles from "../../../Styles/NavigationStyles";

import Logo from '../../../logo.svg'

function UserHeader(props) {
    const {
        changePage,
    } = props;
    const classes = useNavigationStyles();
    const theme = useTheme();

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: '0 10px'
                }}
                className={classes.toolbar}
            >
                <img
                    style={{
                        width: 50,
                        height: 50,
                        cursor: 'pointer',
                    }}
                    onClick={() => changePage('/')}
                    src={Logo} className="App-logo"
                    alt="logo"
                />
                <Typography variant={"subtitle1"}>Name Here?</Typography>
            </div>
            <Divider />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: (routeId) => dispatch(push(routeId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
