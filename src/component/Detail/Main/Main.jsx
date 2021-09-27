import React from 'react';
import { Card,CardHeader, CardContent,Typography, Grid, Divider } from "@material-ui/core";

import useStyle from './mainStyle';

const Main = () => {
    const classes = useStyle();
    return (
      <Card className={classes.root}>
          <CardHeader  title='Expense Tracker' subheader='Powerd By Speechly'/>
          <CardContent>
              <Typography align='center' varient='h5'> Total Balance $1000</Typography>
              <Typography varient='subtitle'style={{ lineHeight:'1.5 em', margin: '20px'}}>
                  Try Saying: Add income for $1000 in category salary for Monday...
              </Typography>
              <Divider />
          {/* form */}
          </CardContent>
        <CardContent className={classes.CardContent} >
            <Grid container spacing={2}>
                <Grid item xs={12}>

                </Grid>

            </Grid>

        </CardContent>

      </Card>
    )
}

export default Main
