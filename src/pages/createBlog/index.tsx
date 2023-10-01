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
import {deleteData, setReduxData, updateReduxData} from '../../store/stateData';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import Ionicons from 'react-native-vector-icons/Ionicons';
import screenNames from '../../navigators/screenNames';

const arrObjIds = (x: any[]) => {
  if (x.length === 0) return 1;
  const result = x.map(elements => {
    return elements.id;
  });
  return Math.max(...result) + 1;
};

const App = ({route, navigation}: any) => {
  const reduxData = useSelector((state: RootState) => state.counter.data);
  const dispatch = useDispatch();
  const id = route.params?.id;
  const [blog, setBlog] = useState({
    title: route.params?.title || ``,
    text: route.params?.text || ``,
  });
  const publish = () => {
    dispatch(
      setReduxData({
        ...blog,
        id: arrObjIds(reduxData),
        createdBy: 'Sevket ARSLAN',
        trends:
          reduxData.length === 0 ? true : !reduxData[reduxData.length - 1],
      }),
    );
    navigation.goBack();
  };

  function updateData() {
    const oldData = reduxData;
    const findData = oldData.find(x => x.id === id);
    const newData = {...findData, title: blog.title, text: blog.text};

    var result = reduxData.map(function (item) {
      if (item.id === newData.id) {
        return newData;
      } else {
        return item;
      }
    });

    dispatch(updateReduxData(result));
    navigation.goBack();
  }

  const deleteItem = () => {
    dispatch(deleteData(id));

    navigation.popToTop();
  };
  const disabled = blog.text === '' || blog.title === '';
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 8}}>
      <SvktHeader
        title="Taslak"
        rightIcon={
          id && <Ionicons name="trash-outline" size={28} color={'red'} />
        }
        rightAction={() => id && deleteItem()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <SvktText
          text="Potansiyelinizi Keşfedin, Sınırları Zorlayın"
          textColor={colors.primary}
          style={{padding: 8, textAlign: 'center', fontWeight: 'bold'}}
        />
        <View
          style={{
            width: '100%',
            height: 60,
            borderBottomWidth: 0.5,
            borderColor: '#eeeeee',
            marginBottom: 18,
          }}>
          <TextInput
            value={blog.title}
            onChangeText={x => {
              setBlog(y => {
                return {
                  ...y,
                  title: x,
                };
              });
            }}
            placeholder="Title"
            placeholderTextColor={'#dddddd'}
            maxLength={30}
            style={{
              width: '100%',
              height: '100%',
              paddingHorizontal: 8,
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}
          />
        </View>
        <TextInput
          placeholder="Tell Your Story..."
          value={blog.text}
          onChangeText={x => {
            setBlog(y => {
              return {
                ...y,
                text: x,
              };
            });
          }}
          placeholderTextColor={'#dddddd'}
          multiline
          style={{
            width: '100%',
            height: '100%',
            paddingHorizontal: 8,
          }}
        />
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 80,
          paddingHorizontal: 18,
          paddingVertical: 8,
        }}>
        <TouchableOpacity
          onPress={() => (id ? updateData() : publish())}
          disabled={disabled}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
            backgroundColor: colors.secondary,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: disabled ? 0.5 : 1,
          }}>
          <SvktText text="Yayınla" textColor="#ffffff" fontSize={18} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
