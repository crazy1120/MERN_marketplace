import { createContext } from "react";

const state = {
  signAlertConfirmTitle: "Sign In First",
  signAlertConfirmDesc: "After you sign in, you can follow creator.",
  introCreatorTooltip: "Click here, you can visit deals of Mr",
  signUpLocations: [
    {
      value: "Morocco",
      label: "Morocco",
      children: [
        {
          value: "Casablanca",
          label: "Casablanca",
          children: [
            { value: "East", label: "East" },
            { value: "West", label: "West" },
            { value: "North", label: "North" },
            { value: "South", label: "South" },
          ],
        },
      ],
    },
    {
      value: "Ukraine",
      label: "Ukraine",
      children: [
        {
          value: "Odesa",
          label: "Odesa",
          children: [
            { value: "East", label: "East" },
            { value: "West", label: "West" },
            { value: "North", label: "North" },
            { value: "South", label: "South" },
          ],
        },
      ],
    },
  ],
  signUpPhonePrefixes: [212, 380],
  genderSelection: "Select your gender",
  levelSelection: {
    title: "What do you want here?",
    creator: "I want to create and share my business",
    brand: "I want to cater creators",
    buyer: "Just watch and want to buy goods",
  },
};

const initialContext = {
  state,
  dispatch: () => null,
};

export default createContext(initialContext);
