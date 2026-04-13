import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BooksProvider = ({ children }) => {
  const [readListBooks, setReadListBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = readListBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      toast.error(`${currentBook.bookName} is already exist in Book list`);
    } else {
      setReadListBooks([...readListBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to Book List`)
    }
    // console.log(currentBook, storedBooks);
  };

  const handleWishListBooks = (currentBook) => {
    const isExistInReadList = readListBooks.find(book => book.bookId === currentBook.bookId);
    if(isExistInReadList){
      toast.error(`${currentBook.bookName} is already is Read list`);
      return;
    }
    const isExistBook = wishListBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      toast.error(`${currentBook.bookName} is already exist in Wishlist`);
    } else {
      setWishListBooks([...wishListBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to Wish List`)
    }
    // console.log(currentBook, storedBooks);
  };

  const data = {
    readListBooks,
    setReadListBooks,
    handleMarkAsRead,
    wishListBooks,
    setWishListBooks,
    handleWishListBooks,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BooksProvider;
