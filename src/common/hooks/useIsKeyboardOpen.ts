import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useIsKeyboardOpen = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardWillShow', () => {
      setIsKeyboardOpen(true);
    });

    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return isKeyboardOpen;
};

export default useIsKeyboardOpen;
