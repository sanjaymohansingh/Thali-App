import React, { useState } from 'react'
import { useDispatch  } from 'react-redux'
import { addToThali } from '../redux/userSlice'
import { Button } from 'react-bootstrap'


function Product( {data}) {
    const [quantity , setQuantity] = useState(1)
    const dispatch = useDispatch()
    console.log("item", addToThali)

    const add = (item)=>{
      item = JSON.parse(JSON.stringify(item))
      item.quantity = quantity
      item.totalPrice = Number(item.quantity) * Number(item.price) 
      dispatch(addToThali(item))
       console.log(addToThali(item))
    }

    const decrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1)
        }
      }

    const increment = ()=>{
        setQuantity(quantity +1)
      }


  return (
    <div style={{display:"flex", }}>
        <img src= {data.image} style={{ height: "250px", width: "30%" ,marginBottom:"8px" , marginLeft:"2rem"}}/>
        <div  style={{ marginLeft:"8rem" , marginTop:"2rem"}}>    
        <h2 style={{color:"blue"}}> {data.name}</h2>
        <h4 style={{color:"red"}} >Price: {data.price} Rs</h4>
        <div style={{ marginTop:"2rem"}}>
        <button type = "button" style={{  width:"3rem" }} onClick={decrement}>-</button>
        <input type="text" value={quantity} style={{textAlign:"center" , width:"6rem" , fontSize:"1rem" , fontWeight:"600" }} ></input>
        <button type = "button" style={{   width:"3rem"  }} onClick={increment}>+</button>
        </div>
        <Button type="button"style={{ marginTop:"2rem",  marginLeft:"2rem"}} onClick={()=> add(data)}>Add To Cart</Button>
        </div>
        <div style={{width :"35rem" , height:"15rem"  , marginLeft:"2rem", fontSize:"19px" ,  marginTop:"2rem"}}> {data.description}</div>
      
      
    </div>
  )
}

export default Product