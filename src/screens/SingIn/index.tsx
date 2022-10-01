import React, { useContext } from 'react';

import {
  View
} from 'react-native';

import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';
import { styles } from './styles';
import { Context } from '../../context';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

// AsyncStorage.clear()

export function SingIn(){
  const { setUser } = useContext(Context);

  async function handleSignIn() {
    const CLIENT_ID = '74386472075-sedaq7rr2g73gbns0a15bjf6t7lv4oh5.apps.googleusercontent.com'
    const REDIRECT_URI = 'https://auth.expo.io/@rayone/mytiktok'
    const RESPOSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPOSE_TYPE}&scope=${SCOPE}`
  
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

    if (type === 'success') {
      setUser(JSON.parse(params.access_token));
    }
  }

  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o Google"
        onPress={handleSignIn}
      />
    </View>
  );
}