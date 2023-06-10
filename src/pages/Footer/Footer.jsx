/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-black pt-14 px-14 ">
      <div className="grid justify-items-center lg:grid-cols-5 sm:grid-cols-1 gap-6 pb-5 text-black">
        <div>
        <img className="w-16" src="/public/lense.png" alt="" />
          <h1 className="text-2xl font-bold">Shutter Skills School</h1>
          {/* <p className="my-5">
          Shutter Skills School is a haven for toy enthusiasts imagination in
            children of all ages.
          </p> */}
          
        </div>
        <div>
          <h1 className="text-2xl font-semibold">About Us</h1>
          <p>About Our School</p>
          <p>Best Instructors</p>
          <p>Best Classes</p>
          <p>Best Students</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Category</h1>
          <p>Nature Photography</p>
          <p>Wildlife Photography</p>
          <p>Food Photography</p>
          <p>Wedding Photography</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Support</h1>
          <p>Help Desk</p>
          <p>Support</p>
          <p>Become Our Contributor</p>
          <p>Our Developers</p>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Address</h1>
          <p>524, Broadway</p>
          <p>12th NY Street</p>
          <p>New York</p>
          <p>+1 777 - 978 - 5570</p>
        </div>
      </div>

      <div className="lg:flex justify-between items-center py-5 border-t-2 ">
        <p> © 2023 Shutter Skills School. All Rights Reserved</p>
        <a href="#">
          <img src="https://i.ibb.co/hWrj59T/Group-9969.png" alt="" />
        </a>
        <p>Powered by Shutter Skills School</p>
      </div>
    </div>
  );
};

export default Footer;