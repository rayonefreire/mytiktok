import React, { useContext, useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { Context } from '../../context';


export function Profile(){
  const { user, setUser } = useContext(Context);
  
  async function loadProfile() {
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${user}`);
    const userinfo = await response.json();
    console.log(userinfo);

    setUser(userinfo);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      
        <TouchableOpacity
          activeOpacity={0.7}
        >
          <Ionicons name="exit-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.profile}>
        <Image
          source={{ uri: user.picture }}
          style={styles.image}
        />
        <Text style={styles.name}>{ user.name }</Text>
      </View>

    </SafeAreaView>
  );
}