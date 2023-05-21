import axios from "axios";

const BASE_URL = "http://localhost:8000/";

axios.defaults.baseURL = BASE_URL;

if (typeof window !== "undefined") {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
}

export const postData = (route: string, data: Record<string, any>) => {
  return axios.post(route, data);
};

export const fetchData = (route: string) => {
  return axios.get(route);
};
