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
  console.log(cartdata)
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
    <div>
      <Row>
        <div className='d-flex justify-content-flex-Around mx-2'>
          <Col sx={1}>
            <div>
              <h4 style={{ fontFamily: 'lnria serif', fontSize: '25px', marginLeft: '10%' }}>MyCart</h4>
            </div>
          </Col>
          <Col sx={11}>
            <div className='mx-3'>
              <InputGroup className='mb-1'>
                <InputGroup.Text style={{ width: '7%', borderColor: '#93bbfa', borderWidth: '3px', borderRadiusLeft: '1px' }} id='basic-addon1' onClick={() => {}}>
                  <i style={{ position: 'relative', fontSize: '100%' }}><FaSearch /></i>
                </InputGroup.Text>
                <Form.Control style={{ width: '5%', borderColor: '#93bbfa', borderWidth: '2px', borderRadius: '1px' }} placeholder='search products' aria-label='Username' aria-describedby='basic-addon1' />
                <div><i style={{ fontSize: '200%' }} onClick ={handleDeleteSelected} > <MdDelete /></i></div>
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
                <div style={{ width: '100%', boxShadow: ' 1px 1px 1px 1px #facd52', color: 'red', textAlign: 'center' }} ><h6>All {cartdata.length}</h6></div>
              </Col>
            </div>
            {cartdata.map((ele) => (
              <Card style={{ width: '100%', boxShadow: ' 2px 2px 2px 2px #888888' }} className='mt-3' key={ele.id}>
                <div className='d-flex flex-row justify-content-Around mt-3 mx-3'>
                  <div>
                    <input type='checkbox'
                    onChange={()=>{
                      handleCheckboxChange(ele.id)

                    }}
                     style={{ margin: '10px' }} />
                    <img
                      src={ele.image}
                      alt='Product'
                      width='130px' height='140px'
                    />
                  </div>
                  <div>
                    <h6>Brand: {ele.brand} <br/> </h6>
                    <p>Title: {ele.title}</p>
                    <p>{ele.description}</p>
                    <p><span><FaRupeeSign /></span><span style={{ color: 'red' }}>{ele.price}</span></p>
                  </div>
                  <div style={{ marginTop: '10%', marginLeft: '23px' }}>
                    <p>
                      <Button variant='info' onClick={() => { dispatch(incrqtyRedux(ele.id)) }}>+</Button>
                      {ele.qty}
                      <Button variant='info' onClick={() => { dispatch(decrqtyRedux(ele.id)) }}>-</Button>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </Col>
          <Col sx={4}>
            <div>
              <Card style={{ width: '90%' }} className='mt-3 mx-9 p-2'>
                <div>
                  <h2>Cart Total:</h2>
                  <p>Total Quantity: {cartdata.reduce((acc, ele) => acc + ele.qty, 0)}</p>
                  <p>Total Amount:<span><FaRupeeSign />  {total}</span></p>
                  <Button variant='danger'>Place Order</Button>
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