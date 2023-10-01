import React, {memo} from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface SparkoTextType {
  text: string;
  textColor?: string;
  style?: TextStyle | TextStyle[];
  maxLength?: number;
  fontSize?: number;
  onPress?: any;
  buttonStyle?: ViewStyle | ViewStyle[];
}

const App = ({
  text,
  style,
  maxLength,
  fontSize = 15.5,
  onPress,
  buttonStyle,
  textColor,
}: SparkoTextType) => {
  return (
    <>
      {typeof onPress === 'function' ? (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
          <Text
            style={[
              {
                fontSize: fontSize,
                color: textColor ? textColor : '#000000',
                textAlign: 'left',
              },
              style,
            ]}>
            {maxLength
              ? text.length > maxLength
                ? text.slice(0, maxLength) + '...'
                : text
              : text}
          </Text>
        </TouchableOpacity>
      ) : (
        <Text
          style={[
            {
              fontSize: fontSize,
              color: textColor ? textColor : '#000000',
              textAlign: 'left',
            },
            style,
          ]}>
          {maxLength
            ? text.length > maxLength
              ? text.slice(0, maxLength) + '...'
              : text
            : text}
        </Text>
      )}
    </>
  );
};

export default memo(App);
