import { CachedResourcesLoader } from '@common/hoc';
import { StatusBar } from '@common/v2/components';
import setupNotifications from '@core/notifications/setup';
import queryClient from '@core/query/client';
import { store } from '@core/store/store';
import ToastProvider from '@core/toasts/ToastProvider';
import { setupTranslations } from '@i18n/setup';
import linking from '@navigation/linking';
import Navigation from '@navigation/navigation';
import { flex1 } from '@styles/common';
import { QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

dayjs.extend(relativeTime);
dayjs.extend(minMax);
setupTranslations();
setupNotifications();
// setupLogging();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CachedResourcesLoader>
          <GestureHandlerRootView style={flex1}>
            <SafeAreaProvider>
              <StatusBar translucent />
              <ToastProvider>
                <Navigation linking={linking} />
              </ToastProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </CachedResourcesLoader>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
