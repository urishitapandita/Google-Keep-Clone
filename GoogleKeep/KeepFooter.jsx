import React from 'react';


const KeepFooter = () =>
{
    const year = new Date().getFullYear();
   return (
       <>
       <footer>
           <p>Copyright  C {year}</p>
       </footer>
       </>
   );
};

export default KeepFooter;