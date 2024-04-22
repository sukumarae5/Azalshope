import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import Button from 'react-bootstrap/Button';
import Carousel1 from 'react-bootstrap/Carousel';
import image1 from '../../assets/sliderimage1.png';
import image2 from '../../assets/sliderimage2.png';
import image3 from '../../assets/sliderimage4.png';
import image4 from '../../assets/sliderimage3.png';
import { FaRupeeSign } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';
const Carousel = () => {
  return (
<Carousel1 data-bs-theme="light">
    <Carousel1.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel1.Caption style={{marginRight:"550px",marginTop:"100px",color:"white"}}>
        <h5>DISCOVER ALL </h5>
      
      </Carousel1.Caption>
      <Carousel1.Caption style={{marginLeft:"600px",marginTop:"100px",color:"white"}}>
        <h5>LAST FASHION </h5>
      
      </Carousel1.Caption>
    </Carousel1.Item>
    <Carousel1.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />
      <Carousel1.Caption style={{textAlign:"center",marginRight:"300px"}}>
        <h5 style={{fontsize:"30px",color:"black"}}>Get</h5>
        <p><span style={{fontsize:"30px",color:"black"}}><Badge bg="danger" pill><FaRupeeSign />750</Badge>

</span><span style={{fontsize:"10px",color:"#0fe7f2"}}>off</span></p>
        <Button variant="outline-primary" >CODE PT750</Button>{' '}
        <p style={{fontsize:"30px",color:"#3ba105"}}>*on minimum Cart value of <FaRupeeSign />3499</p>
      </Carousel1.Caption>
    </Carousel1.Item>
    <Carousel1.Item>
      <img 
        className="d-block w-100"
        src={image4}
        alt="First slide"
      />
      <Carousel1.Caption style={{textAlign:"left",margin:"30px"}}>
        <h5><span style={{color:"#804000"}}>Naver Befor Deals on Laptops by</span> <br/>Hp AMD Ryzen 7000 series processors
        ,15.6-inch<br/>From <span style={{color:"white",fontsize:"30px"}}><FaRupeeSign />37,000</span><Badge  bg="success">
        10% off
      </Badge><br/>
        <span style={{color:"yellow"}}> <IoStarSharp /><IoStarSharp /><IoStarSharp /><FaStarHalfAlt /><FaRegStar />
</span><br/>

</h5><b/>
<Button variant="outline-primary">Buy Now</Button>{' '}<br/><br/>
<p style={{marginTop:"6px"}}>Up to 24 m No Cost EMI |Exchange Off*<br/>*T&c Apply.</p>

      </Carousel1.Caption>
      
    </Carousel1.Item>
    <Carousel1.Item>
      <img
        className="d-block w-100"
        src={image3}
        alt="Third slide"
      />
      <Carousel1.Caption style={{marginLeft:"70px"}}>
        <h5 style={{color:"white"}}><span style={{color:"blue",fontsize:"307px"}}>Vivo</span> <span style={{color:"white"}}>5G</span></h5>
        <p style={{color:"white"}}>
         High Speed perfomance
        </p>
        <p style={{color:"white"}}>
          New Launch......
        </p>
      </Carousel1.Caption>
    </Carousel1.Item>
  </Carousel1>  )
}

export default Carousel