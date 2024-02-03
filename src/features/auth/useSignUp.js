import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuthentication";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate()

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (formData) => signupApi(formData),
    onSuccess: () => {
      navigate("/sign-in")
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}