import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import StyleSheet from './Styles'

// This is where it makes sense to first display data.
function ListDecks(props) {
  let decks = Object.keys(props.decks);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Decks:</Text>
      { decks.map(deckName => <TouchableOpacity key={deckName}  onPress={() => { props.navigation.navigate("Deck Home", {deckName })}} > 
        <Text style={StyleSheet.underLineText} >{deckName}</Text>
        <Text style={{color: 'gray'}}>{ props.decks[deckName].length } cards</Text>
      </TouchableOpacity>  ) } 
    </View>
  );
}

function mapStateToProps ({decks}) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(ListDecks)