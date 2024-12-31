import {
  DocumentTranslation,
  Document as DocumentType,
} from '@api/clients/documents/types';
import { Markdown, ScrollView } from '@common/components';
import { getTranslation } from '@utils/translations';
import React, { FC, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface DocumentProps {
  style?: StyleProp<ViewStyle>;
  document: DocumentType;
}

const Document: FC<DocumentProps> = (props) => {
  const { style, document } = props;
  const { translations } = document;
  const locale = 'EN';

  const translation = useMemo<DocumentTranslation | null>(
    () => getTranslation(translations, locale),
    [locale, translations],
  );

  return (
    <ScrollView pv="l" style={style} bottomSafe="default">
      <Markdown content={translation?.content ?? ''} />
    </ScrollView>
  );
};

export default Document;
