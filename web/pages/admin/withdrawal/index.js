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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function WithDrawal() {
  const [data, setData] = useState([
    { 
      fullname: "oyewo oluwafemi", 
      customer_id: "1012321232",
      phone: '08034605723',
      withdrawal_amount: 500,
      status: 1,
      amount: 2000,
    },
    { 
      fullname: "Olaiya Ajao", 
      customer_id: "1012321232",
      phone: '08034605723',
      withdrawal_amount: 700,
      status: 1,
      amount: 2000,
    },
    { 
      fullname: "Oghogho Zino", 
      customer_id: "1012321232",
      phone: '08034605723',
      status: 1,
      withdrawal_amount: 600,
      amount: 2000,
    },
  ]);
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>User Withdrawal request</h4>
          </CardHeader>
          <CardBody>
            <MaterialTable
              columns={[
                {
                  title: "Name",
                  field: "fullname",
                  editable: 'never',
                },
                { title: "Customer ID", field: "customer_id",editable: 'never', },
                { title: "Phone", field: "phone", editable: 'never', },
                { title: "Available Amount", field: "amount", editable: 'never',},
                {title: "Withdraw Request", field:'withdrawal_amount', editable: 'never',},
                {title: "status", field:"status", lookup:{1:"pending", 2:"processing", 3:"success"}}
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

WithDrawal.layout = Admin;

export default WithDrawal;
