import { useCategoriesTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Input } from 'src/common/components';

export interface CategoriesSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const CategoriesSearch = ({
  style,
  keyword,
  onKeywordChange,
}: CategoriesSearchProps) => {
  const { t } = useCategoriesTranslations();

  return (
    <View style={[margin('vertical')('l'), padding('horizontal')('m'), style]}>
      <Input
        iconName="search"
        onChange={onKeywordChange}
        value={keyword}
        placeholder={t('Search....')}
      />
    </View>
  );
};

export default CategoriesSearch;
