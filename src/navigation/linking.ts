import { API_URL } from '@env';
import { RootParamsList } from '@navigation/navigation';
import { LinkingOptions } from '@react-navigation/native';

import { mainRoute, openBankingRoute } from './types';

const linking: LinkingOptions<RootParamsList> = {
  prefixes: [`${API_URL}/app/`],
  config: {
    screens: {
      [mainRoute]: {
        screens: {
          [openBankingRoute]: 'open-banking',
        },
      },
    },
  },
};

export default linking;
