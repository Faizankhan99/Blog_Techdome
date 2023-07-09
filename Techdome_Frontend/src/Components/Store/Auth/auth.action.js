import axios from "axios";
import {
  Auth_Succes,
  Auth_failed,
  Auth_loading,
  Auth_logout,
} from "./auth.type";

export const AuthLogin = (cred) => async (dispatch) => {
  console.log("cred", cred);
  dispatch({ type: Auth_loading });
  try {
    let res = await axios.post("http://localhost:8080/users/login", cred);
    // console.log(res.data)
    dispatch({ type: Auth_Succes, payload: res.data });
  } catch (err) {
    dispatch({ type: Auth_failed });
  }
};

export const LogoutUser = () => ({ type: Auth_logout });
