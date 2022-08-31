import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBookForm from '../components/AddBookForm';
// import { removeBook } from '../Redux/book/book';
import './BooksPage.css';

const BooksPage = () => {
  const bookList = useSelector((state) => state.book);

  return (
    <>
      <ul className="books-list">
        {bookList.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
            category={book.category}
            // removeClickHandler={removeClickHandler}
          />
        ))}
      </ul>
      <span className="br" />
      <AddBookForm />
    </>
  );
};
export default BooksPage;
