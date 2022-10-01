import React, { useContext } from 'react';

import {
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from './styles';
import { Context } from '../../context';

export function AddVideo(){
  const { videos, getVideo } = useContext(Context);

  const navigation = useNavigation();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      videos.push(result);
      AsyncStorage.setItem("@VIDEOS", JSON.stringify(videos));
      getVideo();
      
      navigation.navigate("HomeScreen");
    }

    console.log(videos);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={pickImage}
      style={styles.container}
    >
      <Ionicons name="add" size={150} color="lightgray" />
      <Text style={styles.title}>
        Adicionar Vídeo
      </Text>
    </TouchableOpacity>
  );
}