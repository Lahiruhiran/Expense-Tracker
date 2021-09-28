import React, {useContext} from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import {ExpenseTrackerContext} from '../../../../context/context';
import useStyle from './style';

const List = () => {
    const classes = useStyle();
    const globaleState = useContext(ExpenseTrackerContext);

    console.log(globaleState);
    
    const transaction = [
        { 
            id :1,
            type : 'Income',
            category : 'Salary',
            amount: 100,
            date: new Date()
        
        }
    ];

    return (
      <MUIList dense={false} className={classes.list}>
          {transaction.map((transaction)=> (
              <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar  className={transaction.type === 'Income' ? classes.avatarIncome :classes.avatarExpense}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                         <ListItemSecondaryAction>
                             <IconButton edge='end' aria-lable='delete' onClick=''>
                                 <Delete />
                             </IconButton>
                         </ListItemSecondaryAction>
                </ListItem>
              </Slide>
          ))}

      </MUIList>
    )
}

export default List
