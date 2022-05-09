import axios from "axios";
import baseApiUrl from "../../../utils/baseApiUrl";

// Request API.
axios
  .post(`${baseApiUrl}/api/auth/forgot-password`, {
    email: "applotnwjd@naver.com", // user's email
  })
  .then((response) => {
    console.log("Your user received an email");
  })
  .catch((error) => {
    console.log("An error occurred:", error.response);
  });
