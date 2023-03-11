import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import ProfilePicture from '../ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import type {RootStackParamList} from '../../router';
import {Story} from '../../data/types';

type UserStoryPreviewProps = {
  story: Story;
};

function UserStoryPreview({story}: UserStoryPreviewProps): JSX.Element {
  const {
    user: {image, name},
  } = story;

  const {navigate} = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigate('Story', story);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ProfilePicture uri={image} />
      <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
}

export default UserStoryPreview;
