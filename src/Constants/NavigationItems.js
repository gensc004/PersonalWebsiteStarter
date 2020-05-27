import AccountBalance from "@material-ui/icons/AccountBalance"
import Dashboard from "@material-ui/icons/Dashboard"
import Business from "@material-ui/icons/Business"
import GraphicEq from "@material-ui/icons/GraphicEq"
import VpnKey from "@material-ui/icons/VpnKey"

import { RouteDefinitions } from "./Routes";

export default [
    {
        title: RouteDefinitions.HOME.label,
        routeId: RouteDefinitions.HOME.id,
        Icon: AccountBalance
    },
    {
        title: 'Projects',
        Icon: Dashboard,
        children: [
            {
                title: RouteDefinitions.CALCULATOR.label,
                routeId: RouteDefinitions.CALCULATOR.id,
                Icon: GraphicEq,
            }, {
                title: RouteDefinitions.LOGIN_FORM.label,
                routeId: RouteDefinitions.LOGIN_FORM.id,
                Icon: VpnKey,
            }
        ]
    }, {
        title: RouteDefinitions.ABOUT.label,
        routeId: RouteDefinitions.ABOUT.id,
        Icon: Business,
    },
];