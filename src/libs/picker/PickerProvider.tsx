import React, { ReactNode, useCallback, useMemo, useState } from 'react';

import PickerContext from './context';
import PickerSheet from './PickerSheet';
import { PickerContextValue, PickerOption } from './types';

export interface PickerProviderProps {
  children: ReactNode;
}

const PickerProvider = ({ children }: PickerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<PickerOption[]>([]);

  const handleOnOpen = useCallback((newOptions: PickerOption[]) => {
    setOptions(newOptions);
    setIsOpen(true);
  }, []);

  const handleOnClose = useCallback(() => {
    setOptions([]);
    setIsOpen(false);
  }, []);

  const value = useMemo<PickerContextValue>(
    () => ({ onClose: handleOnClose, onOpen: handleOnOpen }),
    [handleOnClose, handleOnOpen],
  );

  return (
    <PickerContext.Provider value={value}>
      {children}
      <PickerSheet isOpen={isOpen} onClose={handleOnClose} options={options} />
    </PickerContext.Provider>
  );
};

export default PickerProvider;
