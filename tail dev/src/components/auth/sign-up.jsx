import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { classNamesContext } from "@/contexts";
import { signInVaidator } from "./validator";
import { actions } from "@/redux/slices/auth";
import Input from "@/widgets/input";

const SignUpComp = () => {
  const dispatch = useDispatch();
  const { state: classNameState } = useContext(classNamesContext);

  const { error: serverError } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  // After receive server side error message, set it to state so as to display it.
  useEffect(() => {
    setErrors((prevErrors) => ({ ...prevErrors, ...serverError }));
  }, [serverError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = signInVaidator(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(actions.signUpStart(formData));
    }
  };

  return (
    <div className="container mx-auto flex flex-1 items-center justify-center p-4 text-base">
      <form className={classNameState.form}>
        <span className={classNameState.pTitle}>Sign Up with Email</span>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          errors={errors}
        />
        <Input
          type="password"
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          errors={errors}
        />
        <input
          type="button"
          value="Sign Up"
          className={classNameState.button}
          onClick={handleSubmit}
        />
        <div className="my-5 flex flex-wrap items-center justify-between">
          <span className={classNameState.pTitle}>Already have account?</span>
          <input
            type="button"
            value="Sign In"
            className={classNameState.buttonRedirect}
          />
        </div>
        <span className={classNameState.pTitle}>Or continue with</span>
        <div className=" my-5 flex flex-wrap items-center justify-around">
          <input
            type="button"
            value="Google"
            className={classNameState.buttonInline}
          />
          <input
            type="button"
            value="Linkedin"
            className={classNameState.buttonInline}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpComp;
