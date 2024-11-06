import React, { useEffect } from 'react';
import Cards from './Cards';

import { Link } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
function Course() {
  const[book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
    try {
    const res=await  axios.get("http://localhost:4001/book");
    console.log(res.data)
    setBook(res.data)
    } catch (error) {
      console.log(error)
    }
    };
    getBook();
  },[]);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font md:text-4x  ">
            We are delighted to have you {" "}
            <span className="text-pink-500"> Here!:)</span>
          </h1>
          <p className="mt-12  ">Welcome to Bookhaven, your ultimate destination for discovering a world of stories, knowledge, and inspiration! Whether you’re a passionate reader, a curious learner, or someone searching for the perfect gift, Bookhaven is here to fulfill all your literary desires.

Dive into our carefully curated collection of books across every genre imaginable—classics, thrillers, self-help, fantasy, and beyond. With our easy-to-navigate store and personalized recommendations, finding your next great read has never been simpler. At Bookhaven, we believe in the magic of books and the joy they bring, and we’re dedicated to making your reading journey unforgettable.

Thank you for choosing Bookhaven. Happy reading! </p>
         <Link to="/">
         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
         </Link>
        </div>
        <div className = "mt-12 grid grid-cols-1 md:grid-cols-4">
          {
           book.map((item)=>(
            <Cards key = {item.id} item = {item}/>
           ))
          }
        </div>
      </div>
    </>
  );
}

export default Course;
