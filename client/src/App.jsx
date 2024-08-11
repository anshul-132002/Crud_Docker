import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./Components/User";
import CreateUser from "./Components/CreateUser";
import UpdateUser from "./Components/UpdateUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}></Route>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
