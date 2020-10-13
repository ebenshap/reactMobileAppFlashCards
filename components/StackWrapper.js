import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';

import Home from './Home';
import DeckHome from './DeckHome';
import AddCardPage from './AddCardPage';
import Quiz from './Quiz';
import { receiveDecks } from '../actions/decks'


const Stack = createStackNavigator();

class StackWrapper extends React.Component {

  componentDidMount() {
    this.props.receiveDecks();
  }

  render() {
    
    return (
    <Stack.Navigator>      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Deck Home" component={DeckHome} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Add Card" component={AddCardPage} />
    </Stack.Navigator> )
  }
}

function mapStateToProps() {
  return {}
}

export default connect( mapStateToProps, {receiveDecks})(StackWrapper);