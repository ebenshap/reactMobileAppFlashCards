import * as React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
underLineText= {
  fontSize: 12,
  textDecorationLine: 'underline',
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 10
}

// This is where it makes sense to first display data.
function ListDecks(props) {
  let decks = Object.keys(props.decks);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>List Decks!</Text>
      { decks.map(item => <TouchableOpacity key={item}  onPress={() => { props.navigation.navigate("DeckHome", {deckName:item })}} > 
        <Text style={underLineText} >{item}</Text>
      </TouchableOpacity>  ) }
            
    </View>
    
  );
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(ListDecks)