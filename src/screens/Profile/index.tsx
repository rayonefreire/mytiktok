import React, { useContext, useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles } from './styles';
import { Context } from '../../context';

export function Profile(){
  const { user, setUser } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color="#027DFF" />
      </View>
    );
  }

  function handleLogOut() {
    Alert.alert("Sair", "Se você sair do app todo os vídeo serão apagados do aplicativo. Deseja sair?", [
      {
        text: "Sim",
        onPress: () => {
          setIsLoading(true);
          setTimeout(() => {
            AsyncStorage.clear();
            setUser(null);
          }, 2000);
        },
      },
      {
        text: "Não",
        onPress: () => {return},
      }
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleLogOut}
        >
          <Ionicons name="exit-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <Image
          source={{ uri: user.picture }}
          style={styles.image}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.name}>Olá, </Text>
          <Text style={[styles.name, { fontWeight: 'bold' } ]}>{ user.given_name }</Text>
        </View>

        <Text style={styles.email}>{ user.email }</Text>
      </View>

    </SafeAreaView>
  );
}