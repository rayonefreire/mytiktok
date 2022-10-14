import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from '@expo/vector-icons';

import { AddVideo } from "../screens/AddVideo";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
}

function AddVideoStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddVideo" component={AddVideo} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Adicionar') {
            iconName = focused
              ? 'add-circle'
              : 'add-circle-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused
              ? 'ios-person'
              : 'ios-person-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
          opacity: 0.8,
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Adicionar" component={AddVideoStack} />
      <Tab.Screen name="Perfil" component={ProfileStack} />
    </Tab.Navigator>
  );
}