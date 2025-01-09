import { TagsClient } from '@api/clients';
import { Tag } from '@api/clients/tags/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useTagsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTags } from '../slice';
import { SaveTagRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (tag: Tag) => void;
}

const useAddTag = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();
  const { t } = useTagsTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: TagsClient.addTag,
    onSuccess: (response) => {
      showSuccessToast(t('Tag is successfully created!'));
      onSuccess(response.data);
      dispatch(updateTags());
    },
  });

  const addTag = (request: SaveTagRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addTag, isSubmitting };
};

export default useAddTag;
