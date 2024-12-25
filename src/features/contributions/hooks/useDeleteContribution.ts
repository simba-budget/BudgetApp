import { ContributionsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useContributionsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateContributions } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteContribution = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useContributionsTranslations();

  const { mutateAsync: deleteContribution, isPending: isSubmitting } = useMutation({
    mutationFn: ContributionsClient.deleteContribution,
    onSuccess: () => {
      showSuccessToast(t('Contribution is successfully deleted!'));
      dispatch(updateContributions());
      onSuccess();
    },
  });

  return { deleteContribution, isSubmitting };
};

export default useDeleteContribution;
