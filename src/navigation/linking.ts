import { API_URL } from '@env';
import { LinkingOptions } from '@react-navigation/native';

import { openBankingRoute } from './navigators/account/types';
import { accountsRoute, mainRoute } from './navigators/main/types';
import { RootParams } from './navigators/root';

const linking: LinkingOptions<RootParams> = {
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
