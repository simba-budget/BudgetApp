import { API_URL } from '@env';
import { LinkingOptions } from '@react-navigation/native';

import { accountsRoute, mainRoute, openBankingRoute, RootParamsList } from './types';

const linking: LinkingOptions<RootParamsList> = {
  prefixes: [`${API_URL}/app/`],
  config: {
    screens: {
      [mainRoute]: {
        screens: {
          [accountsRoute]: {
            screens: { [openBankingRoute]: 'open-banking' },
          },
        },
      },
    },
  },
};

export default linking;
