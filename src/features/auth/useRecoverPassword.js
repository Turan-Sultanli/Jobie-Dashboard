import { useMutation, useQueryClient } from '@tanstack/react-query';
import { recoverPassword as recoverPasswordApi} from '../../services/apiAuthentication';
import { toast } from 'react-hot-toast';

export function useRecoverPassword() {
  const queryClient = useQueryClient();

  const { mutate: recoverPassword, isLoading } = useMutation({
    mutationFn: ({ email }) => recoverPasswordApi({ email }),
    onSuccess: (user) => {
      queryClient.setQueryData(['user'], user.user);
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error(err.message);
    },
  });

  return { recoverPassword, isLoading };
}
