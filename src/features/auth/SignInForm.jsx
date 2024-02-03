import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import { useState } from "react";
import { useSignIn } from "./useSignIn";

function SignInForm() {
  const [email, setEmail] = useState(import.meta.env.VITE_EMAIL);
  const [password, setPassword] = useState(import.meta.env.VITE_PASSWORD);

console.log(import.meta.env.VITE_EMAIL)

  const { signin } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password)
      signin(
        {
          email,
          password,
        },
        {
          onSuccess: () => {
            setEmail(""), setPassword("");
          },
        },
      );
  }

  return (
    <div className="flex flex-col rounded-lg bg-primary px-12 py-12">
      <AuthHeader>Sign in your account</AuthHeader>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="" className="text-base font-bold text-white">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="mt-1 h-10 w-full rounded-lg px-5 py-1 outline-none dark:bg-button dark:text-white "
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
        <div className="mb-2 mt-2 flex justify-between">
          
          <Link to="/forgot-password" className="text-base text-white">
            Forgot Password ?
          </Link>
        </div>
        <div>
          <button className="h-[50px] w-full rounded-lg bg-white font-bold text-primary dark:bg-button dark:text-white">
            Sign in
          </button>
          <AuthFooter path="/sign-up" label="Sign up">
            Don&apos;t have an account?{" "}
          </AuthFooter>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
