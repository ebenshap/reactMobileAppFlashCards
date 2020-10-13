import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { deleteDeck } from '../actions/decks'
import StyleSheet from './Styles'

const handleDeleteDeck= (deckName, navigation, deleteDeck) => {
  deleteDeck(deckName);
  navigation.navigate('Home')
}

function DeckHome({deckName, cards, navigation, deleteDeck}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Deck Name: { deckName }</Text>
      <Text>Card Count: { cards.length }</Text>
      <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
        onPress={function(){ navigation.navigate('Add Card', { deckName }) }}>
        <Text style={StyleSheet.appButtonText} >Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ [StyleSheet.appButtonContainer] }
        onPress={function(){ navigation.navigate('Quiz', { cards, deckName}) }}>
        <Text style={StyleSheet.appButtonText}>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ [StyleSheet.appButtonContainer] }
        onPress={ () => { handleDeleteDeck(deckName, navigation, deleteDeck) } } >
        <Text style={StyleSheet.appButtonText}>Delete Deck</Text>
      </TouchableOpacity>
    </View>
  );
}
 
export default connect(({decks}, {route})=>{
  const { deckName } = route.params;
  const cards = decks[deckName] ? decks[deckName] : [];

  return {
    deckName,
    cards
  }}, { deleteDeck } ) (DeckHome)