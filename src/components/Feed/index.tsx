import React, {useEffect, useState} from 'react';
import Post from '../Post';
import {FlatList, View} from 'react-native';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import Stories from '../Stories';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await API.graphql(graphqlOperation(listPosts));
        // @ts-ignore
        setPosts(res.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        keyExtractor={({id}) => id}
        ListHeaderComponent={Stories}
      />
    </View>
  );
};

export default Feed;
