import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "material-table";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

function Rate() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [data, setData] = useState("");
  const [card, setCard] = useState([
    { id: 1, brand: 1,  rate: "350" },
    { id: 2, brand: 2, rate: "450" },
  ]);
  const [brand, setBrand] = useState([
    { id: 1, brand: "Bitcoin"},
    { id: 2, brand: "Litecoin"},
  ]);
  const list = [
    { id: 1, value: "Btc" },
    { id: 2, value: "Litecoin" },
  ];

  const handleChange = (event) => {
    //const name = event.target.name;
    setData(event.target.value);
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Crypto Rate</h4>
              <p className={classes.cardCategoryWhite}>List of Crypto Rate</p>
            </CardHeader>
            <CardBody>
              <MaterialTable
                columns={[
                  {
                    title: "Coin Brand",
                    field: "brand",
                    lookup: { 1: 'Bitcoin', 2: 'Litecoin'}
                  },
                  { title: "Rate", field: "rate" },
                ]}
                data={card}
                title=""
                editable={{
                  onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        setCard([...card, newData]);
                        
                        resolve();
                      }, 1000)
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...card];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setCard([...dataUpdate]);
          
                        resolve();
                      }, 1000)
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...card];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setCard([...dataDelete]);
                        resolve()
                      }, 1000)
                    }),
                }}
                options={{
                  actionsColumnIndex: -1,
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Crypto Brand</h4>
              <p className={classes.cardCategoryWhite}>List of Crypto brands</p>
            </CardHeader>
            <CardBody>
              <MaterialTable
                columns={[
                  {
                    title: "Brand",
                    field: "brand",
                  },
                  { title: "Counts", field: "count", editable: 'never', initialEditValue: '0' },
                ]}
                data={brand}
                title=""
                editable={{
                  onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        setBrand([...brand, newData]);
                        
                        resolve();
                      }, 1000)
                    }),
                  onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataUpdate = [...brand];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setBrand([...dataUpdate]);
          
                        resolve();
                      }, 1000)
                    }),
                  onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...brand];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setBrand([...dataDelete]);
                        resolve()
                      }, 1000)
                    }),
                }}
                options={{
                  actionsColumnIndex: -1,
                }}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Rate.layout = Admin;

export default Rate;
