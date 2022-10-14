import React, { useRef, useContext, useEffect } from 'react';

import {
  View,
  FlatList,
  Text,
} from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import { Octicons } from '@expo/vector-icons';

import { styles } from './styles';
import { Context } from '../../context';

type Props = {
  url: string;
}

export function Home(){
  const { videos, getVideo } = useContext(Context);

  const video = useRef(null);

  function ItemVideo({ url } : Props ) {
    return (
      <Video
        ref={video}
        isLooping
        resizeMode={ResizeMode.COVER}
        useNativeControls
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

        ListEmptyComponent={() => (
          <View style={styles.empytComponent}>
            <Text style={styles.textEmpyt}>
              Você ainda não adicionou nenhum vídeo
            </Text>

            <Octicons name="video" size={80} color="gray" />
          </View>
        )}
      />
    </View>
  );
}