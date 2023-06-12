/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "./Slider";
import PopularInstructors from "./PopularInstructors";
import PopularClasses from "./PopularClasses";

const Home = () => {
  return (
    <div>
  
      {/* Slider Section */}
      <Slider></Slider>
      
      {/* Popular Classes Section */}
     <PopularClasses></PopularClasses>

      {/* Popular Instructors */}
      <PopularInstructors></PopularInstructors>


          
      {/* Photo of the Week */}
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/WfnFzKy/hands-taking-slices-italian-cuisine-pizza.png"
            className="max-w-sm rounded-lg shadow-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Photo of the Week</h1>
            <p className="py-6 font-bold">This photograph has taken by Mr.Harry</p>
            <button className="btn btn-neutral">View Details</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
