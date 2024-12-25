import { GoalsClient } from '@api/clients';
import { Goal, SaveGoalRequest } from '@api/clients/goals/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useGoalsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateGoals } from '../slice';

interface Options {
  onSuccess: (goal: Goal) => void;
}

const useEditGoal = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useGoalsTranslations();

  const mutationFn = ({ id, ...request }: SaveGoalRequest & { id: number }) => {
    return GoalsClient.editGoal(id, request);
  };

  const { mutateAsync: editGoal, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Goal is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateGoals());
    },
  });

  return { editGoal, isSubmitting };
};

export default useEditGoal;
