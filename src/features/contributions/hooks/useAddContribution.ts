import { ContributionsClient } from '@api/clients';
import { Contribution } from '@api/clients/contributions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useContributionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateContributions } from '../slice';
import { SaveContributionRequest } from '../types';

interface Options {
  goalId: number;
  onSuccess: (contribution: Contribution) => void;
}

const useAddContribution = (options: Options) => {
  const { onSuccess, goalId } = options;
  const dispatch = useAppDispatch();
  const { t } = useContributionsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: ContributionsClient.addContribution,
    onSuccess: (response) => {
      showSuccessToast(t('Contribution is successfully added!'));
      onSuccess(response.data);
      dispatch(updateContributions());
    },
  });

  const addContribution = (request: SaveContributionRequest) => {
    return mutateAsync({ ...request, goalId });
  };

  return { addContribution, isSubmitting };
};

export default useAddContribution;
