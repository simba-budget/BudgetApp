import { TagsClient } from '@api/clients';
import { SaveTagRequest, Tag } from '@api/clients/tags/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useTagsTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateTags } from '../slice';

interface Options {
  onSuccess: (tag: Tag) => void;
}

const useEditTag = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useTagsTranslations();

  const mutationFn = ({ id, ...request }: SaveTagRequest & { id: number }) => {
    return TagsClient.editTag(id, request);
  };

  const { mutateAsync: editTag, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Tag is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateTags());
    },
  });

  return { editTag, isSubmitting };
};

export default useEditTag;
