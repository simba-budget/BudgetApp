import { Input } from '@common/components';
import { useCategoriesTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

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
    <View style={[padding('horizontal')('m'), style]}>
      <Input
        bgColor="secondary"
        iconName="search"
        onChange={onKeywordChange}
        value={keyword}
        placeholder={t('Search....')}
      />
    </View>
  );
};

export default CategoriesSearch;
