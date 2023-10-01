import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import ScreenNames from './screenNames';
import {routes} from './routes';
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenNames.HOME_SCREEN}>
        {routes.map(x => (
          <Stack.Screen key={x.name} name={x.name} component={x.component} />
        ))}
      </Stack.Navigator>
    </View>
  );
};
