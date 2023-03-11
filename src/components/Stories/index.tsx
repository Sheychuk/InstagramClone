import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import UserStoryPreview from '../UserStoryPreview';
import {API, graphqlOperation} from 'aws-amplify';
import {listStories} from '../../graphql/queries';

const ItemSeparator = () => <View style={styles.separator} />;

function Stories(): JSX.Element {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await API.graphql(graphqlOperation(listStories));
        // @ts-ignore
        setData(res.data.listStories.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  console.log(data);
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={({id}) => id}
        ItemSeparatorComponent={ItemSeparator}
        style={styles.container}
        renderItem={({item}) => <UserStoryPreview story={item} />}
      />
    </View>
  );
}

export default Stories;
