const initialState=[]
export default function reducer(state=initialState, action){
       const{type,payload} = action
          switch(type){
           case 'ADD':
           return [...state,payload]
           case 'REMOVE':
            return state.filter(product => product.name !== payload.name)
            default :
            return state

          }




}