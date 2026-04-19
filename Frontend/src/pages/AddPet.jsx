import { useState } from "react";
import { addPet } from "../services/api";

export default function AddPet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const add = async () => {
    if (!name || !type || !age) {
      setMessage("❌ Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      await addPet({
        name,
        type,
        age: Number(age)
      });

      setMessage("✅ Pet added successfully!");

      setName("");
      setType("");
      setAge("");

    } catch (err) {
      setMessage("❌ Error adding pet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Add Pet</h2>

      <div className="card">
        <input
          placeholder="Pet Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Type (Dog, Cat...)"
          value={type}
          onChange={e => setType(e.target.value)}
        />

        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        <button
          className="button btn-primary"
          onClick={add}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Pet"}
        </button>

        {/* ✅ MESSAGE DISPLAY */}
        {message && (
          <p
            style={{
              marginTop: "10px",
              color: message.includes("❌") ? "#f87171" : "#4ade80"
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}