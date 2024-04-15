import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../App.css";
import { useDispatch } from "react-redux";
import { addcartitemRedux } from "../redux/productsslice/productslice";

const Homescreen = ({
  id,
  brand,
  description,
  image,
  rating,
  title,
  thumbnail,
  price,
}) => {
  const data = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users);
  if (userData !== "") {
    console.log(userData);
  }

  const [selectedItem, setSelectedItem] = useState([]);
  const [filterProduct, setFilterProduct] = useState(data);
  function getRating(value) {
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

  function handleCategory(selectedCategory) {
    if (selectedItem.includes(selectedCategory)) {
      let filters = selectedItem.filter((el) => el !== selectedCategory);
      setSelectedItem(filters);
    } else {
      setSelectedItem([...selectedItem, selectedCategory]);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function filterProducts() {
    if (selectedItem.length > 0) {
      let tempItem = selectedItem.map((selectedCategory) => {
        let temp = data.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilterProduct(tempItem.flat());
    } else {
      setFilterProduct([...data]);
    }
  }

  useEffect(() => {
    filterProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);
  return (
    <>
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

      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr ",
          gridTemplateColumns: "repeat( auto-fill,minmax(200px,1fr))",
        }}
      >
        {filterProduct.map((item, idx) => (
          <div
            key={`items-${idx}`}
            className="item"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              classname="image"
              id="img1"
              alt="img"
              src={item.images}
              style={{ height: "40%", width: "100%" }}
            />
            <p>{item.title}</p>
            <h4>{item.brand}</h4>

            <p>Stock:{item.stock}</p>
            <b>
              <p>Price:&#8377;{item.price}</p>
            </b>
            <p className="text-danger">{item.discountPercentage}%OFF</p>
            <p>{getRating(item.rating)}</p>
            <p className="category">{item.category}</p>
            <button onClick={ ()=>{
    dispatch(addcartitemRedux({
   id:id,
    brand:brand,
    description:description,
     image:image,
     rating:rating,
     title:title,
     thumbnail:thumbnail,
    price:price
    }))
  }} className='btn btn-primary'>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homescreen;
