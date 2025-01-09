import { Input } from '@common/v2/components';
import { useMerchantsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface MerchantsSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const MerchantsSearch = ({
  style,
  keyword,
  onKeywordChange,
}: MerchantsSearchProps) => {
  const { t } = useMerchantsTranslations();

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

export default MerchantsSearch;
