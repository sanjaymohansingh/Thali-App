import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  product:[
     { id: 1,
    image:"https://images.herzindagi.info/image/2019/Dec/shahi-paneer-without-onion-main.jpg", 
    name: "Shahi Paneer",
    price: "200",
    description : "This Shahi Paneer is deliciously rich and creamy, making it one of the most popular recipes in Mughlai cuisine. Fresh, unmelting cheese is married with a creamy gravy, perfect for serving with naan or roti."
      },
    { id: 2,
        image:"https://holycowvegan.net/wp-content/uploads/2014/07/DSC_0139.jpg", 
        name: "Daal",
        price: "100",
        description :" This deliciously cooked Dal is made with onions, garlic-ginger, tomatoes and is seasoned perfectly with salt, red chilli powder and turmeric powder. This Dal recipe is not only easy to digest, but at the same time it makes for a perfect lunch/dinner recipe, when served with cooked Rice or Roti."
    },
    { id: 3,
     image:"https://static.toiimg.com/photo/msid-71503575/71503575.jpg?1434646", 
      name: "Chapati",
      price: "15",
      description:"Chapati is the quintessence of the Indian cuisine so much so that no meal is complete without this Indian flatbread. Prepared with the goodness of whole wheat flour, water, salt and ghee, this simple Indian bread goes well with everything. "
    },
     { id: 4,
     image:"https://www.196flavors.com/wp-content/uploads/2020/09/dahi-1-FP-500x500.jpeg", 
      name: "Curd",
     price: "40",
     description:"Curds are one of the best probiotic foods, which have live microorganisms, present in it, which is needed for the human body. The power and strength provided by curd to the metabolism results in enhanced immunity. "
    },
     { id: 5,
        image:"https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800", 
        name: "Gulab Jamun",  
        price: "60",
        description:"This delicious sweet treat consists of soft, melt-in-your-mouth, fried dumplings that are traditionally made of thickened or reduced milk and then soaked in a sugar syrup made with rose water."
    },  
    { id: 6,
     image:"https://chefsmandala.com/wp-content/uploads/2018/04/Indian-Lemon-Pickle.jpg", 
     name: "Pickle",
     price: "10",
     description:" Achar is a recipe which is sour and makes for the tastiest accompaniment with any Indian meal because of the choice of spices that are used to make it. "
    }    
],
thali : [

]
    }


     const userSlice = createSlice({
        name : "counter",
        initialState,
        reducers: {
            addToThali : (state , action) => {
              state.thali.push(action.payload)
             },
            removeItem : (state , action)=>{
                state.thali.splice(action.payload , 1)
            },

        }
    })

export  const { addToThali , removeItem } = userSlice.actions ;
export default  userSlice.reducer 

