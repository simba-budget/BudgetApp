import { IconName } from '@icons';

const iconNames: IconName[] = ['user', 'card', 'calendar', 'call', 'chart'];

export const getRandomIcon = () => {
  const randomIndex = Math.floor(Math.random() * iconNames.length);
  return iconNames[randomIndex];
};
