// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { updatePassword as updatePasswordApi } from "../../services/apiAuthentication";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export function useUpdatePassword() {
//   const queryClient = useQueryClient();
//   const navigate = useNavigate();

//   const { mutate: updatePassword, isLoading } = useMutation({
//     mutationFn: ({ password }) => updatePasswordApi({ password }),
//     onSuccess: (user) => {
//       queryClient.setQueryData(["user"], user.user, {
//         onSuccess: () => {
//           navigate("/app");
//         },
//       });
//     },
//     onError: (err) => {
//       console.log("ERROR", err);
//       toast.error("Provided email or password are incorrect");
//     },
//   });

//   return { updatePassword, isLoading };
// }


import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updatePassword as updatePasswordApi } from "../../services/apiAuthentication";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  
  const navigate = useNavigate();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: ({password}) =>
      updatePasswordApi({ password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user); // manually setting cash
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/app");
      toast.success("Password successfully updated");
    },
    onError: (error) => {
      console.log("ERROR", error);
      toast.error(`Could not change password. ${error.message}`);
    },
  });
  return { updatePassword, isPending };
}