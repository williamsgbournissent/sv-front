import axios from "axios";

const BASE_URL = "http://localhost:8800";

export default axios.create({
  baseURL: BASE_URL,
});
