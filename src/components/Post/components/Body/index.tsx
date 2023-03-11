import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

type BodyProps = {
  imageUri: string;
};

const Body = ({imageUri}: BodyProps) => (
  <Image source={{uri: imageUri}} style={styles.image} />
);

export default Body;
