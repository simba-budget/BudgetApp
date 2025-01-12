import Text from '@common/components/Text';
import { center, flex1, rowCenter } from '@styles/common';
import { padding } from '@styles/lightTheme';
import { colors } from '@styles/v2/urbanistTheme';
import React, { ReactNode, useRef, useState } from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PagerView from 'react-native-pager-view';

export interface Tab {
  title: string;
  children: ReactNode;
}

export interface TabsProps {
  style?: StyleProp<ViewStyle>;
  tabs: Tab[];
  initialPage?: number;
}

const Tabs = ({ tabs, style, initialPage = 0 }: TabsProps) => {
  const [page, setPage] = useState(0);
  const ref = useRef<PagerView>(null);

  return (
    <>
      <View style={padding('horizontal')('m')}>
        <View style={styles.tabs}>
          {tabs.map((tab, index) => (
            <TouchableOpacity
              style={[styles.tab, page === index && styles.activeTab]}
              disabled={page === index}
              onPress={() => ref.current?.setPage(index)}
              key={index}>
              <Text
                size="xs"
                weight="semiBold"
                color={page === index ? 'secondary' : 'primary'}
                textAlign="center">
                {tab.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <PagerView
        ref={ref}
        onPageSelected={(event) => setPage(event.nativeEvent.position)}
        style={[flex1, padding('top')('m'), style]}
        initialPage={initialPage}>
        {tabs.map((tab, index) => (
          <View key={index}>{tab.children}</View>
        ))}
      </PagerView>
    </>
  );
};

const styles = StyleSheet.create({
  tabs: {
    ...rowCenter,
    borderRadius: 20,
    overflow: 'hidden',
    borderColor: colors.border.primary,
    borderWidth: 1,
    height: 40,
    backgroundColor: colors.background.secondary,
  },
  tab: {
    ...center,
    ...flex1,
    ...padding('vertical')('xs'),
    height: '100%',
    borderRadius: 18,
  },
  activeTab: {
    backgroundColor: colors.background.accent,
  },
});

export default Tabs;
