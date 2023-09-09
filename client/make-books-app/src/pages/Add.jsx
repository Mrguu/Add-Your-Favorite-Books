import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [books, setBooks] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setBooks((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://add-your-fav-books-server.onrender.com/books",
        books
      );
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full bg-sky-500 flex justify-center items-center">
      <div className="py-5 flex flex-col justify-center items-center gap-5 bg-sky-600 drop-shadow-2xl rounded-xl md:w-1/3 w-11/12 my-20 p-3 mb-20">
        <div className="text-2xl font-bold text-sky-50">Add Book</div>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-full"
        />
        <textarea
          type="text"
          rows="6"
          placeholder="description ..."
          onChange={handleChange}
          name="desc"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-full"
        />
        <input
          type="text"
          placeholder="current price"
          onChange={handleChange}
          name="price"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-full"
        />
        <input
          type="link"
          accept=".png, .jpg, .jpeg ,.html"
          placeholder="image URL"
          onChange={handleChange}
          name="cover"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-full"
        />
        <button
          className="px-3 py-1 rounded-lg font-bold bg-sky-800 text-white md:w-5/6 w-full hover:bg-sky-500"
          onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Add;
