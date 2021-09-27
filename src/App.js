import React from 'react';
import { Grid} from '@material-ui/core';

import Detals from './component/Detail/Details';
import Main from './component/Detail/Main/Main';
import useStyle from './styles';


const App = () => {

    const classes = useStyle();
    return (
        <div>
          <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{ height:'100vh'}} >
              <Grid item xs ={12} sm={4}>
                  <Detals title='income'/>
              </Grid>
              <Grid item xs ={12} sm={3}>
                  <Main/>
              </Grid>
              <Grid item xs ={12} sm={4}>
                  <Detals title='expense'/>
              </Grid>

          </Grid>
        </div>
    )
}

export default App
