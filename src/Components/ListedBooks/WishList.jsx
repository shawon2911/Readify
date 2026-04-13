import React, { useContext } from 'react';
import ListedBookCard from './ListedBookCard';
import { BookContext } from '../../Context/BooksProvider';

const WishList = () => {
    const{wishListBooks} = useContext(BookContext);
    console.log(wishListBooks, "wish");
    return (
       <div className='max-w-7xl mx-auto'>
            {
                wishListBooks.map(selectedBook => (
                    <ListedBookCard key={selectedBook.bookId} selectedBook={selectedBook}></ListedBookCard>
                ))
            }
        </div>
    );
};

export default WishList;