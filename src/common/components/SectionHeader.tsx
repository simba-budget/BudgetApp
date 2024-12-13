import { BaseModel } from '@api/types';
import { flex1 } from '@styles/common';
import React from 'react';
import { SectionListData } from 'react-native';

import { Section } from '../types';

import TextBody from './TextBody';
import TextHeading from './TextHeading';
import View from './View';

export interface SectionHeaderProps<T> {
  section: SectionListData<T, Section<T>>;
}

const SectionHeader = <T extends BaseModel>(props: SectionHeaderProps<T>) => {
  const { section } = props;

  return (
    <View direction="row" align="center">
      <TextHeading weight="regular" color="tertiary" style={flex1}>
        {section.title}
      </TextHeading>
      {section.subtitle && <TextBody color="tertiary">{section.subtitle}</TextBody>}
    </View>
  );
};

export default SectionHeader;
