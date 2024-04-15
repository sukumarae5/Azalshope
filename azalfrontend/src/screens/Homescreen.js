import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import img1 from '../assets/laptop.jpeg';
import { useDispatch } from "react-redux";
import { addcartitemRedux } from "../redux/productsslice/productslice";

const Homescreen = ({id,brand,description,image,rating,title,thumbnail,price}) => {
  const data = useSelector((state) => state.products.allProducts);
  
  const dispatch=useDispatch()
  // const click=()=>{
  //   dispatch(addcartitemRedux({
  //  id:id,
  //   brand:brand,
  //   description:description,
  //    image:image,
  //    rating:rating,
  //    title:title,
  //    thumbnail:thumbnail,
  //   price:price
  //   }))
  // }

  const [selectedItem, setSelectedItem] = useState([]);
  const [filterProduct, setFilterProduct] = useState(data);
  function getRating(value){
    const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(
        <span key={i} style={{ color: "gold" }}>
          &#9733;
        </span>
      );
    } else {
      stars.push(<span key={i}>&#9734;</span>);
    }
  }

  return <div>{stars}</div>;
  }
  const category = [
    ...new Set(
      data.map((ele) => {
        return ele.category;
      })
      ),
    ];
    
    console.log(filterProduct);

  function handleCategory(selectedCategory){
    if(selectedItem.includes(selectedCategory)){
      let filters = selectedItem.filter((el)=> el!== selectedCategory);
      setSelectedItem(filters)
    }else{
      setSelectedItem([...selectedItem, selectedCategory])
    }
  }
  useEffect(()=>{
    filterProducts()
  },[selectedItem]);

  function filterProducts(){
    if(selectedItem.length>0){
      let tempItem = selectedItem.map((selectedCategory)=>{
        let temp = data.filter((item)=> item.category === selectedCategory)
        return temp;
      });
      setFilterProduct(tempItem.flat())
    }else{
      setFilterProduct([...data])
    }
  }
  return (
    <>
      <div className="text-center font-weight-bold">Homescreen</div>
      <div className="buttons-container">
        {category.map((category, idx) => (
          <button
            onClick={() => handleCategory(category)}
            className={`Homescreen-button ${
              selectedItem?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{display:"grid",gridTemplateRows:"1fr ", gridTemplateColumns:"repeat( auto-fill,minmax(350px,1fr))"}}>
        {filterProduct.map((item,idx)=>(
          <div 
          key={`items-${idx}`} className="item"
          >
            <img classname="img1" id="img1"
            src={img1}/>
            <p>{item.title}</p>
            <h4>{item.brand}</h4>
         
            <p>Stock:{item.stock}</p>
           <b><p>Price:&#8377;{item.price}</p></b>
           <p>{item.discountPercentage}%OFF</p>
            <p>{getRating(item.rating)}</p>
            <p className="category">{item.category}</p>
            
            <button onClick={ ()=>{
    dispatch(addcartitemRedux({
   id:item.id,
    brand:item.brand,
    description:item.description,
     image:img1,
     rating:item.rating,
     title:item.title,
     thumbnail:item.thumbnail,
    price:item.price
    }))
  }} className='btn btn-primary'>Add to Cart</button>
          </div>
        ))}
      </div>
    </> 
  );
};

export default Homescreen;
