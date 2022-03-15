import { Link } from "react-router-dom";

const StudentListItem = ({ details }) => (
  <>
    <tr key={details.id}>
      {Object.keys(details).map((key) => (
        <td key={key}>{details[key]}</td>
      ))}

      <td>
        <Link to={`${details.id}`}>details</Link>
      </td>
    </tr>
  </>
);

export default StudentListItem;
