import { CategoriesClient } from '@api/clients';
import { Category } from '@api/clients/categories/types';
import { useAppDispatch } from '@core/store/store';
import { useMutation } from '@tanstack/react-query';

import { updateCategories } from '../slice';
import { SaveCategoryRequest } from '../types';

interface Options {
  accountId: number;
  onSuccess: (category: Category) => void;
}

const useAddCategory = (options: Options) => {
  const { onSuccess, accountId } = options;
  const dispatch = useAppDispatch();

  const { mutateAsync, isPending: isSubmitting } = useMutation({
    mutationFn: CategoriesClient.addCategory,
    onSuccess: (response) => {
      onSuccess(response.data);
      dispatch(updateCategories());
    },
  });

  const addCategory = (request: SaveCategoryRequest) => {
    return mutateAsync({ ...request, accountId });
  };

  return { addCategory, isSubmitting };
};

export default useAddCategory;
