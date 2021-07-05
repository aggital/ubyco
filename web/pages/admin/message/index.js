import React,{useState} from "react";
import Router from "next/router";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import { GiftedChat } from 'react-web-gifted-chat';

// import { bugs, website, server } from "variables/general.js";

import MaterialTable from "material-table";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Index() {

  const [message, setMessage] = useState([
    {
        id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          id: 2,
          name: 'React',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
  ])


//   onRowUpdate: (newData, oldData) =>
//                   new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                       const dataUpdate = [...data];
//                       const index = oldData.tableData.id;
//                       dataUpdate[index] = newData;
//                       setData([...dataUpdate]);
        
//                       resolve();
//                     }, 1000)
//                   }),
//
  onSend: (messages = []) => {
      setMessage([...message, messages])
  }
    
  
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>

            <GiftedChat
                messages={message}
                onSend={(messages) => onSend(messages)}
                user={{
                id: 1,
                }}
            />
             
            </CardBody>
           </Card>
        </GridItem>
     </GridContainer>
    </div>
  );
}

Index.layout = Admin;

export default Index;
