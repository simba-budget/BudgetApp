import * as Sentry from '@sentry/react-native';
import { center, flex1, fullWidth } from '@styles/common';
import { gap, margin, padding } from '@styles/lightTheme';
import React, { Component, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { SafeAreaView, View } from 'react-native';

import { Button, Text } from '../components';

export interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    Sentry.captureException(error);
  }

  handleRefresh = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { children, t } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <SafeAreaView style={flex1}>
          <View style={[flex1, padding('vertical')('m'), gap('row')('xl')]}>
            <View style={[flex1, center, padding('horizontal')('xxl')]}>
              <Text
                textAlign="center"
                style={margin('bottom')('s')}
                color="primary"
                size="xl"
                weight="semiBold">
                {t('Oops! Something went wrong')}
              </Text>
              <Text textAlign="center" color="tertiary" size="m" weight="medium">
                {t(
                  'Please try refreshing the app. If the issue persists, feel free to contact support',
                )}
              </Text>
            </View>
            <View style={padding('horizontal')('m')}>
              <Button
                style={fullWidth}
                color="primary"
                size="medium"
                title={t('Restart')}
                onPress={this.handleRefresh}
              />
            </View>
          </View>
        </SafeAreaView>
      );
    }

    return children;
  }
}

export default withTranslation('common')(ErrorBoundary);
