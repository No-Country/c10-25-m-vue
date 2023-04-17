import axios from "axios";

const clinicApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default clinicApi;
