import axios from "axios";

const clinicApi = axios.create({
  baseURL: import.meta.env.VITE,
});

export default clinicApi;
