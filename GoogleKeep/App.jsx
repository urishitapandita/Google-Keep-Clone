import React, { useState } from 'react';
import ReactDom from 'react-dom';
import KeepHeader from './KeepHeader';
import KeepNote from './KeepNote';
import KeepContent from './KeepContent';
import KeepFooter from './KeepFooter';
import { Note } from '@material-ui/icons';
const App = () =>{
    
    const [addItem,setItem] = useState([]);

    const addNote = (note) =>
    {
       // alert("Click");
      
        setItem((prevData) =>
        {
              return [...prevData,note];
        });
       
    }
    

    const  ondelete = (id) =>
    {
        setItem((itemobj) =>
        {
            return itemobj.filter((arrEle,index) =>
            {return index !== id}
            );
        });
    }
    return(
    <>
    <KeepHeader />
    <KeepNote passNote={addNote}/>
   
     {addItem.map((val,index) =>{
           return <KeepContent 
                   key={index}
                   id={index}
                   title={val.title}
                   content={val.content}
                   delete={ondelete}
                  />
     })}

    <KeepFooter />
    </>
    );
}

export default App;