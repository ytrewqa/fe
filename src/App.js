import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import "./App.css";
import BookList from "./Components/BookList.js"
import StudentList from "./Components/StudentList";
import Student from "./Components/Student"
import Book from "./Components/Book"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<Student />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
