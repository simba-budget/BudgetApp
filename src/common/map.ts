import { Choice } from '@common/components/Choices';

import { Time } from './types';

export const mapTimeToChoice = (time: Time): Choice<number> => ({
  label: `${time.timeFrom} - ${time.timeTo}`,
  value: time.id,
});
