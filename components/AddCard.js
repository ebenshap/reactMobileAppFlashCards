import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { addCard } from "../actions";
import { connect } from 'react-redux'

class AddCard extends React.Component {

  state={
    question: "",
    answer: ""
  }

  handleSubmission = (deckName) => {
    console.log(this)
    if(this.state.question && this.state.answer) {
      this.props.addCard({
        deckName : deckName,
        card : this.state
      })
      this.props.navigation.navigate("DeckHome", {
        deckName
      });
    }
    
  }

  render() {
    const { deckName } = this.props.route.params;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Card to: {deckName}</Text>
        <TextInput onChangeText={(value) => { this.setState({ ...this.state, question: value }) } } placeholder="Enter Question" name="question" value={this.state.question} />
        <TextInput onChangeText={(value) => { this.setState({ ...this.state, answer: value }) } } placeholder="Enter Answer" name="answer" value={this.state.answer} />
        <Button title="Submit" onPress={ () => { this.handleSubmission(deckName)  }} />
      </View>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, { addCard })(AddCard);