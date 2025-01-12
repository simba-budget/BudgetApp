import { Input } from '@common/components';
import { useTagsTranslations } from '@i18n/hooks';
import { padding } from '@styles/lightTheme';
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

export default TagsSearch;
