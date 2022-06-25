import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
const KeepContent = (props) =>
{
   
const deleteItem = () =>{
    props.delete(props.id);
}

    return(
        <>
      
        <div class="content">
            <h3>{props.title}</h3>
            <br />
            <p>{props.content}</p>
            <Button onClick={deleteItem} className="delete">
             <DeleteIcon className="delete" />
            </Button>
        </div>
       
        </>
    )
} 

export default KeepContent;