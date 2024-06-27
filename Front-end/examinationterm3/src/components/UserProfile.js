import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserProfile = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/userdetails')
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching user data: ' + error.message);
        setLoading(false);
      });
  }, []);

  const handleUpdate = (userId) => {
    console.log('Update user with ID:', userId);
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:5000/api/userdetails/${userId}`)
      .then(response => {
        console.log('User deleted:', response.data);
        setUserData(userData.filter(user => user._id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container p-5">
      {userData.length === 0 ? (
        <div className="alert alert-warning">No users found</div>
      ) : (
        <table className="table table-striped table-bordered table-sm">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Position</th>
              <th>Company</th>
              <th>Business Arena</th>
              <th>Employees</th>
              <th>Street + Nr</th>
              <th>Additional Info</th>
              <th>Zip Code</th>
              <th>Place</th>
              <th>Country</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(user => (
              <tr key={user._id}>
                <td>{user.title}</td>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.position}</td>
                <td>{user.company}</td>
                <td>{user.businessArena}</td>
                <td>{user.employees}</td>
                <td>{user.streetNr}</td>
                <td>{user.additionalInfo}</td>
                <td>{user.zipCode}</td>
                <td>{user.place}</td>
                <td>{user.country}</td>
                <td>{user.code} {user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>
                  <button 
                    className="btn btn-warning btn-sm mr-2 mb-2" 
                    onClick={() => handleUpdate(user._id)}>
                    Update
                  </button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserProfile;
