import { Actions } from '@common/v2/components';
import { ActionItem } from '@common/v2/components/Actions';
import { useTagsTranslations } from '@i18n/hooks';
import {
  RootNavigation,
  tagDeleteRoute,
  tagEditRoute,
  tagRoute,
} from '@navigation/navigators/root';
import { useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';

export interface TagActionsProps {
  id: number;
}

const TagActions = ({ id }: TagActionsProps) => {
  const navigation = useNavigation<RootNavigation>();
  const { t } = useTagsTranslations();

  const items = useMemo<ActionItem[]>(
    () => [
      {
        title: t('View'),
        iconName: 'eye',
        description: t('View tag details'),
        onPress: () => navigation.replace(tagRoute, { id }),
      },
      {
        title: t('Edit'),
        iconName: 'edit',
        description: t('Edit tag details'),
        onPress: () => navigation.push(tagEditRoute, { id }),
      },
      {
        title: t('Delete'),
        iconName: 'delete',
        description: t('Delete tag'),
        onPress: () => navigation.push(tagDeleteRoute, { id }),
      },
    ],
    [t, navigation, id],
  );

  return <Actions items={items} title={t('Tag Actions')} />;
};

export default TagActions;
