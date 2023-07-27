export const signInStart = ({ email, password }) => ({
  type: "SIGNIN_START",
  payload: { email, password },
});

// export const signInWithGoogle = () => ({
//   type: "SIGNIN_WITH_GOOGLE",
// });

export const signInSuccess = (user) => ({
  type: "SIGNIN_SUCCESS",
  payload: user,
});

export const signInFailure = (error) => ({
  type: "SIGNIN_FAILURE",
  payload: error,
});

// export const signUpStart = (credentials) => ({
//   type: "SIGNUP_START",
//   payload: credentials,
// });

// export const signUpSuccess = (user) => ({
//   type: "SIGNUP_SUCCESS",
//   payload: user,
// });

// export const signUpFailure = (error) => ({
//   type: "SIGNUP_FAILURE",
//   payload: error,
// });

// export const signOut = () => ({
//   type: "SIGNOUT",
// });
