import React, { FC } from 'react';

import { Document } from '../components';
import { usePrivacyPolicy } from '../hooks';

const PrivacyPolicy: FC = () => {
  const { isLoading, privacyPolicy } = usePrivacyPolicy();
  if (!privacyPolicy || isLoading) return <></>;
  return <Document document={privacyPolicy} />;
};

export default PrivacyPolicy;
