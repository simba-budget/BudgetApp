import { GoalsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useGoalsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateGoals } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteGoal = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useGoalsTranslations();

  const { mutateAsync: deleteGoal, isPending: isSubmitting } = useMutation({
    mutationFn: GoalsClient.deleteGoal,
    onSuccess: () => {
      showSuccessToast(t('Goal is successfully deleted!'));
      dispatch(updateGoals());
      onSuccess();
    },
  });

  return { deleteGoal, isSubmitting };
};

export default useDeleteGoal;
