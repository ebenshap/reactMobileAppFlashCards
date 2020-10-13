import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addDeck } from '../actions/decks';
import { connect } from 'react-redux'; 
import StyleSheet from './Styles'

class AddDeckPage extends React.Component {

  state={
    deckName: ""
  }

  handleSubmission = () => {
    if(this.state.deckName) {
      // Make sure there are no extra spaces in the beginning to throw off 
      // the alphabetization on the deck listing page.
      const deckName = this.state.deckName.trim();
      this.props.addDeck(deckName);
      this.setState({
        deckName: ""
      }, () => {
        this.props.navigation.reset({
          index: 1,
          routes: [
            {name: "Home", screen: "List Decks" },
            { name: 'Deck Home',
              params: {
                deckName
              }
            }
          ]
        });
      }) 
    }
  }

  render() {
    
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Deck</Text>
        <TextInput 
          onChangeText={(value) => {this.setState({ deckName: value })}} 
          name="deckName" 
          placeholder="Enter Deck Name"
          style={[StyleSheet.input]}
          value={this.state.deckName}/>

        <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
        onPress={ this.handleSubmission } >
          <Text style={StyleSheet.appButtonText} >Create Deck</Text>
        </TouchableOpacity>
      </View>
    );   
  }
}

function mapStateToProps(){
  return {}
}

export default connect(mapStateToProps, {addDeck} )(AddDeckPage)