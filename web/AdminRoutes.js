/*!

=========================================================
* * NextJS Material Dashboard v1.1.0 based on Material Dashboard React v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import People from "@material-ui/icons/People"
import Redeem from "@material-ui/icons/Redeem"
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import{ BiBitcoin }from 'react-icons/bi';
import {FaBank, FaBitcoin, FaPiggyBank} from 'react-icons/fa';
import {FiMessageCircle, FiSettings} from 'react-icons/fi'
import Language from "@material-ui/icons/Language";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/admin",
  },

  {
    path: "/users",
    name: "Users",
    icon: People,
    layout: "/admin",
  },

  {
    path: "/giftcard",
    name: "Giftcard",
    icon: Redeem,
    layout: "/admin",
  },

  {
    path: "/crypto",
    name: "Crypto",
    icon: FaBitcoin,
    layout: "/admin",
  },

  {
    path: "/withdrawal",
    name: "Withdrawal",
    icon: FaPiggyBank,
    layout: "/admin",
  },
  {
    path: "/message",
    name: "Message",
    icon: FiMessageCircle,
    layout: "/admin",
  },
  {
    path: "/table-list",
    name: "Setting",
    icon: FiSettings,
    layout: "/admin",
  },
 
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: BubbleChart,

  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,

  //   layout: "/admin",
  // },
   {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,

    layout: "/admin",
  },
];

export default dashboardRoutes;
