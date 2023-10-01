import {memo} from 'react';
import {Image} from 'react-native';
import {TouchableOpacity, View} from 'react-native';
import SvktText from '../../components/SvktText';
import {markdownToText} from '../../utils/helpers';
import {colors} from '../../theme/colors';

interface RowItemType {
  title: string;
  createdBy: string;
  text: string;
  onPress: () => void;
  id: number;
}

const App = ({title, createdBy, text, onPress, id}: RowItemType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 120,
        paddingHorizontal: 8,
      }}>
      <View
        style={{
          height: '100%',
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: '90%', width: '100%', borderRadius: 8}}
          source={{
            uri: `https://loremflickr.com/320/240?lock=${id}`,
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          padding: 8,
          paddingVertical: 20,
          justifyContent: 'space-between',
        }}>
        <SvktText
          text={title}
          style={{fontWeight: 'bold', paddingBottom: 5}}
          fontSize={17}
        />
        <SvktText text={markdownToText(text)} fontSize={13} maxLength={100} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            height: 30,
            paddingRight: 8,
          }}>
          <SvktText
            text={createdBy}
            fontSize={11}
            style={{fontWeight: 'bold'}}
            textColor={colors.secondary}
          />
          <SvktText
            text="1 Oct 2023"
            fontSize={11}
            textColor={colors.primary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(App);
