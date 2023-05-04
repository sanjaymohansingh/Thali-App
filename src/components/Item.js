import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'


const style = {
    nav:{fontSize:"30px",
    fontWeight :"700",
    color:"white",
    textAlign:"center",
    height:"3rem",
    backgroundColor:"red"
}
}

function Item() {
    const productData = useSelector(state => state.counter.product)
  return (
    <div>
        <div style={style.nav}>Menu</div>
        <div>
            {productData.map((item , ind)=>{
              
              return <Product key={ind} data={item}/>
            })}
        </div>
        
    </div>
  )
}

export default Item