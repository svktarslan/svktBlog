import {useNavigation} from '@react-navigation/native';
import React, {ReactComponentElement, memo} from 'react';
import {I18nManager, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SparkoText from '../SvktText';
import {colors} from '../../theme/colors';

interface SparkoHeaderType {
  title?: string;
  drawer?: boolean;
  titleSize?: number;
  titleColor?: string;
  rightIcon?: ReactComponentElement<any, any>;
  rightAction?: () => void;
}

const App = ({
  title,
  drawer,
  titleSize = 25,
  titleColor,
  rightIcon,
  rightAction,
}: SparkoHeaderType) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        {
          backgroundColor: drawer ? 'transparent' : 'transparent',
          flexDirection: 'row',
          width: '100%',
          height: 50,
          borderRadius: 8,
        },
      ]}>
      <TouchableOpacity
        onPress={() =>
          drawer ? console.log('OPEN DRAWER') : navigation.goBack()
        }
        style={[
          {
            width: 70,
            height: '100%',
            justifyContent: 'center',
          },
        ]}>
        {drawer ? (
          <Ionicons
            name="menu-outline"
            size={39}
            color={colors.primary}
            style={{
              marginLeft: 5,
              transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
            }}
          />
        ) : (
          <Ionicons
            name="arrow-back"
            size={25}
            color="#000000"
            style={{
              transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
            }}
          />
        )}
      </TouchableOpacity>
      <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
        <SparkoText
          text={title || ''}
          fontSize={titleSize}
          style={{color: titleColor ? titleColor : '#000000'}}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          !rightAction ? console.log('Open Notification Page') : rightAction()
        }
        style={[
          {
            width: 70,
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-end',
          },
        ]}>
        {!rightIcon ? (
          drawer ? (
            <Ionicons
              name="notifications-outline"
              size={30}
              color={colors.primary}
              style={{
                marginRight: 8,
              }}
            />
          ) : null
        ) : (
          rightIcon
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(App);
