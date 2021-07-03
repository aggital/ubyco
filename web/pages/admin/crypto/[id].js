import React, { useState } from "react";
import { useRouter } from "next/router";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

// @material-ui/icons

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button";
import Success from "components/Typography/Success.js";
import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";

import avatar from "assets/img/faces/marc.jpg";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Id() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const router = useRouter();
  const query = router.query.id;

  const [data, setData] = useState([
    {
      img: [],
      comment: "All this card is itunes",
      brand: "Apple",
      card: "Itunes 200-400",
      amount: 300,
      user: {
        name: "Femi Oyewo",
        amount: 30000,
      },
    },
  ]);

  console.log(data);
  return (
    <>
      {data.map((tile) => (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Gift Card Rate</h4>
                <p className={classes.cardCategoryWhite}>
                  List of Gift Card Rate
                </p>
              </CardHeader>
              <CardBody>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile
                    key="Subheader"
                    cols={2}
                    style={{ height: "auto" }}
                  >
                    <ListSubheader component="div">December</ListSubheader>
                  </GridListTile>

                  <div>
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                    <p>Comnent : {tile.comment}</p>
                    <p>Brand: {tile.brand}</p>
                    <p>Amount: {tile.amount}</p>
                    <p>Card: {tile.card}</p>
                  </div>
                </GridList>
              </CardBody>

              <CardFooter>
              <GridItem xs={12} sm={12} md={4}>
              <Button color="success" round>
                  Complete trade
                </Button>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
              <Button color="warning" round>
                  Flag Trade
              </Button>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
              <Button color="danger" round>
                 Fault Trade
                </Button>
              </GridItem>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h4 className={classes.cardTitle}>{tile.user.name}</h4>
                <h4 className={classes.cardTitle}> Available amount: {tile.user.amount}</h4>
                <Button color="primary" round>
                  View Profile
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      ))}
    </>
  );
}

Id.layout = Admin;

export default Id;
