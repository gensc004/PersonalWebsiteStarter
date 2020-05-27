import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';

import useNavigationStyles from '../../../Styles/NavigationStyles'

function LoginForm(props) {
    const {
    } = props;

    const classes = useNavigationStyles();
    const theme = useTheme();

    return (
        <div>
            <label>This is {RouteDefinitions.LOGIN_FORM.label}. Write code here to design it!</label>
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
)(LoginForm)