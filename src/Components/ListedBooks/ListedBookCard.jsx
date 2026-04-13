import React, { useContext } from "react";
import { BookContext } from "../../Context/BooksProvider";
import { useLoaderData } from "react-router";

const ListedBookCard = ({ allBooks }) => {
  // console.log(allBooks);

  // const { readListBooks, wishListBooks } = useContext(BookContext);
  // // console.log(readListBooks, wishListBooks);
  // const allListedBooks = [...readListBooks, ...wishListBooks];
  // console.log(allListedBooks);
  //   const singleBook = useLoaderData();
  //   console.log(singleBook);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        {allBooks.map((book, index) => (
          <div key={index} className="grid grid-cols-3 bg-base-100 shadow-sm">
            <figure className="col-span-1">
              <img src={book.image} className="h-80" />
            </figure>
            <div className="card-body col-span-2">
              <h2 className="card-title font-bold text-[24px] text-black">
                {book.bookName}
              </h2>
              <h3 className="font-medium text-[16px] text-[#131313]/80">
                By : {book.author}
              </h3>
              <div className="flex items-center gap-4 border-b border-gray-400 py-5 ">
                <span className="font-bold text-black">Tag </span>
                {book.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge bg-[#23BE0A]/5 text-[#23BE0A] font-semibold"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBookCard;
