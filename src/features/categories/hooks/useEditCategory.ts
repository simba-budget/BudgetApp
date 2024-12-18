import { CategoriesClient } from '@api/clients';
import { Category, SaveCategoryRequest } from '@api/clients/categories/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useCategoriesTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateCategories } from '../slice';

interface Options {
  onSuccess: (category: Category) => void;
}

const useEditCategory = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useCategoriesTranslations();

  const mutationFn = ({ id, ...request }: SaveCategoryRequest & { id: number }) => {
    return CategoriesClient.editCategory(id, request);
  };

  const { mutateAsync: editCategory, isPending: isSubmitting } = useMutation({
    mutationFn,
    onSuccess: (response) => {
      showSuccessToast(t('Category is successfully updated!'));
      onSuccess(response.data);
      dispatch(updateCategories());
    },
  });

  return { editCategory, isSubmitting };
};

export default useEditCategory;
