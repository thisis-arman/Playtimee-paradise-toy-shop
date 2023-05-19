import React, { useEffect } from 'react';

const useTitle = (title) => {
   useEffect(()=>{
    document.title=`${title} -PlayTime Paradise`
   },[])
};

export default useTitle;