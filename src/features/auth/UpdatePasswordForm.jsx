import AuthHeader from "./AuthHeader";
import AuthFooter from "./AuthFooter";
import { useState } from "react";
import { useUpdatePassword } from "./useUpdatePassword";

function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { updatePassword } = useUpdatePassword();

  function handleSubmit(e) {
    e.preventDefault();

    if(!password.trim()) return

    updatePassword({password})
  }

  return (
    <div className="flex flex-col rounded-lg bg-primary px-12 py-12">
      <AuthHeader>Update Password</AuthHeader>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <div>
          <label htmlFor="" className="text-base font-bold text-white">
            New Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="mt-1 h-10 w-full rounded-xl px-5 py-1 outline-none dark:bg-button dark:text-white"
            placeholder="user@example.com"
          />
        </div>
        {password && (
          <div>
            <label htmlFor="" className="text-base font-bold text-white">
              Confirm New Password
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="mt-1 h-10 w-full rounded-lg px-5 py-1 outline-none dark:bg-button dark:text-white"
              placeholder="user@example.com"
            />
          </div>
        )}
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

export default UpdatePasswordForm;
