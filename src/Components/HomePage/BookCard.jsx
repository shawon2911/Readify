import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  // console.log(book);
  return (
    <div>
      <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 border border-gray-300 shadow-md rounded-2xl py-2  space-y-4 mx-5 flex flex-col h-full">
        <figure className="bg-base-200 py-7 rounded-2xl mt-5 mx-7 ">
          <img
            src={book.image}
            className="w-40 h-48"
          />
        </figure>
        <div className="card-body px-12  space-y-3 flex flex-col grow">
            <div className="space-x-3">
                {
                    book.tags.map((tag, index) => <div key={index} className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold">{tag}</div>
                )
                }
            </div>
          <h2 className="card-title font-bold text-[24px]">
            {book.bookName}
          </h2>
          <p className="font-medium border-b border-dashed border-gray-300 pb-5">
            By : {book.author}
          </p>
          <div className="flex justify-between items-center mt-3 font-medium">
            <h3>{book.category}</h3>
            
            <h3>{book.rating} rating</h3>
          </div>
                
            
          
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
