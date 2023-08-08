import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

import { classNamesContexts } from "@/contexts";
import { signInVaidator } from "./validator";
import { actions } from "@/redux/slices/auth";

const SignUpComp = () => {
  const dispatch = useDispatch();
  const { state: classNameState } = useContext(classNamesContexts);

  const { error: serverError } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({} && serverError);

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
    <div className="container mx-auto flex h-screen items-center justify-center p-4 text-base">
      <form className={classNameState.form}>
        <span className={classNameState.pTitle}>Sign Up with Email</span>
        <input
          type="text"
          name="name"
          id="name"
          className={classNameState.input}
          value={formData.name}
          onChange={handleChange}
          placeholder="Input your name."
        />
        {errors.name && (
          <span className={classNameState.error}>{errors.name}</span>
        )}
        <input
          type="text"
          name="email"
          id="email"
          className={classNameState.input}
          value={formData.email}
          onChange={handleChange}
          placeholder="Input your email."
        />
        {errors.email && (
          <span className={classNameState.error}>{errors.email}</span>
        )}
        <input
          type="password"
          name="password"
          id="password"
          className={classNameState.input}
          value={formData.password}
          onChange={handleChange}
          placeholder="Set password."
        />
        {errors.password && (
          <span className={classNameState.error}>{errors.password}</span>
        )}
        <input
          type="password"
          name="confirm"
          id="confirm"
          className={classNameState.input}
          value={formData.confirm}
          onChange={handleChange}
          placeholder="Enter your confirm password."
        />
        {errors.confirm && (
          <span className={classNameState.error}>{errors.confirm}</span>
        )}
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
      {/* <Card className="shadow-lg_50 absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
        <CardHeader
          variant="gradient"
          color="blue"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="black">
            Sign Up
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input variant="standard" label="Name" size="lg" />
          <Input variant="standard" type="email" label="Email" size="lg" />
          <Input
            variant="standard"
            type="password"
            label="Password"
            size="lg"
          />
          <Input
            variant="standard"
            type="password"
            label="Password Confirm"
            size="lg"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className="text-lg text-black"
            onClick={() => console.log("object")}
            variant="gradient"
            fullWidth
          >
            Sign Up
          </Button>
          <Typography variant="small" className="mr-6 mt-6 flex justify-end">
            Already have an account?
            <Link to="/sign-in">
              <Typography
                as="span"
                variant="small"
                className="ml-1 font-bold text-black"
              >
                Sign in
              </Typography>
            </Link>
          </Typography>
        </CardFooter>
      </Card> */}
    </div>
  );
};

export default SignUpComp;
