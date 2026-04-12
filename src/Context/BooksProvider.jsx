import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BooksProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.find(
      (book) => book.bookId == currentBook.bookId,
    );
    if (isExistBook) {
      alert("already stored");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
    }
    console.log(currentBook, storedBooks);
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };

  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BooksProvider;
