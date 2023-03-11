import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

type ProfilePictureProps = {
  uri: string;
  size?: number;
};

function ProfilePicture({uri, size = 60}: ProfilePictureProps): JSX.Element {
  return (
    <View style={[styles.container, {width: size + 4, height: size + 4}]}>
      <Image
        source={{
          uri,
        }}
        style={[styles.image, {width: size, height: size}]}
      />
    </View>
  );
}

export default ProfilePicture;
