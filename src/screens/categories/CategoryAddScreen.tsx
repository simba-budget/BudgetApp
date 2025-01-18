import { BottomSheet } from '@common/components';
import { useSafeBottomInset } from '@common/hooks';
import { CategoryAdd } from '@features/categories/containers';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RootNavigation } from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const CategoryAddScreen = () => {
  const paddingBottom = useSafeBottomInset();
  const navigation = useNavigation<RootNavigation>();

  return (
    <BottomSheet isOpen onClose={navigation.goBack}>
      <BottomSheetView style={{ paddingBottom }}>
        <CategoryAdd />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CategoryAddScreen;
