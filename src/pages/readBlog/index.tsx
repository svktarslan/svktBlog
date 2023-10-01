import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvktHeader from '../../components/SvktHeader';
import SvktText from '../../components/SvktText';
import {colors} from '../../theme/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import screenNames from '../../navigators/screenNames';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
const App = ({route, navigation}: any) => {
  const reduxData = useSelector((state: RootState) => state.counter.data);
  const data = reduxData.find(x => x.id === route.params?.id);
  const text = data?.text;
  const title = data?.title;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{paddingHorizontal: 10}}>
        <SvktHeader
          title={title}
          titleSize={25}
          rightIcon={
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={25}
              color={colors.primary}
            />
          }
          rightAction={() =>
            navigation.navigate(screenNames.CREATE_BLOD_SCREEN, {
              ...data,
            })
          }
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{padding: 8}}>
        <View
          style={{
            height: 240,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Image
            style={{height: '100%', width: '100%', borderRadius: 3}}
            source={{
              uri: `https://loremflickr.com/320/240?lock=${data.id}`,
            }}
          />
        </View>
        <SvktText text={text || ''} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
