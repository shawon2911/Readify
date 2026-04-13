
import { useContext } from 'react';

import ListedBookCard from './ListedBookCard';
import { BookContext } from '../../Context/BooksProvider';

const ReadList = () => {
    const { readListBooks } = useContext(BookContext);
    // console.log(readListBooks, "read");
     
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