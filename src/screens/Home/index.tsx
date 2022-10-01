import React, { useRef, useContext, useEffect } from 'react';

import {
  View,
  FlatList,
} from 'react-native';
import { Video } from 'expo-av';

import { styles } from './styles';
import { Context } from '../../context';

type Props = {
  url: string;
}

// AsyncStorage.clear()

export function Home(){
  const { videos, getVideo } = useContext(Context);

  const video = useRef(null);

  function ItemVideo({ url } : Props ) {
    return (
      <Video
        ref={video}
        isLooping
        useNativeControls
        volume={1.0}
        style={styles.video}
        source={{ uri: url }}
      />
    );
  }

  useEffect(() => {
    getVideo();
  }, []);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        extraData={videos}
        keyExtractor={(item) => item.assetId}
        renderItem={({ item }) => <ItemVideo url={item.uri} />}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        style={{ marginHorizontal: -24 }}
      />
    </View>
  );
}