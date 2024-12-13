import { ThemeTextColors } from '@styles/types';
import React, { FC, ReactElement, useMemo } from 'react';
import { Trans } from 'react-i18next';

import TextBody, { TextBodyProps } from './TextBody';

export interface TransTextBodyProps extends Omit<TextBodyProps, 'children'> {
  ns: string;
  i18nKey: string;
  values?: Record<string, unknown>;
  highlightedColor?: keyof ThemeTextColors;
  onHighlightedPress?: () => void;
}

const TransTextBody: FC<TransTextBodyProps> = (props) => {
  const {
    ns,
    i18nKey,
    values,
    highlightedColor = 'highlightPrimary',
    onHighlightedPress,
    ...rest
  } = props;

  const memoizedHighlightedText = useMemo<ReactElement>(
    () => <TextBody {...rest} onPress={onHighlightedPress} color={highlightedColor} />,
    [rest, highlightedColor, onHighlightedPress],
  );

  return (
    <TextBody {...rest}>
      <Trans
        ns={ns}
        values={values}
        i18nKey={i18nKey}
        components={{ highlighted: memoizedHighlightedText }}
      />
    </TextBody>
  );
};

export default TransTextBody;
