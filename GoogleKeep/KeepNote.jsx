import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const KeepNote = (props) =>
{
     const [expand,setExpand] = useState(false);

    const[note,setNote]=useState({
        title:"",
        content:"",
    });
    
    const inputEvent = (event) =>
    {
        /*const value=event.target.value;
        const name = event.target.name;*/

        const {name,value} = event.target;
        setNote((itemobj) =>
        {
            return {...itemobj,[name]:value}
        });

        
    }  
    const addEvent = () =>
    {
         props.passNote(note);
         setNote({
             title:"",
             content:"",
         })
    }
  
    const expandView = () =>
    {
        setExpand(true);
    }
    const expandLess = () =>
    {
        setExpand(false);
    }
    return(
      <>
        <div className="main">
            <form>
                {expand?<input type="text" name="title" placeholder="Title" autocomplete='off'onChange={inputEvent} value={note.title} onDoubleClick={expandLess}/>:null}
                <textarea rows=" " name="content" column=" " placeholder="Description" value={note.content} onChange={inputEvent}  onClick={expandView} />
               {expand? <Button onClick={addEvent}><AddIcon className="plus" /></Button>:null}
                
            </form>
        </div>
      </>
  )
}

export  default KeepNote;