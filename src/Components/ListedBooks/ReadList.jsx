
import { useContext } from 'react';
import BookCard from '../HomePage/BookCard';
import ListedBookCard from './ListedBookCard';
import { BookContext } from '../../Context/BooksProvider';

const ReadList = ({allBooks}) => {
    const { readListBooks } = useContext(BookContext);
    return (
        <div className='max-w-7xl mx-auto'>
            <ListedBookCard allBooks={allBooks}></ListedBookCard>
        </div>
    );
};

export default ReadList;