import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {PORT} from "../port"

const Student = () => {
    let navigate = useNavigate();

  let { id } = useParams();
  const [firstName, setFname] = useState();
  const [lastName, setLname] = useState();

  useEffect(() => {
    axios.get(`http://localhost:${PORT}/students/${id}`).then((response) => {
      console.log(response.data.student);
      setFname(response.data.student.firstName);
      setLname(response.data.student.lastName);
    });
  }, [id]);

  const handleUpdate = async () => {
    const student = {
        firstName: firstName,
        lastName: lastName,
    };
    try {
      await axios.patch(`http://localhost:${PORT}/students/${id}`, student);
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async ()=>{
    try {
        await axios.delete(`http://localhost:${PORT}/students/${id}`);
        return navigate("/students");

      } catch (error) {
        console.log(error);
      }
  }

  return (
    <>
      <p>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
      </p>
      <p>
        Last Name :
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLname(e.target.value)}
        />
      </p>
      <p>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </p>
    </>
  );
};

export default Student;
