import { ONE_SIGNAL_APP_ID } from '@env';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const setupNotifications = async () => {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(ONE_SIGNAL_APP_ID);
  await OneSignal.Notifications.requestPermission(true);
  OneSignal.Notifications.addEventListener('click', console.log);
};

export default setupNotifications;
