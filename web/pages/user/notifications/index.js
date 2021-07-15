import React, { useState } from "react";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

//Modal
import Modal from "@material-ui/core/Modal";

// layout for this page
import User from "layouts/User.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Success from "components/Typography/Success.js";
import Card from "components/Card/Card.js";

import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

// import Button from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.js";

import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// const styles = {
//     cardCategoryWhite: {
//         color: "rgba(255,255,255,.62)",
//         margin: "0",
//         fontSize: "14px",
//         marginTop: "0",
//         marginBottom: "0",
//     },
//     cardTitleWhite: {
//         color: "#FFFFFF",
//         marginTop: "0px",
//         minHeight: "auto",
//         fontWeight: "300",
//         fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
//         marginBottom: "3px",
//         textDecoration: "none",
//     },
//     formControl: {
//         minWidth: "100%",
//         padding: "5px",
//     },
//     formTitle: {
//         fontSize: "16px",
//         color: "#aaa",
//     },
//     textInput: {
//         fontSize: "16px",
//         paddingBottom: "4px"
//     },
//     center: {
//         textAlign: "center",
//         display: "block",
//     },
//     mainText: {
//         fontWeight: "bold",
//         color: "#333",
//         marginBottom: 0,
//     },
//     notify: {
//         color: "#777",
//         padding: 0,
//     },
//     listStyle: {
//         listStyle: "number",
//     }
// };

function Notification() {
  const classes = useStyles();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const Body = (
  //     <div>
  //         <h2 id="simple-modal-title">Text in a modal</h2>
  //         <p id="simple-modal-description">
  //             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //         </p>
  //     </div>
  // );

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Notifications</h4>
              <p className={classes.cardCategoryWhite}>
                Lorem ipsum dolor sit amet
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <ul className={classes.listStyle}>
                    <li onClick={handleOpen}>
                      <h4 className={classes.mainText}>
                        Lorem Ipsum dolor sit amet
                      </h4>
                      <h5 className={classes.notify}>
                        Lorem ipsum is old english dummy text mon amor sit amet
                        adispicing...
                      </h5>
                    </li>

                    <li onClick={handleOpen}>
                      <h4 className={classes.mainText}>
                        Lorem Ipsum dolor sit amet
                      </h4>
                      <h5 className={classes.notify}>
                        Lorem ipsum is old english dummy text mon amor sit amet
                        adispicing...
                      </h5>
                    </li>

                    <li onClick={handleOpen}>
                      <h4 className={classes.mainText}>
                        Lorem Ipsum dolor sit amet
                      </h4>
                      <h5 className={classes.notify}>
                        Lorem ipsum is old english dummy text mon amor sit amet
                        adispicing...
                      </h5>
                    </li>
                  </ul>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={handleOpen}>
                Mark All as Read
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </div>
          
        </Modal>
      </GridContainer>
    </div>
  );
}
Notification.layout = User;

export default Notification;
