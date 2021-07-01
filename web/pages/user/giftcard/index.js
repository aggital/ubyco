import React, {useState} from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import {BiBitcoin} from 'react-icons/bi'
import {MdCardGiftcard} from 'react-icons/md'

import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";

import ArrowUpward from "@material-ui/icons/ArrowUpward";

// layout for this page
import User from "layouts/User.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FormControl from "@material-ui/core/FormControl";
import Table from "components/Table/Table.js";
import Success from "components/Typography/Success.js"
import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import MaterialTable from "material-table";

import {GiBanknote} from 'react-icons/gi'

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Index() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [card, setCard] = useState([
    { 
      id:1,
      brand: 'Apple',
      card: 'Itunes 100 - 200',
      amount: 2000,
    },
    { 
      id: 2,
      brand: 'Google',
      card: 'Google Play',
      amount: 2020,
    },
    { 
      id:3,
      brand: 'Google',
      card: 'Google Play',
      amount: 2020,
    },
  ]);
  const [crypto, setDCrypto] = useState([
    { 
      id:1,
      brand: 'btc',
      amount: 2000,
    },
    { 
      id: 2,
      brand: 'Litcoin',
      amount: 2020,
    },
    { 
      id:3,
      brand: 'Dodgecoin',
      amount: 2020,
    },
  ]);
  return (
    <div>
        
    </div>
  );
}

Index.layout = User;

export default Index;
