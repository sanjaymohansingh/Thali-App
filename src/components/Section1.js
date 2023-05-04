import Carousel from 'react-bootstrap/Carousel';


function Section1() {
  return (
    <div style={{backgroundColor:"  rgb(245, 92, 92)"}}>
    <div style={{ height:"30rem",width:"60rem" ,marginLeft:"20%"}}>
    <Carousel>
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202101/thali_660_300121121051.jpg"
          alt="First slide"
          style={{height :"30rem", width:"50rem"}}/>
        <Carousel.Caption>
        <h3 style={{color:"red", fontWeight:"700" , backgroundColor:"white" , width:"15rem", marginLeft:"13rem"}}>Maharaja Thali</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ivgiswpzux2zjomz9t5d"
          alt="Second slide"
          style={{height :"30rem", width:"30rem"}} />

        <Carousel.Caption>
          <h3 style={{color:"red", fontWeight:"700" , backgroundColor:"white" , width:"15rem", marginLeft:"13rem"}}>Veg Thali</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oecyzqehfysmfzczqeov"
          alt="Third slide"
          style={{height :"30rem", width:"30rem"}} />

        <Carousel.Caption>
          <h3 style={{color:"red", fontWeight:"700" , backgroundColor:"white" , width:"15rem", marginLeft:"13rem"}}>Special Thali</h3>
        
        </Carousel.Caption>
      
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Section1;