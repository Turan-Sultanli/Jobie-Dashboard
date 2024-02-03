import AuthHeader from "./authHeader";
import AuthFooter from "./authFooter";
import { useState } from "react";
import { useSignup } from "./useSignUp";

function SignUpForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    if (
      [userName.trim(), email.trim(), password.trim()].some(
        (field) => field === "",
      )
    )
      return;

    const formData = {
      userName,
      email,
      password,
    };
    signup(formData, {
      onSuccess: () => {
        setEmail("");
        setUserName("");
        setPassword("");
      },
    });
  }

  return (
    <div className="flex flex-col rounded-lg bg-primary px-12 py-12">
      <AuthHeader>Sign up your account</AuthHeader>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="" className="text-base font-bold text-white">
            Username
          </label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="mt-1 h-10 w-full rounded-lg px-5 py-1 outline-none dark:bg-button dark:text-white"
            placeholder="username"
          />
        </div>
        <div>
          <label htmlFor="" className="text-base font-bold text-white">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="mt-1 h-10 w-full rounded-lg px-5 py-1 outline-none dark:bg-button dark:text-white"
            placeholder="user@example.com"
          />
        </div>
        <div>
          <label htmlFor="" className="text-base font-bold text-white">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-1 h-10 w-full rounded-lg px-5 py-1 outline-none dark:bg-button dark:text-white"
          />
        </div>
        <div className="mt-6">
          <button className="h-[50px] w-full rounded-lg bg-white font-bold text-primary dark:bg-button dark:text-white">
            Sign up
          </button>
          <AuthFooter path="/sign-in" label="Sign in">
            Already have an account?{" "}
          </AuthFooter>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
