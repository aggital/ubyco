import React, { useState } from "react";

// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

//form input
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import CustomInput from "components/CustomInput/CustomInput.js";
import MenuItem from '@material-ui/core/MenuItem';


// @material-ui/icons
import Store from "@material-ui/icons/Store";
import { BiBitcoin } from 'react-icons/bi'
import { MdCardGiftcard } from 'react-icons/md'

import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";

import ArrowUpward from "@material-ui/icons/ArrowUpward";

// layout for this page
import User from "layouts/User.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import FormControl from "@material-ui/core/FormControl";
import Select from '@material-ui/core/Select';
import Table from "components/Table/Table.js";
import Success from "components/Typography/Success.js"
import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import MaterialTable from "material-table";

import { GiBanknote } from 'react-icons/gi'

// import styling from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

import avatar from "assets/img/faces/marc.jpg";

// import Button from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.js";



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
    formControl: {
        minWidth: "100%",
        padding: "5px",
    },
    formTitle: {
        fontSize: "16px",
        color: "#aaa",
    },
    textInput: {
        fontSize: "16px",
        paddingBottom: "4px"
    },
    center: {
        textAlign: "center",
        display: "block",
    },
    boldText: {
        fontWeight: "bold",
        color: "#333",
    },
    bolderText: {
        fontWeight: "bold",
        color: "#777",
    }
};

function Withdraw() {
    const useStyles = makeStyles(styles);
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Withdrawal</h4>
                            <p className={classes.cardCategoryWhite}>Kindly Enter your Details</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} className={classes.center}>
                                    <div>
                                        <h4 className={classes.boldText}>Available Balance (Naira)</h4>
                                        <h5 className={classes.bolderText}>12,000</h5>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label" className={classes.formTitle}>Select Currency</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            onChange={handleChange}>

                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Amount"
                                        id="amount"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Request Withdrawal</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
Withdraw.layout = User;

export default Withdraw;

