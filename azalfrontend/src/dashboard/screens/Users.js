import React, { useRef, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { Button, Col, Row, Modal, Pagination } from "react-bootstrap";
import Table from "react-bootstrap/Table";


const Users = () => {
  const [admindata, setAdmindata] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = () => {
    fetch("https://ecommerce-sandy-omega.vercel.app/users")
      .then((res) => res.json())
      .then((res1) => setAdmindata(res1));
  };

  async function deleteItem(id) {
    await fetch(`https://ecommerce-sandy-omega.vercel.app/deleteuser/${id}`, {
      method: "DELETE",
    });
    console.log("deleted");
    fetchData();
  }

  // Logic for displaying current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = admindata.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // modal
  const [baseImage, setBaseImage] = useState("");
  const fileInputRef = useRef(null);

  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
    phone: "",
    gender: "",
  });
  const {
    firstName,
    lastName,
    email,
    phone,
    username,
    password,
    confirmpassword,
  } = register;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const finalusers = {
      ...register,
      image: baseImage,
    };
    console.log(finalusers);
    const fdata = await fetch(
      "https://ecommerce-git-main-sukumarae5s-projects.vercel.app/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalusers),
      }
    );
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <div style={{ width: "100%", overflowX: "auto", marginLeft: "-68px" }}>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.username}</td>
                <td>{e.password}</td>
                <td>{e.gender}</td>
                <td className="text-center pointer">
                  <AiFillDelete
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      deleteItem(e.id);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Pagination */}
      <div style={{ float: "right" }}>
        <Pagination>
          <Pagination.Prev
            onClick={() =>
              setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
            }
          />
          <ul className="pagination justify-content-end">
            {Array.from(
              { length: Math.ceil(admindata.length / usersPerPage) },
              (_, i) => (
                <li
                  key={i}
                  className={
                    currentPage === i + 1 ? "page-item active" : "page-item"
                  }
                >
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
          <Pagination.Next
            onClick={() =>
              setCurrentPage((prev) =>
                prev === Math.ceil(admindata.length / usersPerPage)
                  ? prev
                  : prev + 1
              )
            }
          />
        </Pagination>
      </div>
      <div>
        <center>
          <Button
            style={{ float: "left", marginLeft: "20px" }}
            className="text-white"
            onClick={handleShow}
          >
            ADD USER DATA
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title> Add User Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div className="d-flex flex-direction-column">
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="image"
                        // style={{ display: "none" }}
                        onChange={handleImageChange}
                        placeholder="image"
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        type="text"
                        placeholder="firstName"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        type="text"
                        placeholder="lastName"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="email"
                        value={email}
                        onChange={handleChange}
                        type="text"
                        placeholder="email"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        type="text"
                        placeholder="phone"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="username"
                        value={username}
                        onChange={handleChange}
                        type="text"
                        placeholder="username"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="text"
                        placeholder="password"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Col sm="12">
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={handleChange}
                        type="text"
                        placeholder="confirmpassword"
                        style={{ paddingLeft: "40px", borderRadius: "10px" }}
                      />
                    </div>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Row
                    xs={4}
                    className="d-flex align-items-center justify-content-start"
                  >
                    <Col>
                      <Form.Check
                        value="male"
                        type="radio"
                        label="Male"
                        name="gender"
                        id="male"
                        className="mr-3"
                        onChange={handleChange}
                        style={{ color: "black" }}
                      />
                    </Col>
                    <Col>
                      <Form.Check
                        value="female"
                        onChange={handleChange}
                        type="radio"
                        label="Female"
                        name="gender"
                        id="female"
                        style={{ color: "black" }}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 my-4">
                  <Row
                    xs={4}
                    className="d-flex align-items-center justify-content-start"
                  ></Row>
                </Form.Group>
                <Form.Group as={Col}>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit">
                    Add User Data
                  </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </center>
      </div>
    </div>
  );
};

export default Users;
