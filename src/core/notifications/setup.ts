import { ONE_SIGNAL_APP_ID } from '@env';
import { LogLevel, OneSignal } from 'react-native-onesignal';

const setupNotifications = async () => {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(ONE_SIGNAL_APP_ID);
  OneSignal.Notifications.addEventListener('click', console.log);
};

export default setupNotifications;
