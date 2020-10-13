import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from "@expo/vector-icons";

import ListDecks from './ListDecks'
import AddDeckPage from './AddDeckPage'

const Tab = createBottomTabNavigator();

const tabBarOptions= {
  activeTintColor: '#dcff75',
  inactiveTintColor: '#ddd',
  labelStyle: {
    fontSize: 12,
  },
  style: {
    backgroundColor: "#0070a9",
    paddingBottom: 4
  },
  showIcon: true
}


export default function Home(props) {

  return (
    <Tab.Navigator 
    tabBarOptions={tabBarOptions}>
      <Tab.Screen style={{fontSize:30}} name="List Decks" component={ListDecks} 
      options={{
        tabBarIcon: (tabInfo) => (
          <MaterialIcons name="home" size={18} color={tabInfo.color} />
        ),
      }} />
      <Tab.Screen name="Add Deck" component={AddDeckPage}  
      options={{
        tabBarIcon: (tabInfo) => (
          <MaterialIcons name="add" size={18} color={tabInfo.color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}
