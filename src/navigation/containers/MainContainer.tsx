import { AccountSelect } from '@features/accounts/containers';
import { Transaction } from '@features/transactions/containers';
import React, { ReactNode } from 'react';

export interface MainContainerProps {
  children: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => (
  <>
    {children}
    <Transaction />
    <AccountSelect />
  </>
);

export default MainContainer;
