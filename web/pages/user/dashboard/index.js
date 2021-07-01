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

function Dashboard() {
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
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <GiBanknote/>
              </CardIcon>
              <p className={classes.cardCategory}>Available Balance</p>
              <h3 className={classes.cardTitle}>
              $200
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Success>
                  <ArrowUpward />
                </Success>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  up by 5% today
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="dark" stats icon>
              <CardIcon color="dark">
               <BiBitcoin/>
              </CardIcon>
              <p className={classes.cardCategory}>Crypto Trades</p>
              <h3 className={classes.cardTitle}>$0</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
               All times trade
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
               <MdCardGiftcard/>
              </CardIcon>
              <p className={classes.cardCategory}>Gift Card Trades</p>
              <h3 className={classes.cardTitle}>$5</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                All time trade
              </div>
            </CardFooter>
          </Card>
        </GridItem>
    </GridContainer>

      {/* Charts */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Gift Card Transaction</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {title:'Transaction Id', field: 'id'},
                { title: "Brand", field: "brand"},
                { title: "Card", field: "card"},

                { title: "Amount", field: "amount"},
              ]}
              data={card}
              title=""
              actions={[
                {
                  icon: 'visibility',
                  tooltip: 'View Trade',
                  onClick: (event, rowData) => {Router.push(`/admin/giftcard/${rowData.id}`)}
                },
              ]}
              options={{
                actionsColumnIndex: -1
              }}
            />
          </CardBody>
        </Card>
      
        </GridItem>

        <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Crypto Transaction</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {title:'Transaction Id', field: 'id'},
                { title: "Brand", field: "brand"},
                { title: "Amount", field: "amount"},
              ]}
              data={crypto}
              title=""
              actions={[
                {
                  icon: 'visibility',
                  tooltip: 'View Trade',
                  onClick: (event, rowData) => {Router.push(`/admin/giftcard/${rowData.id}`)}
                },
              ]}
              options={{
                actionsColumnIndex: -1
              }}
            />
          </CardBody>
        </Card>
      
        
         </GridItem>


       </GridContainer>
      <GridContainer>
       <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="danger">
              <h4 className={classes.cardTitleWhite}>Gift Card Rates</h4>
              <p className={classes.cardCategoryWhite}>
               Last Updated 2 days ago
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Brand", "Card", "Rate"]}
                tableData={[
                  ["1", "Apple", "Itunes Card 100 - 200", "400"],
                  ["2", "Google", "Google Play", "200"],
                  ["3", "Vanila Card", "Vanilla 200", "300"],
                  ["4", "Apple", "Itunes 400- 1000", "390"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Crypto Exchange Rate</h4>
              <p className={classes.cardCategoryWhite}>
                Last Updated 2 days ago
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Coins", "Rate"]}
                tableData={[
                  ["1", "BTC", "500"],
                  ["2", "Litecoin", "350"],
                  ["3", "Dodgecoin", "430"],
                  ["4", "Etherum", "560"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      
      </GridContainer>
    </div>
  );
}

Dashboard.layout = User;

export default Dashboard;
