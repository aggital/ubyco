import React, { useState } from "react";
import MaterialTable from "material-table";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Success from "components/Typography/Success.js"
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Users() {
  const [data, setData] = useState([
    { 
      fullname: "oyewo oluwafemi", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
    },
    { 
      fullname: "Olaiya Ajao", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
    },
    { 
      fullname: "Oghogho Zino", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
    },
  ]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Gift Card Rates</h4>
            <p className={classes.cardCategoryWhite}>Last Updated 2 days ago</p>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {
                  title: "Name",
                  field: "fullname",
                },
                { title: "Customer ID", field: "customer_id" },
                { title: "Phone", field: "phone" },
                { title: "Available Amount", field: "amount"},
              ]}
              data={data}
              title=""
              actions={[
                {
                  icon: 'cancel',
                  tooltip: 'Ban User',
                  onClick: (event, rowData) => confirm("You want to ban user " + rowData.fullname)
                },
                {
                  icon: 'delete',
                  tooltip: 'Delete User',
                  onClick: (event, rowData) => confirm("You want to delete user " + rowData.fullname)
                },
                {
                  icon: 'person',
                  tooltip: 'View Profile',
                  onClick: (event, rowData) => confirm("You want to view " + rowData.fullname + "Profile")
                }
              ]}
              options={{
                actionsColumnIndex: -1
              }}
            />
          </CardBody>
          {/* <CardFooter stats>
              <div className={classes.stats}>
                <Success>
                  <ArrowUpward />
                </Success>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  up by 5% today
                </a>
              </div>
            </CardFooter> */}
        </Card>
      </GridItem>
    </GridContainer>
  );
}

Users.layout = Admin;

export default Users;
