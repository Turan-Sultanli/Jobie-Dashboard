import { useState } from "react";
import { useFormContext } from "./FormContextProvider";

function ProfileGenerals() {
  const {
    formData: {
      firstname,
      middleName,
      username,
      lastname,
      password,
      confirmPassword,
    },
    handleChange,
  } = useFormContext();


  const [showPassword, setShowPassword] = useState([]);
  

  function handleTogglePasswords(field) {
    setShowPassword((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  }

  const showPasswordField = showPassword.includes("password");
  const showConfirmPasswordField = showPassword.includes("confirmPassword");

  return (
    <div>
      <h4 className="relative font-semibold text-lg uppercase xl:mb-7 lg:mb-5 md:mb-3 mb-2 dark:text-gray-100">
        Generals
      </h4>
      <div className="flex flex-col gap-7">
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <div className="flex   flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow">
            <label
              htmlFor="firstname"
              className="font-medium text-base text-gray-750 dark:text-gray-200 "
            >
              First Name
            </label>
            <input
              name="firstname"
              value={firstname}
              onChange={handleChange}
              type="text"
              id="firstname"
              placeholder="name"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium"
            />
          </div>
          <div className="flex  flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow">
            <label
              htmlFor="middle"
              className="font-medium text-base text-gray-750 dark:text-gray-200"
            >
              Middle Name
            </label>
            <input
              name="middleName"
              value={middleName}
              onChange={handleChange}
              type="text"
              id="middle"
              placeholder="Type here"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium"
            />
          </div>
          <div className="flex  flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow">
            <label
              htmlFor="lastName"
              className="font-medium text-base text-gray-750 dark:text-gray-200"
            >
              Last Name
            </label>
            <input
              name="lastname"
              value={lastname}
              onChange={handleChange}
              type="text"
              id="lastName"
              placeholder="last name"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3 justify-between">
          <div className="flex  flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow">
            <label
              htmlFor="username"
              className="font-medium text-base text-gray-750 dark:text-gray-200"
            >
              Username
            </label>
            <input
              autoComplete="on"
              name="username"
              value={username}
              onChange={handleChange}
              type="text"
              id="username"
              placeholder="username"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium"
            />
          </div>
          <div className="flex  flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow relative">
            <label
              htmlFor="password"
              className="font-medium text-base text-gray-750 dark:text-gray-200"
            >
              Password
            </label>
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type={showPasswordField ? "text" : "password"}
              id="password"
              placeholder="password"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium"
            />
            <button
              type="button"
              onClick={() => handleTogglePasswords("password")}
              className="absolute bottom-[24px]  right-[24px] bg-transparent border-none text-primary dark:text-gray-200 text-lg font-semibold 
                outline-none"
            >
              {showPasswordField ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex  flex-col xl:gap-9 lg:gap-7 md:gap-5 sm:gap-3 gap-2 grow relative">
            <label
              htmlFor="confirmPassword"
              className="font-medium text-base text-gray-750 dark:text-gray-200"
            >
              Re-Type Password
            </label>
            <input
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              type={showConfirmPasswordField ? "text" : "password"}
              id="confirmPassword"
              placeholder="password"
              className="bg-card w-full text-white placeholder:text-gray-200 border-b border-solid border-gray-300 pb-5 px-[2px] 
            focus:outline-none focus:border-primary hover:border-primary text-lg font-medium "
            />
            <button
              type="button"
              onClick={() => handleTogglePasswords("confirmPassword")}
              className="absolute bottom-[24px]  right-[24px] bg-transparent border-none text-primary dark:text-gray-200 text-lg font-semibold 
                outline-none"
            >
              {showConfirmPasswordField ? "Hide" : "Show"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileGenerals;
