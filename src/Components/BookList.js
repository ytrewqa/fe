import BookListItem from "./BookListItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { PORT } from "../port";

const BookList = () => {
  const [books, setBooks] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:${PORT}/books`).then((response) => {
      setBooks(response.data.books);
    });
  }, []);

  return books.length ? (
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Authour</th>
        <th>Borrowed By</th>
        <th>Date Of Borrow</th>
        <th>Expected Return Date</th>
      </tr>

      <tbody>
        {books.map((book) => (
          <BookListItem details={book} />
        ))}
      </tbody>
    </table>
  ) : (
    <h1>No Book in Record yet!</h1>
  );
};

export default BookList;
