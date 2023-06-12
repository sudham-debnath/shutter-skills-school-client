/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Classes = () => {
  const [classes, setClasses] = useState([]);

  console.log(classes);

  useEffect(() => {
    fetch('http://localhost:5000/add-class')
      .then(response => response.json())
      .then(data => {
        setClasses(data.classes);
      })
    
  }, []);

  const handleSelect = (classId) => {
    const isLoggedIn = true; // Assuming user is logged in
    const isAdminOrInstructor = true; // Assuming user is logged in as admin or instructor

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
    <div>
      {classes.map(cls => (
        <div key={cls.id} className={cls.availableSeats === 0 ? 'class-card red' : 'class-card'}>
          <img src={cls.image} alt={cls.name} />
          <h3>{cls.name}</h3>
          <p>Instructor: {cls.instructor}</p>
          <p>Available Seats: {cls.availableSeats}</p>
          <p>Price: ${cls.price}</p>
          <button
            onClick={() => handleSelect(cls.id)}
            disabled={cls.availableSeats === 0 }
          >
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default Classes;
