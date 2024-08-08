import axios from "axios";

export const API_URL = "http://localhost:3000";

export function sendEmail(data: FormData) {
  return axios.post(API_URL);
}
