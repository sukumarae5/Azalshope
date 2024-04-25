import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { AiFillDelete } from "react-icons/ai";
import Pagination from "react-bootstrap/Pagination";
import { useNavigate } from "react-router-dom";
import { deleteProductRedux } from "../../redux/productsslice/productslice";

const Products = () => {
  const dispatch = useDispatch();
  const pdata = useSelector((state) => state.products.allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 13;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = pdata.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(pdata.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();
  const admin = useSelector((state) => state.users);
  useEffect(() => {
    if (admin.username !== "admin") {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function deleteItem(id) {
    try {
      await fetch(
        `https://ecommerce-sandy-omega.vercel.app/deleteproduct/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      // Dispatch action to update Redux state
      dispatch(deleteProductRedux(id));

      setCurrentPage(1); // Reset to first page after deletion
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div style={{ width: "100%", overflowX: "auto", marginLeft: "-68px" }}>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>id</th>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.title}</td>
                <td>{ele.price}</td>
                <td>{ele.stock}</td>
                <td>{ele.brand}</td>
                <td>{ele.category}</td>
                <td className="text-center pointer">
                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      deleteItem(ele.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div style={{ float: "right" , marginRight:"20px"}}>
        <Pagination>
          <Pagination.Prev
            onClick={() =>
              setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
            }
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              setCurrentPage((prev) => (prev === totalPages ? prev : prev + 1))
            }
          />
        </Pagination>
      </div>
      <div style={{ float: "left" ,marginLeft:'20px'}}>
        <button className="btn btn-primary">Add Item</button>
      </div>
    </div>
  );
};

export default Products;
