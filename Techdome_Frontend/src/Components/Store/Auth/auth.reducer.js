import {
  Auth_Succes,
  Auth_failed,
  Auth_loading,
  Auth_logout,
} from "./auth.type";

const initialState = {
  loding: false,
  error: false,
  token: localStorage.getItem("token") || "",
};

export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Auth_loading: {
      return {
        ...state,
        loading: true,
      };
    }
    case Auth_Succes: {
      localStorage.setItem("token", JSON.stringify(payload.token));
      return {
        ...state,
        loading: false,
        error: false,
        token: payload.token,
      };
    }

    case Auth_failed: {
      return {
        ...state,
        loading: false,
        error: true,
        token: "",
      };
    }

    case Auth_logout: {
      localStorage.removeItem("role");
      localStorage.removeItem("token");
      return {
        ...state,
        loading: false,
        error: false,
        role: "",
        token: "",
      };
    }

    default: {
      return state;
    }
  }
};
