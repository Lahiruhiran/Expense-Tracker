import React from 'react';
import { Card,CardHeader, CardContent,Typography } from "@material-ui/core";
// import { Doughnut } from "react-chartjs-02";

import useStyle from './style';

const Details = ({ title}) => {
    const classes = useStyle();
    return (
   <Card className={ title === 'income'? classes.income :classes.expense}>
       <CardHeader  title={title}/>
       <CardContent>
           <Typography varient='h5'> $100</Typography>
           {/* <Doughnut  data ='DATA'/> */}
       </CardContent>

   </Card>
   

    )
}

export default Details
