import React from 'react';
import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {SafeAreaView, StatusBar} from 'react-native';
import RootNavigation from './src/navigations/RootNavigation';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </ApplicationProvider>
    </SafeAreaView>
  );
};

export default App;
