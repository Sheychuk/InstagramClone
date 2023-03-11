import {StyleSheet, Dimensions} from 'react-native';

const size = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: size,
    height: size,
  },
});

export default styles;
