import { Input } from '@common/v2/components';
import { useInvitationsTranslations } from '@i18n/hooks';
import { margin, padding } from '@styles/lightTheme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

export interface InvitationsSearchProps {
  style?: StyleProp<ViewStyle>;
  keyword?: string | null;
  onKeywordChange: (keyword: string) => void;
}

const InvitationsSearch = ({
  style,
  keyword,
  onKeywordChange,
}: InvitationsSearchProps) => {
  const { t } = useInvitationsTranslations();

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

export default InvitationsSearch;
