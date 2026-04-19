import { useEffect, useState } from "react";
import { getPets, applyAdoption } from "../services/api";

export default function Home() {
  const [pets, setPets] = useState([]);
  const [message, setMessage] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  const loadPets = () => {
    getPets().then(res => setPets(res.data));
  };

  useEffect(() => {
    loadPets();
  }, []);

  const adopt = async (id) => {
    try {
      setLoadingId(id);
      setMessage("");

      await applyAdoption(1, id);

      setMessage("✅ Adoption request sent!");
      loadPets(); // optional refresh

    } catch {
      setMessage("❌ Failed to apply adoption");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="container">
      <h2>Available Pets</h2>

      {/* ✅ MESSAGE */}
      {message && (
        <p
          style={{
            color: message.includes("❌") ? "#f87171" : "#4ade80",
            fontWeight: "bold",
            marginBottom: "15px"
          }}
        >
          {message}
        </p>
      )}

      {pets.map(p => (
        <div key={p.id} className="card">
          <h3>{p.name}</h3>
          <p>Type: {p.type}</p>
          <p>Age: {p.age}</p>

          <p>
            Status:
            <span
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                color: p.status === "Available" ? "#22c55e" : "#facc15"
              }}
            >
              ● {p.status}
            </span>
          </p>

          <button
            className="button btn-primary"
            onClick={() => adopt(p.id)}
            disabled={loadingId === p.id}
          >
            {loadingId === p.id ? "Applying..." : "Adopt"}
          </button>
        </div>
      ))}
    </div>
  );
}