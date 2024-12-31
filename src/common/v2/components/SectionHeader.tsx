import { flex1, rowCenter } from '@styles/common';
import React from 'react';
import { SectionListData, View } from 'react-native';

import { Section } from '../../types';

import Text from './Text';

export interface SectionHeaderProps<T> {
  section: SectionListData<T, Section<T>>;
}

const SectionHeader = <T,>({ section }: SectionHeaderProps<T>) => (
  <View style={rowCenter}>
    <Text size="xs" weight="medium" color="tertiary" style={flex1}>
      {section.title}
    </Text>
    {section.subtitle && (
      <Text weight="semiBold" size="xs" color="accent">
        {section.subtitle}
      </Text>
    )}
  </View>
);

export default SectionHeader;
