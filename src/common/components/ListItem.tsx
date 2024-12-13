import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { ListItem as ListItemType } from '../types';

import IconButton from './IconButton';
import TextBody from './TextBody';
import TextHeading from './TextHeading';
import View from './View';

export interface ListItemProps {
  style?: StyleProp<ViewStyle>;
  item: ListItemType;
  index: number;
}

const ListItem: FC<ListItemProps> = (props) => {
  const { style, item } = props;

  const { highlightColor, iconName, leftTitle, leftSubtitle, rightTitle, rightSubtitle } =
    item;

  return (
    <View direction="row" align="center" gap="s" style={style}>
      {!!iconName && (
        <IconButton
          isDisabled
          iconColor={highlightColor}
          size="medium"
          variant="primary"
          iconName={iconName}
        />
      )}
      <View flex1 gap="xxs">
        <TextHeading weight="bold">{leftTitle}</TextHeading>
        <TextBody color="tertiary" size="xs">
          {leftSubtitle}
        </TextBody>
      </View>
      <View gap="xxs">
        {!!rightTitle && (
          <TextHeading color={highlightColor} textAlign="right">
            {rightTitle}
          </TextHeading>
        )}
        {!!rightSubtitle && (
          <TextBody color="tertiary" textAlign="right" size="xs">
            {rightSubtitle}
          </TextBody>
        )}
      </View>
    </View>
  );
};

export default ListItem;
