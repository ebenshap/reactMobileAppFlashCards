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
      const deckName = this.state.deckName;
      this.props.addDeck(deckName);
      this.setState({
        deckName: ""
      }, () => {
        this.props.navigation.navigate('Deck Home', {
          deckName: deckName
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
          <Text style={StyleSheet.appButtonText} >Submit</Text>
        </TouchableOpacity>
      </View>
    );   
  }
}

function mapStateToProps(){
  return {}
}

export default connect(mapStateToProps, {addDeck} )(AddDeckPage)