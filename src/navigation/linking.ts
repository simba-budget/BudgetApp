import { RootParamsList } from '@navigation/navigation';
import { LinkingOptions } from '@react-navigation/native';

import { mainRoute, openBankingRoute } from './types';

const linking: LinkingOptions<RootParamsList> = {
  prefixes: ['budgetapp://'],
  config: {
    screens: {
      [mainRoute]: {
        screens: {
          [openBankingRoute]: openBankingRoute,
        },
      },
    },
  },
};

export default linking;
