import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {navigationRef} from './utils/helpers';
import Application from './navigators/Application';
import {store} from './store/index';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{flex: 1}}>
          <NavigationContainer ref={navigationRef}>
            <Application />
          </NavigationContainer>
        </KeyboardAvoidingView>
      </Provider>
    </View>
  );
};
export default App;
