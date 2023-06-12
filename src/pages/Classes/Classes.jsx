/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../provider/AuthProvider';

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch classes data from the server
    axios
      .get('http://localhost:5000/classes')
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelect = (classId) => {
    const isLoggedIn = user !== null; // Check if the user is logged in
    const isAdminOrInstructor = user?.isAdminOrInstructor; // Check if the user is an admin or instructor

    if (!isLoggedIn) {
      alert('Please log in before selecting the course.');
      return;
    }

    if (isAdminOrInstructor) {
      alert('As an admin or instructor, you cannot select this course.');
      return;
    }

    // Handle course selection logic here
    console.log('Selected class:', classId);
  };

  return (
    <div className='border border-gray-950 w-60 m-6'>
      {classes.map((cls) => (
        <div key={cls.id} className={cls.availableSeats === 0 ? 'class-card red' : 'class-card'}>
          <img src={cls.image} alt={cls.name} />
          <h3>{cls.name}</h3>
          <p>Instructor: {cls.instructor}</p>
          <p>Available Seats: {cls.availableSeats}</p>
          <p>Price: ${cls.price}</p>
          <button
            onClick={() => handleSelect(cls.id)}
            disabled={cls.availableSeats === 0}
          >
            <select className="select select-info w-full max-w-xs">
  <option disabled selected>Select</option>
  <option>Admin</option>
  <option>Instructor</option>
  
</select>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Classes;
