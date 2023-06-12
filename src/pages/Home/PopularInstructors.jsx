/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";

const PopularInstructors = () => {
  return (
    <section className="py-6 sm:py-12 mx-14 text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Popular Instructors</h2>
          <p className="text-sm text-gray-600">
           They our popular Instructor
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col bg-gray-900">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label=""
            >
              <img
                alt=""
                className="object-cover w-full h-52 bg-gray-500"
                src="https://source.unsplash.com/500x500/?man?1"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              <a
                rel="noopener noreferrer"
                href="#"
                aria-label=""
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs tracking-wider uppercase hover:underline text-violet-500"
              >
                Natural Photography Instructor
              </a>
              <h3 className="flex-1 py-2 pt-4 text-white text-lg font-semibold leading-snug">
                Mr.Harry Potter
              </h3>
              <h3 className="flex-1 py-2 text-white text-lg font-semibold leading-snug">
                Gmail: harry@gmail.com
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
                <span>June 1, 2023</span>
                <span>2.1K Students</span>
                <span>
                <a
                    href="javascript:void(0)"
                    className="focus:outline-none focus:underline flex items-center cursor-pointer text-white hover:text-gray-200 hover:underline"
                  >
                    <p className="pr-2 text-sm font-medium leading-none">
                    See Classes
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            
          </article>
     
      
      
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
