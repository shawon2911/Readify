import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../Context/BooksProvider";

const BookDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const books = useLoaderData();
  // console.log(books);
  const targetBook = books.find((book) => book.bookId == id);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = targetBook;


  const {handleMarkAsRead, handleWishListBooks} = useContext(BookContext);
  

  




  return (
    <div className="grid grid-cols-2 bg-base-100 shadow-sm max-w-7xl mx-auto my-5">
      <figure className="flex justify-center items-center bg-[#131313]/5">
        <img src={image} className="max-h-150  " />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold text-[40px]">{bookName}</h2>
        <h2 className="font-medium text-[20px] text-[#131313]/80">
          By : {author}
        </h2>
        <p className="border-y  border-gray-400 font-medium text-[20px] text-[#131313]/80 py-2">
          {category}
        </p>
        <p className="text-[#131313]/70 leading-8">
          <span className="font-bold text-black text-[16px]">Review :</span> {review}
        </p>
        <div className="flex items-center gap-4 border-b border-gray-400 py-5 ">
          <span className="font-bold text-black">Tag </span>
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="py-3">
         <div className="grid grid-cols-3">
            <span className="text-[#131313]/70 text-[16px] col-span-1">Number of Pages :</span> <span className="col-span-2 text-black font-semibold text-[16px]">{totalPages}</span>
         </div>
         <div className="grid grid-cols-3">
            <span className="text-[#131313]/70 text-[16px] col-span-1">Publisher :</span> <span className="col-span-2 text-black font-semibold text-[16px]"> {publisher}</span>
         </div>
         <div className="grid grid-cols-3">
            <span className="text-[#131313]/70 text-[16px] col-span-1">Year of Publishing :</span> <span className="col-span-2 text-black font-semibold text-[16px]">{yearOfPublishing}</span>
         </div>
        <div className="grid grid-cols-3">
            <span className="text-[#131313]/70 text-[16px col-span-1]">Rating :</span> <span className="col-span-2 text-black font-semibold text-[16px]">{rating}</span>
        </div>
          
         
        </div >
        <div className="card-actions py-5 space-x-3">
          <button
           onClick={()=> handleMarkAsRead(targetBook)}
           className="btn bg-transparent border border-black lg:py-8 lg:px-8 lg:text-xl font-extrabold rounded-[10px]">Mark as Read</button>
          <button
            onClick={()=> handleWishListBooks(targetBook)}
            className="btn bg-[#50B1C9] text-white lg:py-8 lg:px-8 lg:text-xl font-extrabold rounded-[10px]">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
