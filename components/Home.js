import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListDecks from './ListDecks'
import AddDeckPage from './AddDeckPage'

const Tab = createBottomTabNavigator();

export default function Home(props) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="List Decks" component={ListDecks}  />
      <Tab.Screen name="Add Deck" component={AddDeckPage} />
    </Tab.Navigator>
  );
}

function mapStateToProps() {
  return {}
}

