import { useEffect, useState } from "react";
import { getAdoptions, approveAdoption } from "../services/api";

export default function Admin() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  const load = () => {
    getAdoptions().then(res => setData(res.data));
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (id) => {
    try {
      setLoadingId(id);
      setMessage("");

      await approveAdoption(id);

      setMessage("✅ Adoption Approved!");
      load(); // refresh data

    } catch {
      setMessage("❌ Error approving adoption");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>

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

      {data.map(a => (
        <div key={a.id} className="card">
          <p>User ID: {a.userId}</p>
          <p>Pet ID: {a.petId}</p>

          {/* ✅ STATUS UI */}
          <p>
            Status:
            <span
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                color: a.status === "Approved" ? "#22c55e" : "#facc15"
              }}
            >
              ● {a.status}
            </span>
          </p>

          {/* ✅ BUTTON */}
          {a.status === "Pending" && (
            <button
              className="button btn-warning"
              onClick={() => approve(a.id)}
              disabled={loadingId === a.id}
            >
              {loadingId === a.id ? "Approving..." : "Approve"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}