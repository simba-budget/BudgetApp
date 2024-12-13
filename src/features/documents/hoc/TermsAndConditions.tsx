import React, { FC } from 'react';

import { Document } from '../components';
import { useTermsAndConditions } from '../hooks';

const TermsAndConditions: FC = () => {
  const { termsAndConditions, isLoading } = useTermsAndConditions();
  if (!termsAndConditions || isLoading) return <></>;

  return <Document document={termsAndConditions} />;
};

export default TermsAndConditions;
