import { CachedResourcesLoader } from '@common/hoc';
import setupLogging from '@core/logging/setup';
import setupNotifications from '@core/notifications/setup';
import queryClient from '@core/query/client';
import { store } from '@core/store/store';
import ToastProvider from '@core/toasts/ToastProvider';
import { Transaction } from '@features/transactions/containers';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { setupTranslations } from '@i18n/setup';
import { PickerProvider } from '@libs/picker';
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
setupLogging();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <CachedResourcesLoader>
          <GestureHandlerRootView style={flex1}>
            <SafeAreaProvider>
              <ToastProvider>
                <BottomSheetModalProvider>
                  <PickerProvider>
                    <Navigation linking={linking} />
                  </PickerProvider>
                  <Transaction />
                </BottomSheetModalProvider>
              </ToastProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </CachedResourcesLoader>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
