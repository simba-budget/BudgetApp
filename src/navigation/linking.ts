import { API_URL } from '@env';
import { LinkingOptions } from '@react-navigation/native';

import { RootParams } from './navigators/root';

const linking: LinkingOptions<RootParams> = {
  prefixes: [`${API_URL}/app/`],
};

export default linking;
