export default function Navbar({ role, setRole }) {
  return (
    <div className="navbar">
      <h2>🐶 Pet Adoption</h2>

      <div className="nav-right">
        <span>Logged in as: <b>{role}</b></span>

        <button
          className="button btn-danger"
          onClick={() => setRole("")}
        >
          Logout
        </button>
      </div>
    </div>
  );
}