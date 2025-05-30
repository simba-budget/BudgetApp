import { StatusBar } from '@common/components';
import { CachedResourcesLoader, ErrorBoundary } from '@common/containers';
import setupLogging from '@core/logging/setup';
import setupNotifications from '@core/notifications/setup';
import queryClient from '@core/query/client';
import { store } from '@core/store/store';
import ToastProvider from '@core/toasts/ToastProvider';
import { setupTranslations } from '@i18n/setup';
import linking from '@navigation/linking';
import Navigation from '@navigation/navigation';
import { theme } from '@navigation/styles';
import { flex1 } from '@styles/common';
import { colors } from '@styles/v2/urbanistTheme';
import { QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

dayjs.extend(relativeTime);
dayjs.extend(minMax);
setupTranslations();
setupNotifications();
setupLogging();

const App = () => (
  <View style={styles.container}>
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <CachedResourcesLoader>
            <GestureHandlerRootView style={flex1}>
              <SafeAreaProvider>
                <StatusBar translucent />
                <ToastProvider>
                  <Navigation theme={theme} linking={linking} />
                </ToastProvider>
              </SafeAreaProvider>
            </GestureHandlerRootView>
          </CachedResourcesLoader>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </View>
);

const styles = StyleSheet.create({
  container: {
    ...flex1,
    backgroundColor: colors.background.primary,
  },
});

export default App;
