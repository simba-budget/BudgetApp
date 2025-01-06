import { Profile } from '@api/clients/profile/types';
import { BottomSheet } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { useProfile } from '@features/profile/hooks';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AccountDetails } from '../components';
import {
  selectIsSelectAccountVisible,
  selectSelectedAccountStrict,
} from '../selectors';
import { setIsSelectAccountVisible } from '../slice';

const AccountSelect = () => {
  const { bottom } = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const isSelectAccountVisible = useAppSelector(selectIsSelectAccountVisible);
  const account = useAppSelector(selectSelectedAccountStrict);
  const { profile } = useProfile();

  const handleOnClose = useCallback(
    () => dispatch(setIsSelectAccountVisible({ isSelectAccountVisible: false })),
    [dispatch],
  );

  return (
    <BottomSheet isOpen={isSelectAccountVisible} onClose={handleOnClose}>
      <BottomSheetView>
        <View style={{ paddingBottom: bottom }}>
          <AccountDetails
            onAccountEditPress={console.log}
            profile={profile as Profile}
            account={account}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default AccountSelect;
