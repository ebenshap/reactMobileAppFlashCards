import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchFlashCardResults } from '../utils/api';
import { connect } from 'react-redux';

import Home from './Home';
import DeckHome from './DeckHome';
import AddCard from './AddCard';
import Quiz from './Quiz';
import { receiveDecks } from '../actions'

const Stack = createStackNavigator();

class StackWrapper extends React.Component {

  componentDidMount() {
    fetchFlashCardResults().then(data => {
      this.props.receiveDecks(data);
      console.log(data)
    }); 
  }

  render() {
    
    return (
    <Stack.Navigator>      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeckHome" component={DeckHome} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="AddCard" component={AddCard} />
    </Stack.Navigator> )
  }
}

function mapStateToProps() {
  return {}
}

export default connect( mapStateToProps, {receiveDecks})(StackWrapper);