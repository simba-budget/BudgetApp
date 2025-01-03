import { SENTRY_DSN, SENTRY_ENV } from '@env';
import * as Sentry from '@sentry/react-native';

const setupLogging = () => {
  Sentry.init({ dsn: SENTRY_DSN, debug: true, environment: SENTRY_ENV });
};

export default setupLogging;
