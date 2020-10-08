import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { addDeck } from '../actions';
import { connect } from 'react-redux'; 

// I had not thougt of this. How is a react native screen passed props.
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
        this.props.navigation.navigate('DeckHome', {
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
          value={this.state.deckName}/>
        <Button title="Submit" onPress={ this.handleSubmission } />
      </View>
    );   
  }
}

function mapStateToProps(){
  return {}
}

export default connect(mapStateToProps, {addDeck} )(AddDeckPage)