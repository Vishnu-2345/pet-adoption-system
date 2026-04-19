import { useState } from "react";

export default function Login({ setRole }) {
  const [role, setLocalRole] = useState("");

  return (
    <div className="login-container">
      <h1>🐶 Pet Adoption System</h1>
      <h3>Select Your Role</h3>

      <div className="role-container">
        <div
          className={`role-card ${role === "USER" ? "active" : ""}`}
          onClick={() => setLocalRole("USER")}
        >
          👤 User
        </div>

        <div
          className={`role-card ${role === "SHELTER" ? "active" : ""}`}
          onClick={() => setLocalRole("SHELTER")}
        >
          🏢 Shelter
        </div>

        <div
          className={`role-card ${role === "ADMIN" ? "active" : ""}`}
          onClick={() => setLocalRole("ADMIN")}
        >
          🛠 Admin
        </div>
      </div>

      <button
        className="button btn-primary"
        disabled={!role}
        onClick={() => setRole(role)}
      >
        Continue
      </button>
    </div>
  );
}