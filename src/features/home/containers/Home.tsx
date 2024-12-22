import { Avatar, View } from '@common/components';
import React from 'react';

const Home = () => {
  return (
    <View ph="l" isTopSafe>
      <View direction="row">
        <Avatar fullName="Vytautas Saulis" />
      </View>
    </View>
  );
};

export default Home;
