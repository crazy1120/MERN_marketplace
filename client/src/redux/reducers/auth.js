import jwtDecode from "jwt-decode";

const token = localStorage.token;
const user = token ? jwtDecode(token) : null;

const initialState = {
  token,
  isAuthenticated: !!token,
  loading: false,
  user,
  error: null,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGNIN_SUCCESS":
      return {
        ...state,
        token: localStorage.token,
        isAuthenticated: true,
        user: payload,
        error: null,
      };
    case "SIGNIN_FAILURE":
    case "SIGNUP_FAILURE":
      return {
        ...state,
        error: payload,
      };
    case "SIGNOUT":
      return initialState;
    default:
      return state;
  }
};
export default auth;
