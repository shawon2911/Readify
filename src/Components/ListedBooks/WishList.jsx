import React, { useContext } from 'react';
import ListedBookCard from './ListedBookCard';
import { BookContext } from '../../Context/BooksProvider';

const WishList = ({sortingType}) => {
    const{wishListBooks} = useContext(BookContext);
    // console.log(wishListBooks, "wish");
    let filteredWishList = wishListBooks;


    if(sortingType === "pages"){
        filteredWishList = [...wishListBooks].sort((a, b) => a.totalPages - b.totalPages);
    }
    else if(sortingType === "rating"){
        filteredWishList = [...wishListBooks].sort((a,b) => a.rating - b.rating);
       
    }

    if(filteredWishList.length === 0){
        return(
            <div className='bg-base-300 flex justify-center items-center min-h-[30vh] md:min-h-[40vh] rounded-xl mt-5'>
                <h1 className='font-bold text-xl md:text-3xl text-black'>No Books Found in Wish List</h1>
            </div>
        )
    }


    return (

        <div className='max-w-7xl mx-auto'>
        
            {
                filteredWishList.map(selectedBook => (
                    <ListedBookCard key={selectedBook.bookId} selectedBook={selectedBook}></ListedBookCard>
                ))
            }

                
        </div>
    );
};

export default WishList;