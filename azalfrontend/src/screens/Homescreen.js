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
  const dispatch = useDispatch()
  //Hey there
  
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
            <div className="d-flex align-items-center justify-content-center">
            <button
              onClick={() => {
                dispatch(
                  addcartitemRedux({
                    id: id,
                    brand: brand,
                    description: description,
                    image: image,
                    rating: rating,
                    title: title,
                    thumbnail: thumbnail,
                    price: price,
                  })
                );
              }}
              className="CartBtn"
              >
              <span class="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  class="cart"
                  >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p class="text">Add to Cart</p>
            </button>
          </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Homescreen;
