import { GoalsClient } from '@api/clients';
import { Goal } from '@api/clients/goals/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useGoalsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateGoals } from '../slice';
import { SaveGoalRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (goal: Goal) => void;
}

const useAddGoal = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();
  const { t } = useGoalsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: GoalsClient.addGoal,
    onSuccess: (response) => {
      showSuccessToast(t('Goal is successfully added!'));
      onSuccess(response.data);
      dispatch(updateGoals());
    },
  });

  const addGoal = (request: SaveGoalRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addGoal, isSubmitting };
};

export default useAddGoal;
