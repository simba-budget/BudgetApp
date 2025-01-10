import { useAppSelector } from '@core/store/store';
import { selectSelectedAccountIdStrict } from '@features/accounts/selectors';
import { useCategories } from '@features/categories/hooks';
import { mapCategoryToOption } from '@features/categories/map';
import { useCategoriesTranslations } from '@i18n/hooks';
import React, { useMemo, useState } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Select, SelectOption, Text } from 'src/common/components';

export interface CategoriesSelectProps {
  style?: StyleProp<ViewStyle>;
  value: number | null;
  onChange: (value: number | null) => void;
}

const CategoriesSelect = ({ style, value }: CategoriesSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useCategoriesTranslations();
  const accountId = useAppSelector(selectSelectedAccountIdStrict);

  const { categories } = useCategories({
    filter: { accountId },
    sort: { column: 'name', direction: 'asc' },
  });

  const options = useMemo<SelectOption[]>(
    () => categories.map(mapCategoryToOption),
    [categories],
  );

  return (
    <View style={style}>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <Text>Selected: {JSON.stringify(value, null, 2)}</Text>
      </TouchableOpacity>
      <Select
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={t('Select Category')}
        options={options}
      />
    </View>
  );
};

export default CategoriesSelect;
