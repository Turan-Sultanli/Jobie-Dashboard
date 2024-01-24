import { createContext, useContext, useState } from "react";

const FormContext = createContext(null);

function FormContextProvider({ children }) {
  const [formData, setFormData] = useState({
    firstname: "Oda",
    middleName: "",
    lastname: "Dink",
    username: "",
    password: "",
    confirmPassword: "",

    mobilePhone: "+50 123 456 78",
    whatsapp: "+50 444 5511 11",
    email: "davidheree@mail.com",
    address: "Franklin Avenue St. Corner",
    city: "London",
    country: "England",

    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum que laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis etquasi architecto beatae vitae dicta su",
    programming: 78,
    prototyping: 65,
    uiDesign: 89,
    researching: 92,
  });

  function handleChange(e) {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <FormContext.Provider value={{ formData, handleChange }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const context = useContext(FormContext);

  if (context == null)
    throw new Error("Use form context inside of the provider");
  return context;
};
