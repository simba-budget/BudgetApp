import { BottomSheet } from '@common/v2/components';
import { useAppDispatch, useAppSelector } from '@core/store/store';
import { setTransaction } from '@features/transactions/slice';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback } from 'react';

import { TransactionDetails } from '../components';
import { selectTransaction } from '../selectors';

const Transaction = () => {
  const dispatch = useAppDispatch();
  const transaction = useAppSelector(selectTransaction);

  const handleOnClose = useCallback(
    () => dispatch(setTransaction({ transaction: null })),
    [dispatch],
  );

  return (
    <BottomSheet isOpen={!!transaction} onClose={handleOnClose}>
      <BottomSheetView>
        {transaction && <TransactionDetails transaction={transaction} />}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default Transaction;
