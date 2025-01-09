import { Input } from '@common/v2/components';
import { useExternalAccountsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface ExternalAccountsSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const ExternalAccountsSearch = ({
  style,
  keyword,
  onKeywordChange,
}: ExternalAccountsSearchProps) => {
  const { t } = useExternalAccountsTranslations();

  return (
    <View style={[margin('vertical')('m'), padding('horizontal')('m'), style]}>
      <Input
        iconName="search"
        onChange={onKeywordChange}
        value={keyword}
        placeholder={t('Search....')}
      />
    </View>
  );
};

export default ExternalAccountsSearch;
