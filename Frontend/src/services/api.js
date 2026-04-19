import axios from "axios";

const BASE = "http://localhost:8080";

// ✅ GET all pets
export const getPets = () => axios.get(`${BASE}/pets`);

// ✅ ADD pet (FIXED URL)
export const addPet = (pet) =>
  axios.post(`${BASE}/pets`, pet, {
    headers: {
      "Content-Type": "application/json"
    }
  });

// ✅ APPLY adoption
export const applyAdoption = (userId, petId) =>
  axios.post(`${BASE}/adoption/apply?userId=${userId}&petId=${petId}`);

// ✅ GET all adoptions
export const getAdoptions = () =>
  axios.get(`${BASE}/adoption/all`);

// ✅ APPROVE adoption
export const approveAdoption = (id) =>
  axios.post(`${BASE}/adoption/approve?id=${id}`);