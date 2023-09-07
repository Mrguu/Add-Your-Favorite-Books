import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Update() {
  const [books, setBooks] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });

  const Navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBooks((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    console.log("Books to update:", books);
    console.log("Book ID to update:", bookId);
    e.preventDefault();
    try {
      await axios.put("http://localhost:5000/books/" + bookId, books);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full md:h-screen h-full bg-sky-500 flex justify-center items-center">
      <div className="py-5 flex flex-col justify-center items-center gap-5 bg-sky-600 drop-shadow-2xl rounded-xl md:w-1/3 w-5/6 my-5 p-3">
        <div className="text-2xl font-bold text-sky-50">Update Your Book</div>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-11/12"
        />
        <textarea
          type="text"
          rows="6"
          placeholder="description ..."
          onChange={handleChange}
          name="desc"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-11/12"
        />
        <input
          type="text"
          placeholder="price"
          onChange={handleChange}
          name="price"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-11/12"
        />
        <input
          type="link"
          accept=".png, .jpg, .jpeg ,.html"
          placeholder="image URL"
          onChange={handleChange}
          name="cover"
          className="px-3 py-2 rounded-lg text-xs md:w-5/6 w-11/12"
        />
        <button
          className="px-3 py-1 rounded-lg font-bold bg-sky-800 text-white md:w-5/6 w-11/12 hover:bg-sky-500"
          onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Update;
