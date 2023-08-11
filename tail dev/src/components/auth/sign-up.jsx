import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import SignUpForm from "./signUpForm";

const SignUpComp = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto flex flex-1 items-center justify-center p-4 text-base">
      {loading && (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="border-blue-500 h-16 w-16 animate-spin rounded-full border-t-4"></div>
        </div>
      )}
      <SignUpForm loading={loading} serverError={error} />
    </div>
  );
};

export default SignUpComp;
