import React,{useState} from "react";
import Router from "next/router";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import LocalOffer from "@material-ui/icons/LocalOffer";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import { bugs, website, server } from "variables/general.js";

import MaterialTable from "material-table";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function GiftCard() {
  const [data, setData] = useState([
    { 
      id:1,
      fullname: "oyewo oluwafemi", 
      customer_id: "CUS_ochmt6zibhgqd5n",
      brand: 'Apple',
      card: 'Itunes 100 - 200',
      amount: 2000,
      status: 1
    },
    { 
      id: 2,
      fullname: "Aderemi Ayomide", 
      customer_id: "CUS_9qx8fmlogixuz10",
      brand: 'Google',
      card: 'Google Play',
      amount: 2020,
      status: 1
    },
    { 
      id:3,
      fullname: "Test one", 
      customer_id: "CUS_gamdn1ryrlk1msa",
      brand: 'Google',
      card: 'Google Play',
      amount: 2050,
      status: 1
    },
  ]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={6}>
          <Card>
            <CardBody>
              <Button
                fullWidth
                color="info"
                onClick={() => Router.push("/admin/giftcard/rate")}
              >
                Rate
              </Button>
            </CardBody>
           </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6}>
        <Card>
            <CardBody color="warning" stats icon>
              <Button
                fullWidth
                color="warning"
                onClick={() => showNotification("tl")}
              >
               Histroy
              </Button>
            </CardBody>
           </Card>
        </GridItem>
       </GridContainer>

      {/* Gift Cards Trade */}

      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Gift Card Transaction</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {
                  title: "Name",
                  field: "fullname",
                  editable: "never"
                },
                { title: "Customer ID", field: "customer_id", editable: "never" },
                { title: "Brand", field: "brand", editable: "never"},
                { title: "Card", field: "card", editable: "never"},

                { title: "Amount", field: "amount", editable: "never"},
                { title: "status", field:"status",lookup:{1: "Processing", 2:"Flaged", 3: "Completed"}},
              ]}
              data={data}
              editable={{
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      const dataUpdate = [...data];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setData([...dataUpdate]);
        
                      resolve();
                    }, 1000)
                  }),
              }}
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
  

    </div>
  );
}

GiftCard.layout = Admin;

export default GiftCard;
