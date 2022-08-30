import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
