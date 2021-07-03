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

function Crypto() {
  const [data, setData] = useState([
    { 
      id:1,
      fullname: "oyewo oluwafemi", 
      customer_id: "1012321232",
      brand: 'Btc',
      amount: 2000,
    },
    { 
      id: 2,
      fullname: "Olaiya Ajao", 
      customer_id: "1012321232",
      brand: 'Litecoin',
      amount: 2020,
    },
    { 
      id:3,
      fullname: "Oghogho Zino", 
      customer_id: "1012321232",
      brand: 'DodgeCoin',
      amount: 2000,
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
                onClick={() => Router.push("/admin/crypto/rate")}
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

      {/* Crypto Cards Trade */}

      <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Crypto Trade Transaction</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {
                  title: "Name",
                  field: "fullname",
                },
                { title: "Customer ID", field: "customer_id" },
                { title: "Brand", field: "brand"},
                { title: "Amount", field: "amount"},
              ]}
              data={data}
              title=""
              actions={[
                {
                  icon: 'visibility',
                  tooltip: 'View Trade',
                  onClick: (event, rowData) => {Router.push(`/admin/crypto/${rowData.id}`)}
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

Crypto.layout = Admin;

export default Crypto;
