import {
  DocumentTranslation,
  Document as DocumentType,
} from '@api/clients/documents/types';
import { getTranslation } from '@utils/translations';
import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { Markdown } from 'src/common/components';

export interface DocumentProps {
  document: DocumentType;
}

const Document = ({ document }: DocumentProps) => {
  const { translations } = document;
  const locale = 'EN';

  const translation = useMemo<DocumentTranslation | null>(
    () => getTranslation(translations, locale),
    [locale, translations],
  );

  return (
    <ScrollView>
      <Markdown content={translation?.content ?? ''} />
    </ScrollView>
  );
};

export default Document;
