import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { deleteDeck } from '../actions'

const handleDeleteCard= (deckName, navigation, deleteCard) => {
  deleteCard(deckName);
  navigation.navigate('Home')
}

function DeckHome({deckName, cards, navigation, deleteDeck}) {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Deck Name: { deckName }</Text>
      <Text>Card Count: { cards.length }</Text>
      <Button title="Add Card" onPress={function(){ navigation.navigate('AddCard', {
        deckName
      }) }} />
      <Button title="Start Quiz" onPress={function(){ navigation.navigate('Quiz', {
        cards
      }) }} />
      <Button title="Delete Deck" onPress={ () => { handleDeleteCard(deckName, navigation, deleteDeck) } } />
    </View>
  );
}
 
export default connect((state, {route})=>{
  const { deckName } = route.params;
  const cards = state[deckName] ? state[deckName] : [];
  //console.log(action)
  return {
    deckName,
    cards
  }}, { deleteDeck } ) (DeckHome)