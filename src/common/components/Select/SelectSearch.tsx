import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { useCommonTranslations } from '@i18n/hooks';
import { padding, sizes } from '@styles/lightTheme';
import { colors, fonts, fontSizes } from '@styles/v2/urbanistTheme';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Svg from '../Svg';

export interface SelectSearchProps {
  onKeywordChange: (keyword: string) => void;
  style?: StyleProp<ViewStyle>;
}

const SelectSearch = ({ onKeywordChange, style }: SelectSearchProps) => {
  const { t } = useCommonTranslations();

  return (
    <View style={[padding('horizontal')('m'), style]}>
      <View style={styles.container}>
        <Svg
          style={styles.icon}
          size={22}
          name="search"
          color={colors.text.tertiary}
        />
        <BottomSheetTextInput
          autoCorrect={false}
          selectionColor={colors.text.tertiary}
          cursorColor={colors.text.primary}
          placeholderTextColor={colors.text.placeholder}
          keyboardAppearance="dark"
          style={styles.input}
          onChangeText={onKeywordChange}
          placeholder={t('Search....')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  icon: {
    top: 13,
    position: 'absolute',
    left: sizes.s,
    zIndex: 99,
  },
  input: {
    ...padding('right')('m'),
    ...fonts.urbanist.medium,
    paddingLeft: 40,
    fontSize: fontSizes.s.fontSize,
    color: colors.text.primary,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border.primary,
    backgroundColor: colors.background.secondary,
  },
});

export default SelectSearch;
