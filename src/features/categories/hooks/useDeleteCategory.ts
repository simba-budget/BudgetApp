import { CategoriesClient } from '@api/clients';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useCategoriesTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateCategories } from '../slice';

interface Options {
  onSuccess: () => void;
}

const useDeleteCategory = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useCategoriesTranslations();

  const { mutateAsync: deleteCategory, isPending: isSubmitting } = useMutation({
    mutationFn: CategoriesClient.deleteCategory,
    onSuccess: () => {
      showSuccessToast(t('Category is successfully deleted!'));
      dispatch(updateCategories());
      onSuccess();
    },
  });

  return { deleteCategory, isSubmitting };
};

export default useDeleteCategory;
