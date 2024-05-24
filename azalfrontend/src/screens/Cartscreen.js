import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRupeeSign } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux';
import { removeRedux, incrqtyRedux, decrqtyRedux } from '../redux/productsslice/productslice';
import { useState } from 'react';
const Cartscreen = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.products.cartitem);
  const total = cartdata.reduce((acc, ele) => acc + Number(ele.total), 0);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
        
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const handleDeleteSelected = () => {
    dispatch(removeRedux(selectedItems));
    setSelectedItems([]); 
  };


  return (
    <div style={{backgroundColor:"#dfe3e3"}}>
      <Row>
        <div className='d-flex justify-content-flex-Around mx-2'>
          <Col sx={1}>
            <div>
              <h4 style={{ fontFamily: 'lnria serif', fontSize: '25px', marginLeft: '10%' }}>MyCart</h4>
            </div>
          </Col>
          <Col sx={11}>
            <div className='mx-3 mt-1' >
              <InputGroup className='mb-1'>
                <InputGroup.Text style={{ width: '7%', borderColor: '#93bbfa', borderWidth: '3px', borderRadiusLeft: '1px' }} id='basic-addon1' onClick={() => {}}>
                  <i style={{ position: 'relative', fontSize: '100%' }}><FaSearch /></i>
                </InputGroup.Text>
                <Form.Control style={{ width: '5%', borderColor: '#93bbfa', borderWidth: '2px', borderRadius: '1px' }} placeholder='search products' aria-label='Username' aria-describedby='basic-addon1' />
                <div><i style={{ fontSize: '200%' }} onClick={handleDeleteSelected}> <MdDelete /></i></div>
              </InputGroup>
            </div>
          </Col>
        </div>
      </Row>
      <div>
        <Row>
          <Col xs={8}>
            <div className='d-flex flex-row justify-content-Around mt-3' >
              <Col xs={6}>
                <div style={{ width: '100%', boxShadow: ' 1px 1px 1px 1px red', color:'black', backgroundColor:"whitesmoke",textAlign: 'center' }} ><h6>All {cartdata.length}</h6></div>
              </Col>
            </div>
            {cartdata.map((ele) => (
              <Card style={{ width: '100%', boxShadow: ' 2px 2px 2px 2px #888888',backgroundColor:"white"}} className='mt-3' key={ele.id}>
                <div className='d-flex flex-row justify-content-Around mt-3 mx-3' >
                  <div>
                    <input  onChange={()=>{
                      handleCheckboxChange(ele.id)

                    }} type='checkbox'  style={{ margin: '10px' }} />
                    <img
                      src={ele.image}
                      alt='Product'
                      width='200px' height='200px'
                    />
                  </div>
                  <div style={{marginLeft:"6%"}}>
                    <h6> {ele.description} <br/> </h6>
                    <p>( {ele.title})</p>
                    
                    <p style={{color:"green"}}>in stock</p>
                    <p style={{fontSize:"15px"}}>Purchase Above <span ><FaRupeeSign /></span>1000 <br/>get FREE Deliver</p>
                    
                    <p>
                      <Button style={{width:"30px",height:"30px",padding:"1px"}}variant='info' onClick={() => { dispatch(incrqtyRedux(ele.id)) }}>+</Button>
                      {ele.quantity}
                      <Button style={{width:"30px",height:"30px",padding:"1px"}} variant='info' onClick={() => { dispatch(decrqtyRedux(ele.id)) }}>-</Button>
                    </p>
                    <p> Available stock {ele.stock}<span style={{color:"green",fontSize:"9px"}}> Only</span></p>
                  </div>
                  <div style={{ color: 'black', marginLeft:"6%"}}><p>
                    Price
                  </p>
                    <p><span><FaRupeeSign /></span><span style={{ color: 'black' }}>{ele.price}</span></p>
                  </div>
                  </div>
              </Card>
            ))}
          </Col>
          <Col sx={4}>
            <div style={{marginTop:"15%"}}> 
              <Card style={{ width: '90%',height:"90%",boxShadow: ' 2px 2px 2px 2px #888888'}} className='mt-3 mx-9 p-2'>
                <div>
                  <h2 style={{fontSize:"20px",marginLeft:"5%"}}>Sub Total({cartdata.reduce((acc, ele) => acc + ele.quantity, 0)}items):</h2>
                  
                  <p style={{marginLeft:"10%"}}>Total Amount:<span style={{fontSize:"20px",marginLeft:"0%"}}><FaRupeeSign />{total}.00</span></p>
                  <p style={{fontSize:"17px",marginLeft:"10%"}}><input type="checkbox"/><span style={{marginLeft:"10px"}}>This order containes a gift</span></p>
                  <Button variant='warning' style={{width:"350px",margin:"10px",height:"40px",borderRadius:"10px"}}>Proceed To Buy</Button>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Cartscreen;