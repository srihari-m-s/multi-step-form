import { createContext, useReducer } from "react";
import { formReducer } from "./FormReducer";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  plan: "",
  onlineService: true,
  storage: true,
  customProfile: false,
  isYearly: false,
};

const Prices = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
    onlineService: 1,
    storage: 2,
    customProfile: 2,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
    onlineService: 10,
    storage: 20,
    customProfile: 20,
  },
};

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch,
        Prices,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
