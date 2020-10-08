import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

function Quiz({route, navigation}) {
  const { cards, cardIndex = 0 } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Quiz</Text>
      {!cards.length || !cards[cardIndex] ? <Text>There are no cards on this deck!</Text> : 
        <View>
          <Text>Q: { cards[cardIndex].question }</Text>
          <Text>A: { cards[cardIndex].answer }</Text>
        </View>
      }
      <Button onPress={() => { navigation.push("Quiz", {
        cards,
        cardIndex : (cardIndex + 1)
      }) }} title="Next Card" />
      
    </View>
  );

}

export default connect(()=> ({
  
}))(Quiz);