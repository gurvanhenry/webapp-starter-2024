import axios from "axios";

export function setBearerTokenForApiCall(token: string) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

export function removeBearerTokenOfApiCall() {
  delete axios.defaults.headers.common["Authorization"];
}
