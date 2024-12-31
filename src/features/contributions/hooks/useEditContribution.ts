import { ContributionsClient } from '@api/clients';
import {
  Contribution,
  SaveContributionRequest,
} from '@api/clients/contributions/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useContributionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateContributions } from '../slice';

interface Options {
  onSuccess: (contribution: Contribution) => void;
}

const useEditContribution = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useContributionsTranslations();

  const mutationFn = ({
    id,
    ...request
  }: SaveContributionRequest & { id: number }) => {
    return ContributionsClient.editContribution(id, request);
  };

  const { mutateAsync: editContribution, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Contribution is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateContributions());
    },
  });

  return { editContribution, isSubmitting };
};

export default useEditContribution;
