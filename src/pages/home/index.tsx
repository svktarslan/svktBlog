import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SvktHeader from '../../components/SvktHeader';
import SvktText from '../../components/SvktText';
import {colors} from '../../theme/colors';
import ExploreItem from './ExploreItem';
import TrendsItem from './TrendsItem';
import Ionicons from 'react-native-vector-icons/Ionicons';
import screenNames from '../../navigators/screenNames';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
const App = ({navigation}: any) => {
  const reduxData = useSelector((state: RootState) => state.counter.data);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <SvktHeader
        title={'Ana Sayfa'}
        drawer
        titleColor={colors.primary}
        rightIcon={<Ionicons name="add" size={35} color={colors.primary} />}
        rightAction={() => navigation.navigate(screenNames.CREATE_BLOD_SCREEN)}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <SvktText
          text="Trends"
          fontSize={20}
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 8,
            paddingVertical: 13,
          }}
        />
        <ScrollView
          horizontal
          style={{
            width: '100%',
            borderBottomWidth: 2,
            borderColor: '#eeeeee',
          }}
          contentContainerStyle={{paddingVertical: 4, paddingLeft: 8}}>
          {reduxData
            .filter(x => x.trends === true)
            .map((x, i) => (
              <TrendsItem
                onPress={() =>
                  navigation.navigate(screenNames.READ_BLOG_SCREEN, {
                    ...x,
                  })
                }
                key={x.id}
                title={x.title}
                text={x.text}
                createdBy={x.createdBy}
                id={x.id}
              />
            ))}
        </ScrollView>
        <SvktText
          text="Explore"
          fontSize={20}
          style={{
            fontWeight: 'bold',
            paddingHorizontal: 8,
            paddingVertical: 13,
          }}
        />
        {reduxData
          .filter(x => x.trends === false)
          .map((x, i) => (
            <ExploreItem
              onPress={() =>
                navigation.navigate(screenNames.READ_BLOG_SCREEN, {
                  ...x,
                })
              }
              key={x.id}
              title={x.title}
              text={x.text}
              createdBy={x.createdBy}
              id={x.id}
            />
          ))}
        <View style={{height: 90}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
