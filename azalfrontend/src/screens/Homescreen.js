import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";

const Homescreen = () => {
  const data = useSelector((state) => state.products.allProducts);
  
  const [selectedItem, setSelectedItem] = useState([]);
  const [filterProduct, setFilterProduct] = useState(data);
  
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

      <div className="items-container">
      
        {filterProduct.map((item,idx)=>(
          <div
          key={`items-${idx}`} className="item"
          >
            <p>{item.title}</p>
            <p className="category">{item.category}</p>
            
          </div>
        ))}
       
      </div>
    </>
  );
};

export default Homescreen;
