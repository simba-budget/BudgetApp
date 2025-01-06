import { API_URL } from '@env';
import { LinkingOptions } from '@react-navigation/native';

import { mainRoute } from './navigators/main/types';
import { RootParams } from './navigators/root';

const linking: LinkingOptions<RootParams> = {
  prefixes: [`${API_URL}/app/`],
  config: {
    screens: {
      [mainRoute]: {
        screens: {},
      },
    },
  },
};

export default linking;
