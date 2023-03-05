
export const addproduct=(value)=>async dispatch=>{
          dispatch({
            type:'ADD',
            payload:value
         })
       }


       export const removeproduct=(value)=>async dispatch=>{
        dispatch({
          type:'REMOVE',
          payload:{name:value}
       })
     }



