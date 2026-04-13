
import { useContext } from 'react';

import ListedBookCard from './ListedBookCard';
import { BookContext } from '../../Context/BooksProvider';

const ReadList = () => {
    const { readListBooks } = useContext(BookContext);
    // console.log(readListBooks, "read");
     if(readListBooks.length === 0){
        return(
            <div className='bg-base-300 flex justify-center items-center min-h-[30vh] md:min-h-[50vh] rounded-xl mt-5'>
                <h1 className='font-bold text-xl md:text-3xl text-black'>No Books Found in Read List</h1>
            </div>
        )
    }
     
    return (
        <div className='max-w-7xl mx-auto'>
            {
                readListBooks.map(selectedBook => (
                    <ListedBookCard key={selectedBook.bookId} selectedBook={selectedBook}></ListedBookCard>
                ))
            }
        </div>
    );
};

export default ReadList;