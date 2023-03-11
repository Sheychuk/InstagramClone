import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  GestureResponderEvent,
  TextInput,
  ActivityIndicator,
} from 'react-native';
// import {RouteProp, useRoute} from '@react-navigation/native';
// import {Story} from '../../data/types';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API, graphqlOperation} from 'aws-amplify';
import {listStories} from '../../graphql/queries';

// type StoryRouteParams = Story;

function StoryScreen(): JSX.Element {
  // const route = useRoute<RouteProp<Record<string, StoryRouteParams>, string>>();
  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const storiesData = await API.graphql(graphqlOperation(listStories));
        console.log(storiesData);
        //@ts-ignore
        setStories(storiesData.data.listStorys.items);
      } catch (e) {
        console.log('error fetching stories');
        console.log(e);
      }
    };
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt: GestureResponderEvent) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;

    if (x < screenWidth / 2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];
  console.log(activeStory);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        <ImageBackground source={{uri: activeStory.image}} style={styles.image}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                editable
                placeholder="Send message"
                placeholderTextColor={'white'}
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons
                name="paper-plane-outline"
                size={35}
                color={'#ffffff'}
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default StoryScreen;
