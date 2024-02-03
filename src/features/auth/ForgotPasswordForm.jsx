import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import { useState } from "react";
import { useRecoverPassword } from "./useRecoverPassword";

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const { recoverPassword } = useRecoverPassword();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    recoverPassword({email});
  }

  return (
    <div className="flex flex-col rounded-xl bg-primary px-12 py-12">
      <AuthHeader>Forgot Password</AuthHeader>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <button className="h-[50px] w-full rounded-lg bg-white font-bold text-primary dark:bg-button dark:text-white">
          Submit
        </button>
        <AuthFooter path="/sign-in" label="Sign in">
          Remember password?{" "}
        </AuthFooter>
      </form>
    </div>
  );
}

export default ForgotPasswordForm;
