import Home from "../Components/Routes/Home";
import About from "../Components/Routes/About";
import Calculator from "../Components/Routes/Projects/Calculator";

export const RouteDefinitions = {
    HOME: {
        label: "Home",
        id: "HOME",
    },
    ABOUT: {
        label: "About",
        id: 'ABOUT'
    },
    CALCULATOR: {
        label: "Calculator",
        id: 'CALCULATOR'
    }
}

export default [
    {
        title: RouteDefinitions.HOME.label,
        path: '/',
        routeId: RouteDefinitions.HOME.id,
        Component: Home
    },
    {
        title: RouteDefinitions.ABOUT.label,
        path: '/about',
        routeId: RouteDefinitions.ABOUT.id,
        Component: About
    }, {
        title: RouteDefinitions.CALCULATOR.label,
        path: '/projects/calculator',
        routeId: RouteDefinitions.CALCULATOR.id,
        Component: Calculator
    },
];