import React from 'react' 
import { Button } from 'react-bootstrap'
import {useDispatch , useSelector} from "react-redux"
import { removeItem } from '../redux/userSlice'
import  Swal  from 'sweetalert2';


const style = {
  nav:{fontSize:"30px",
  fontWeight :"700",
  color:"white",
  textAlign:"center",
  height:"3rem",
  backgroundColor:"red"
}
}


function Cart() {

    const thali = useSelector(state=>state.counter.thali)
    const dispatch = useDispatch()

    const Remove = (id)=>{
      dispatch(removeItem(id))
    }
    
    var sum=0
    for (const item of thali){
      sum += item.totalPrice
    }

    const Order = ()=>{
      if(thali.length<2){
              Swal.fire({
                icon: 'error',
                title: 'Oops...😥😫',
                text: 'Order at least 2 item.',
              
              })
            }else{
        
              Swal.fire(
                'Ordered sucessfull💙💚🧡!',
                'You clicked the button!',
                'success'
              )
              thali.length=0
            }
    }

  return (
    <div>
      <div style={style.nav}>Item List</div>
        <div >
            {thali.map((item ,ind)=>{
               return <div style={{display:"flex"}}>
            
                <img src={item.image}  style={{width:"250px" , height:"200px" , marginLeft:"15px", marginTop:"10px"}}/>
                  <div style={{marginTop:"10px"}}>
                  <h5  style={{marginTop:"5px" , marginLeft:"1rem"}}>{ind+1}</h5>
                  <h5 style={{marginTop:"5px" , marginLeft:"1rem"}}>Item : {item.name}</h5>
                  <h5 style={{marginTop:"5px" , marginLeft:"1rem"}}>Quantity : {item.quantity}</h5>
                  <h5 style={{marginTop:"5px" , marginLeft:"1rem"}}>Price : Rs. {item.totalPrice}/-</h5>
                  <button type='button' className="mx-3  btn btn-danger btn-sm" onClick={()=>Remove(ind)}>Remove</button>
                </div>
                
               </div>
            }
            )}
        </div>
        <div style={{ textAlign:"center", height:"3rem" } }>
                 <h3>Total Price : {sum} </h3>
          </div>
          <div style={{display:"flex" , justifyContent:"center" , marginTop:"1rem" , marginBottom:"1rem"}}><Button onClick={Order}>Place Order</Button></div>
    </div>
  )
}

export default Cart

