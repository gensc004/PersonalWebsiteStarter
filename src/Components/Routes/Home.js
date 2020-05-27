import React from 'react';
import { connect } from 'react-redux';
import { RouteDefinitions } from "../../Constants/Routes";
import { useTheme } from '@material-ui/core/styles';

import Picture from '../../logo.svg';

import {
    Typography
} from "@material-ui/core";

import useHomeStyles from '../../Styles/HomeStyles'

function Home(props) {
    const {
    } = props;

    const classes = useHomeStyles();
    const theme = useTheme();

    return (
        <div className={classes.column}>
            <div
                className={classes.row}
                style={{
                    minHeight: 400
                }}
            >
                <div className={classes.column}>
                    <Typography variant={"h2"}>
                        Maddie Gates
                    </Typography>
                    <Typography variant={"subtitle1"}>
                        Software Development Intern at HouseRater
                    </Typography>
                </div>
                <div className={classes.column}>
                    <img
                        style={{
                            width: 200,
                            height: 200
                        }}
                        src={Picture}
                    />
                </div>
            </div>
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
)(Home)