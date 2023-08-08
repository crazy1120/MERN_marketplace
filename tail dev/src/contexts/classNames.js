import { createContext } from "react";

const state = {
  form: "absolute flex flex-col w-full max-w-[40rem] rounded-xl shadow-md_50 py-5",
  pTitle: "underline text-xl px-7  font-bold",
  input:
    "rounded-lg shadow-md border-none my-3 focus:ring-2 focus:ring-white w-1/2 mx-auto",
  button:
    "rounded-lg bg-black text-lg text-white cursor-pointer shadow-md border-none my-3 py-1 focus:ring-2 focus:ring-white block w-1/2 mx-auto",
  buttonInline:
    "rounded-lg bg-black text-lg text-white cursor-pointer shadow-md border-none m-2 py-1 focus:ring-2 focus:ring-white w-1/3 ",
  buttonRedirect:
    "rounded-lg bg-black text-lg text-white cursor-pointer shadow-md border-none my-2 py-1 focus:ring-2 focus:ring-white w-1/3 mx-12",
  error: "text-red ml-40",
};

const classNamesContext = createContext({
  state,
  dispatch: () => null,
});

export default classNamesContext;
