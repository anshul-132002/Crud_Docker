import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { Modal, Button, Tooltip, OverlayTrigger } from "react-bootstrap"; // For modal and tooltips

function User() {
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002")
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setShowModal(false);
    axios
      .delete("http://localhost:3002/deleteUser/" + id)
      .then((res) => {
        setUser(user.filter((u) => u._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleShowModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="container my-5 p-4 shadow-lg rounded bg-white">
      <h2 className="mb-4 text-center text-primary">User Management</h2>
      <h1 className="lead text-center">
        <b>Perform CRUD operations efficiently</b>
      </h1>
      <div className="text-end mb-4">
        <Link to="/create" className="btn btn-success px-4 py-2 shadow-sm">
          <strong>ADD +</strong>
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, id) => (
              <tr key={id} className="align-middle">
                <td>{id + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="text-center">
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-update">Update</Tooltip>}
                  >
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-sm btn-primary mx-1 shadow-sm"
                    >
                      <FaEdit /> Update
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-delete">Delete</Tooltip>}
                  >
                    <Button
                      onClick={() => handleShowModal(user)}
                      className="btn btn-sm btn-danger mx-1 shadow-sm"
                    >
                      <FaTrashAlt /> Delete
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <b>{selectedUser && selectedUser.name}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDelete(selectedUser._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default User;
