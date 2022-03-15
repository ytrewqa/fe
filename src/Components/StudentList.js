import StudentListItem from "./StudentListItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { PORT } from "../port";

const StudentList = () => {
  const [students, setStudents] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:${PORT}/students`).then((response) => {
      setStudents(response.data.students);
    });
  }, []);

  return (
    <>
      {students.length ? (
        <table>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>

          <tbody>
            {students.map((student) => (
              <StudentListItem details={student} />
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No Student in Record yet!</h1>
      )}
    </>
  );
};

export default StudentList;
