import React, { useState } from "react";
import MaterialTable from "material-table";
import Router from "next/router";

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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Users() {
  const [data, setData] = useState([
    { 
      id:1,
      fullname: "oyewo oluwafemi", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
      status: 1
    },
    { 
      id:2,
      fullname: "Olaiya Ajao", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
      status: 1
    },
    { 
      id:3,
      fullname: "Oghogho Zino", 
      customer_id: "1012321232",
      phone: '08034605723',
      amount: 2000,
      status: 1
    },
  ]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="danger">
            <h4 className={classes.cardTitleWhite}>Users</h4>
            <p className={classes.cardCategoryWhite}>Last Updated 2 days ago</p>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {
                  title: "Name",
                  field: "fullname",
                  editable: 'never',

                },
                { title: "Customer ID", field: "customer_id", editable: 'never' },
                { title: "Phone", field: "phone", editable: 'never' },
                {title: "Status", field: "status", lookup:{1: "Active", 2:"Banned"}},
                { title: "Available Amount", field: "amount", editable: 'never'},
              ]}
              data={data}
              title=""
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
              actions= {[
                {
                  icon: 'visibility',
                  tooltip: 'View User',
                  onClick: (event, rowData) => Router.push(`/admin/users/${rowData.id}`)
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
