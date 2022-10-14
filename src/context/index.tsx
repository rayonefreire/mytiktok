import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Profile = {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  locale: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

type Props = {
  videos: any[];
  signed: boolean;
  user: Profile;
  getVideo(): Promise<void>;
  getUser(): Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<Profile>>;
}

type Children = {
  children: any;
}

export const Context = createContext({} as Props);

export function Provider({ children } : Children ) {
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState<Profile>();

  async function getVideo() {
    const listaVideo = await AsyncStorage.getItem("@VIDEOS");

    if (listaVideo !== null) {
      setVideos(JSON.parse(listaVideo));
    }
  }

  async function getUser() {
    const usuario = await AsyncStorage.getItem("@USER");
    
    if(usuario !== null) {
      setUser(JSON.parse(usuario));
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Context.Provider value={{
      videos,
      getVideo,
      signed: !!user,
      getUser,
      user,
      setUser,
    }}>
      { children }
    </Context.Provider>
  );
}