import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { addCard } from "../actions/decks";
import { connect } from 'react-redux';
import StyleSheet from './Styles'

class AddCardPage extends React.Component {

  state={
    question: "",
    answer: ""
  }

  handleSubmission = (deckName) => {
    if(this.state.question && this.state.answer) {
      this.props.addCard(deckName, this.state);
      this.props.navigation.navigate("Deck Home", {
        deckName
      });
    }
    
  }

  render() {
    const { deckName } = this.props.route.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Card to: {deckName}</Text>
        <TextInput onChangeText={(value) => { this.setState({ ...this.state, question: value }) } } 
          placeholder="Enter Question" 
          name="question" 
          style={[StyleSheet.input]}
          value={this.state.question} />
        
        <TextInput onChangeText={(value) => { this.setState({ ...this.state, answer: value }) } } 
          placeholder="Enter Answer" 
          name="answer" 
          style={[StyleSheet.input]}
          value={this.state.answer} />

        <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
        onPress={ () => { this.handleSubmission(deckName)  }}>
          <Text style={StyleSheet.appButtonText} >Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { addCard })(AddCardPage);