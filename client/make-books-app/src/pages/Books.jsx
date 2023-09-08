import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://add-your-fav-books-server.onrender.com/books/${id}`
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://add-your-fav-books-server.onrender.com/books"
        );
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBooks();
  }, []);
  return (
    <div className="w-full h-full bg-sky-500 flex flex-col items-center">
      <div className="sm:text-3xl text-sm text-white font-bold my-10">
        Add your favorite book
      </div>
      <div className="w-5/6 bg-sky-700 text-black sm:p-10 p-3 drop-shadow-2xl flex flex-col md:flex-row md:items-stretch items-center justify-center rounded-lg flex-wrap sm:gap-5 gap-2">
        {books.map((book) => (
          <div
            key={book.id}
            className="sm:p-3 p-1 bg-sky-50 sm:w-60 w-40 flex flex-col justify-center items-center rounded text-center drop-shadow-2xl">
            {book.cover && (
              <img src={book.cover} className="w-full object-cove" alt="" />
            )}

            <div className="sm:text-md text-sm font-bold my-3 border-b border-solid border-sky-950">
              {book.title}
            </div>
            <div className=" text-xs border-b border-solid border-sky-950">
              {book.desc}
            </div>
            <div className="border-b w-full border-solid border-sky-950 font-bold">
              $ {book.price}
            </div>
            <div className="my-5 w-full flex justify-around">
              <button
                className="hover:bg-sky-500 sm:px-2 p-1 sm:text-md text-xs rounded-lg   bg-sky-400 font-bold"
                onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <Link
                className="hover:bg-sky-500 sm:px-2 p-1 sm:text-md text-xs  rounded-lg   bg-sky-400 font-bold"
                to={`/update/${book.id}`}>
                <button>Update</button>
              </Link>
            </div>
          </div>
        ))}
        <div className="p-3  bg-sky-50 font-bold hover:bg-slate-200 sm:w-60 w-40  flex flex-col justify-center items-center rounded text-center drop-shadow-2xl">
          <Link to="/add">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 128 128">
                <path
                  fill="#fff"
                  d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"></path>
                <path
                  fill="#6fccdd"
                  d="M64 25A39 39 0 1 0 64 103A39 39 0 1 0 64 25Z"></path>
                <path
                  fill="none"
                  stroke="#444b54"
                  strokeMiterlimit="10"
                  strokeWidth="6"
                  d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"></path>
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="6"
                  d="M64 42L64 86M42 64L86 64"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Books;
