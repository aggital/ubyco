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
import Notifications from "@material-ui/icons/Notifications";
import { BiBitcoin } from 'react-icons/bi';
import {MdCardGiftcard} from 'react-icons/md'
import {BiMessageAltDetail} from 'react-icons/bi'

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    layout: "/user",
  },

  {
    path: "/giftcard",
    name: "Gift Card",
    icon:  MdCardGiftcard,
    layout: "/user",
  },
  {
    path: "/crypto",
    name: "Crypto",
    icon:  BiBitcoin,
    layout: "/user",
  },
  
  {
    path: "/message",
    name: "Message",
    icon: BiMessageAltDetail,
    layout: "/user",
  },
  {
    path: "/404",
    name: "Withdraw",
    icon: BiBitcoin,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
