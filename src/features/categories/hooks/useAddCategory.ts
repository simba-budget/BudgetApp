import { CategoriesClient } from '@api/clients';
import { SaveCategoryRequest } from '@api/clients/categories/types';
import { Category } from '@api/clients/categories/types';
import { useAppDispatch } from '@core/store/store';
import { showSuccessToast } from '@core/toasts/actions';
import { useCategoriesTranslations } from '@i18n/hooks';
import { useMutation } from '@tanstack/react-query';

import { updateCategories } from '../slice';

interface Options {
  onSuccess: (category: Category) => void;
}

const useAddCategory = (options: Options) => {
  const { onSuccess } = options;
  const dispatch = useAppDispatch();
  const { t } = useCategoriesTranslations();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: CategoriesClient.addCategory,
    onSuccess: (response) => {
      showSuccessToast(t('Category is successfully added!'));
      onSuccess(response.data);
      dispatch(updateCategories());
    },
  });

  const addCategory = (request: SaveCategoryRequest) => {
    return mutateAsync(request);
  };

  return { addCategory, isSubmitting };
};

export default useAddCategory;
