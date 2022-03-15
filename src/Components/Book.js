import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {PORT} from "../port"

const Book = () => {
  let { id } = useParams();
  let navigate = useNavigate();


  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [borrowedBy, setBorrowedBy] = useState();
  const [dateOfBorrow, setdateOfBorrow] = useState();
  const [expectedReturn, setexpectedReturn] = useState();

  useEffect(() => {
    axios.get(`http://localhost:${PORT}/books/${id}`).then((response) => {
      setName(response.data.book.name);
      setAuthor(response.data.book.author);
      setBorrowedBy(response.data.book.borrowedBy);
      setdateOfBorrow(response.data.book.dateOfBorrow);
      setexpectedReturn(response.data.book.expected_return_date);
    });
  }, [id]);

  const handleUpdate = async () => {
    const book = {
      name: name,
      author: author,
      borrowedBy: borrowedBy,
      dateOfBorrow,
      expected_return_date: expectedReturn,
    };
    try {
      await axios.patch(`http://localhost:${PORT}/books/${id}`, book);
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async ()=>{
    try {
        await axios.delete(`http://localhost:${PORT}/books/${id}`);
        return navigate("/books");

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <p>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </p>
      <p>
        Author :
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </p>
      <p>
        Borrowed By:
        <input
          type="text"
          value={borrowedBy}
          onChange={(e) => setBorrowedBy(e.target.value)}
        />
      </p>
      <p>
        Date of Borrow:
        <input
          type="text"
          value={dateOfBorrow}
          onChange={(e) => setdateOfBorrow(e.target.value)}
        />
      </p>
      <p>
        Expected Return Date:
        <input
          type="text"
          value={expectedReturn}
          onChange={(e) => setexpectedReturn(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
};

export default Book;
