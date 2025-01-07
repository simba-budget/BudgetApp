import { createContext } from 'react';

import { PickerContextValue } from './types';

const PickerContext = createContext<PickerContextValue>({
  onClose: () => {},
  onOpen: () => {},
});

export default PickerContext;
