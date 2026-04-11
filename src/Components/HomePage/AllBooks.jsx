import React, { use } from 'react';
import BookCard from './BookCard';

const booksPromise = fetch("/booksData.json").then(res => res.json());


const AllBooks = () => {
    const books = use(booksPromise);
    // console.log(books)
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <h2 className='font-bold text-[40px] text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 py-10 '>
                {
                     books.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;