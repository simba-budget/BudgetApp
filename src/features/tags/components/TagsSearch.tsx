import { Input } from '@common/v2/components';
import { useTagsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface TagsSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const TagsSearch = ({ style, keyword, onKeywordChange }: TagsSearchProps) => {
  const { t } = useTagsTranslations();

  return (
    <View style={[margin('vertical')('m'), padding('horizontal')('m'), style]}>
      <Input onChange={onKeywordChange} value={keyword} placeholder={t('Search....')} />
    </View>
  );
};

export default TagsSearch;
