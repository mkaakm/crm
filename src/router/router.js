import {createRouter, createWebHistory} from "vue-router";

import OnlineProducts from "../views/OnlineProducts";
import Administrators from "../views/Administrators";
import Clients from "../views/Clients";
import Documents from "../views/Documents";
import Orders from "../views/Orders";
import Payments from "../views/Payments";
import Settings from "../views/Settings";
import StaticWidgets from "../views/StaticWidgets";

const routes = [
    {
        path: "/",
        component: OnlineProducts
    },
    {
        path: '/StaticWidgets',
        component: StaticWidgets
    },
    {
        path: "/Administrators",
        component: Administrators
    },
    {
        path: "/Clients",
        component: Clients
    },
    {
        path: "/Documents",
        component: Documents
    },
    {
        path: "/Orders",
        component: Orders
    },
    {
        path: "/Payments",
        component: Payments
    },
    {
        path: "/Settings",
        component: Settings
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
