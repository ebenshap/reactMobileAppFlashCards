import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import StyleSheet from './Styles'
import { clearLocalNotification, setLocalNotification } from '../utils/helper'

function retakeQuizClick ({navigation, deckName, cards}) {
  // Clear the stack and add home, and deckHome and previous routes in the 
  // stack so the user can exit out of the quiz using the back buttons.

  navigation.reset({
    index: 2,                
    routes: [
      { name: 'Home' },
      { name: 'Deck Home',
        params: {
          deckName
        }
      }, 
      { name: 'Quiz',
        params: {
          cards,
          cardIndex: 0,
          deckName
        }
      }
    ]
  });
}

// As far as I can tell, with the latest expo SDK there's no way to set a 
// notification for the next day that repeats, so as a compromise, in the 
// solution I went with, the initial notification is never cleared so the 
// notification always shows up each day regardless if the user already 
// filled out a quiz for the day.
function handleClearNotification() {
  clearLocalNotification().then(setLocalNotification);
}

export default function ScoreCard({navigation, deckName, cards, score }) {
  return <View>
    <Text>End of the Quiz</Text>
    <Text>Score: {score} out of {cards.length}</Text>
    
    <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
        onPress={ () => {
          retakeQuizClick({navigation, deckName, cards});
        } }>
        <Text style={StyleSheet.appButtonText} >Retake Quiz</Text>
    </TouchableOpacity>

    <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
        onPress={ () => {
          // Pass the screen name to the object for the nested navigation.
          navigation.navigate("Deck Home", { params: {
            deckName
          } });
        } } >
        <Text style={StyleSheet.appButtonText} >Return to Deck</Text>
    </TouchableOpacity>
  </View>
}