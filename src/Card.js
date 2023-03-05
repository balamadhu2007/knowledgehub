import React, { useState } from 'react'
import {connect} from 'react-redux'
import {removeproduct,addproduct } from './actions/index'
const Card = ({products,addproduct,removeproduct}) => {
 const [item,setItem] = useState('')
 const  submitHandler = async(e) =>{
   e.preventDefault();
   if(item !== ''){
   await addproduct({name:item})
      setItem('')
   }
 }
   return(
    <div className ='card  bg-info' style={{'width':'20rem'}}>
      <div className='card-body'>
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Addproducts' value={item} onChange={(e)=>setItem(e.target.value)}/>
             <button type='submit' className='btn btn-primary'>
              AddProduct
             </button>
        </form>
        <br/>
        {products.map((product)=>{
                 
                   return(
                    <div>
                      {product.name}
                     <span onClick={()=>removeproduct(product.name)} className='badge square rounded-pill bg-warning'>x</span>
                   </div>
                   )

                 

        })}

      </div>

    </div>
  )
}
const mapStateToProps=(state)=>({

products:state


})

export default connect(mapStateToProps,{addproduct,removeproduct})(Card)