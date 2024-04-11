import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from '../assets/cartimage1.png';
import image2 from '../assets/Bata shoes image.png';
import image3 from '../assets/Ear pods image.png';
import image4 from '../assets/home image.png';
import { FaRupeeSign } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Cartscreen = () => {
  return (
    <div>
      <Row>
    <div className='d-flex justify-content-flex-Around mx-2'>
      <Col sx={1}>
      <div>
        <h4 style={{fontFamily:"lnria serif",fontSize:"25px",marginLeft:"10%"}}>MyCart</h4>
      </div>
      </Col>
<Col sx={11}>
      <div className="mx-3">
      {/* <i style={{position: "relative",top:"50%", left:"79%",  transition: "translatey(-50%)"}}><FaSearch /></i> */}
{/* <input type ="text" placeholder="search products"  style={{width:"70%",height:"80%",marginLeft:"10%",backgroundColor:"#f5f3f2"}}/> */}

<InputGroup className="mb-1">
        <InputGroup.Text style={{width:"7%",borderColor:"#93bbfa",borderWidth:"3px",borderRadiusLeft:"1px"}} id="basic-addon1" onClick={{}}><i style={{position: "relative",fontSize:"100%"}}><FaSearch /></i></InputGroup.Text>
        <Form.Control style={{width:"5%",borderColor:"#93bbfa",borderWidth:"2px",borderRadius:"1px"}}
          placeholder="search products"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <i style={{fontSize:"200%"}}> <MdDelete /></i>
      </InputGroup>


 


</div>
</Col>
    </div>
  
  
</Row>
<div>
  <Row>
    <Col xs={8}>
        <div className='d-flex flex-row justify-content-Around mt-3'>
      <Col xs={6}>

      <div style={{width:"100%",boxShadow: " 1px 1px 1px 1px red",color:"red",textAlign:"center" }} ><h6>All 4</h6></div>
      </Col>
      <Col xs={6}>
      <div style={{width:"100%",boxShadow: " 1px 1px 1px 1px #888888",color:"black",textAlign:"center" }} ><h6>Buy Again</h6></div>
      </Col>
        </div>
    <Card style={{width:"100%",boxShadow: " 2px 2px 2px 2px #888888" }} className="mt-3">  
  <div className='d-flex flex-row justify-content-Around mt-3 mx-3'> 
<div>
<input type="checkbox" style={{margin:"10px"}} />      <img
        
        src={image1}
        alt="First slide"
        width="130px" height="140px"
        />

</div>
<div>
<h6>Apple iPhone 14 <br/> (Starlight, 128 GB)</h6>    
      <p>Bank OfferGet ₹25* instant discount <br/> for the 1st Flipkart Order 
      </p>  
      <p><span><FaRupeeSign /></span><span style={{color:"red"}}>58,999</span></p>
</div>
<div style={{marginTop:"5%",marginLeft:"23%"}}>
  <p>

  <Button variant="outline-secondary">+</Button>
  1
  <Button variant="outline-secondary">-</Button>
  </p>
</div>
  </div>
        </Card> 
        <Card style={{width:"100%",boxShadow: " 2px 2px 2px 2px #888888" }} className="mt-3">  
  <div className='d-flex flex-row justify-content-Around mt-3 mx-3'> 
<div>
<input type="checkbox" style={{margin:"10px"}} />      
<img src={image3} alt="First slide"width="130px" height="140px"/>

</div>
<div className='mx-2'>
<h6>Apple Airpods pro <br/> (white)</h6>    
      <p>Bank OfferGet ₹25* instant discount <br/> for the 1st Flipkart Order 
      </p>  
      <p><span><FaRupeeSign /></span><span style={{color:"red"}}>19,999</span></p>
</div>
<div style={{marginTop:"5%",marginLeft:"22%"}}>
  <p>

  <Button variant="outline-secondary">+</Button>
  1
  <Button variant="outline-secondary">-</Button>
  </p>
</div>
  </div>
  

        </Card> 
<Card style={{width:"100%",boxShadow: " 2px 2px 2px 2px #888888" }} className="mt-3">
  
  <div className='d-flex flex-row justify-content-Around mt-3 mx-3'> 
<div>
<input type="checkbox" style={{margin:"10px"}} />      <img
        
        src={image2}
        alt="First slide"
        width="130px" height="140px"
        />

</div>
<div className='mx-2'>
<h6>PUMA<br/> (peacoat-White)</h6>    
      <p> 
        puma Dwane runing Shoes For <br/>mens
      </p>  
      <p><span><FaRupeeSign /></span><span style={{color:"red"}}>999</span></p>
</div>
<div style={{marginTop:"5%",marginLeft:"25%"}}>
  <p><Button variant="outline-secondary">+</Button>1<Button variant="outline-secondary">-</Button>
  </p>
</div>
  </div>
        </Card> 
        <Card style={{width:"100%",boxShadow: " 2px 2px 2px 2px #888888" }} className="mt-3">  
  <div className='d-flex flex-row justify-content-Around mt-3 mx-3'> 
<div>
<input type="checkbox" style={{margin:"10px"}} />      <img
        
        src={image4}
        alt="First slide"
        width="130px" height="140px"
        />

</div>
<div className='mx-2'>
<h6>Gloshvi <br/> (3D Acrylic Flower)</h6>    
      <p>Bank OfferGet ₹25* instant discount <br/> for the 1st Flipkart Order 
      </p>  
      <p><span><FaRupeeSign /></span><span style={{color:"red"}}>399</span></p>
</div>
<div style={{marginTop:"5%",marginLeft:"22%"}}>
  <p>

  <Button variant="outline-secondary">+</Button>
  1
  <Button variant="outline-secondary">-</Button>
  </p>
</div>
  </div>
  

        </Card> 
    </Col>
   <Col sx={4}>
   <div>
   <Card style={{width:"90%" }} className="mt-3 mx-9 p-2">
        <div>
          <h2>Cart Total:</h2>
          <p>Total Quantity:4</p>
          <p>Total Amount:<span><FaRupeeSign /></span>21,878</p>
          <Button variant="danger">Place Order</Button>
        </div>
          </Card>
          <Card style={{width:"90%" }} className="mt-3 mx-9 px-5 py-2">
        <div>
        <img
        
        src={image2}
        alt="First slide"
        width="130px" height="140px"
        />
        <h6>PUMA(peacoat-White)</h6>  
          <p> <FaRupeeSign />21,878</p>
          <i style={{color:"#fc7703" }}>
          <IoIosStar />
          <IoIosStar />
          <FaStarHalfAlt />
          <FaRegStar />

          </i><br/>
          <Button variant="danger">Place Order</Button>
        </div>
          </Card>
   </div>
   </Col>
  </Row>
</div>

    </div>
  )
}

export default Cartscreen
