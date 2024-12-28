import { TagsClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useTagsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTags } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteTag = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useTagsTranslations();

  const { mutateAsync: deleteTag, isPending: isSubmitting } = useMutation({
    mutationFn: TagsClient.deleteTag,
    onSuccess: () => {
      showSuccessToast(t('Tag is successfully deleted!'));
      dispatch(updateTags());
      onSuccess();
    },
  });

  return { deleteTag, isSubmitting };
};

export default useDeleteTag;
