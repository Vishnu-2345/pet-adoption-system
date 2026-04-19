import { useState } from "react";
import Home from "./pages/Home";
import AddPet from "./pages/AddPet";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [role, setRole] = useState("");

  if (!role) return <Login setRole={setRole} />;

  return (
    <>
      <Navbar role={role} setRole={setRole} />

      <div className="container">
        <h1 className="title">🐶 Pet Adoption System</h1>
        <p className="subtitle">Logged in as: <b>{role}</b></p>

        {role === "USER" && <Home />}
        {role === "SHELTER" && <AddPet />}
        {role === "ADMIN" && <Admin />}
      </div>
    </>
  );
}

export default App;