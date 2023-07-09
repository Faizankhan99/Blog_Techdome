import axios from "axios";
import {
  Auth_Succes,
  Auth_failed,
  Auth_loading,
  Auth_logout,
} from "./auth.type";

export const AuthLogin = (cred, toast) => async (dispatch) => {
  console.log("cred", cred, toast);
  dispatch({ type: Auth_loading });
  try {
    let res = await axios.post(
      "https://blogtechdomebackend-production.up.railway.app/users/login",
      cred
    );
    // console.log(res.data)
    dispatch({ type: Auth_Succes, payload: res.data });
  } catch (err) {
    dispatch({ type: Auth_failed });
    toast({
      title: "Login Failed Please check you cred..",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }
};

export const LogoutUser = () => ({ type: Auth_logout });
