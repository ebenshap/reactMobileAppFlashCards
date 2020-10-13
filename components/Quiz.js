import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { RadioButton } from 'react-native-paper';

import { initQuiz, updateScore, updateGame } from "../actions/quiz"
import ScoreCard from "./ScoreCard"
import StyleSheet from './Styles'


class Quiz extends React.Component {
  
  state={
    showInfo:false,
    didGuess: false
  }

  toggleShowInfo = () => {
    this.setState((curState) => 
      ({ showInfo: (!curState.showInfo)  }), 
      () => { this.props.updateGame(this.state, this.cardIndex) } 
    );
  }

  toggleDidGuess = () => {
    const score = this.props.quiz.score || 0;
    const updateScore = this.props.updateScore;
    let didGuess = null;
    this.setState((curState) =>{
      
      didGuess = !curState.didGuess;
      return{
        ...this.state,
        didGuess: didGuess
      } 
    }, () => {
      if(didGuess) {
        updateScore(score + 1);
      } else {
        updateScore(score - 1);
      }
      this.props.updateGame(this.state, this.cardIndex)
    })
  }

  componentDidMount() {
    if( this.props.cardIndex === 0 ) {
      this.props.updateScore(0);
      // Clear out the redux quiz data backup
      this.props.initQuiz() ;
    } else {
    
      let gameInfo = this.props.quiz
      if(gameInfo && gameInfo.quizInfo) {
        gameInfo = gameInfo.quizInfo[ this.props.cardIndex ];
        this.setState(gameInfo);
      }
    }
  }

  render (){
    const {cards, cardIndex, deckName, navigation, quiz} = this.props
    this.cardIndex = cardIndex;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        { // If there's no cards in the deck then notify the user.
          !cards.length ? <Text>There are no cards on this deck!</Text> : 
          
          // If there are cards then show the next question.
          cards[cardIndex] ?
          <View>
            <Text style={[StyleSheet.smallSpace, {color:"gray"}]}>Card {cardIndex+1} out of {cards.length}</Text> 
            <Text>Q: { cards[cardIndex].question }</Text>
            <TouchableOpacity style={ [StyleSheet.appButtonContainer, StyleSheet.bigSpace] } 
              onPress={this.toggleShowInfo} >
              <Text style={StyleSheet.appButtonText} >{this.state.showInfo ? "Hide Answer" : "Show Answer"}</Text>
            </TouchableOpacity>

            <View style={{ display: this.state.showInfo ? "flex" : "none" }}>           
              <Text style={[StyleSheet.smallSpace]}>A: { cards[cardIndex].answer }</Text>
              
              <Text style={[StyleSheet.smallSpace]}>Did you get it right?</Text>
              
              <View style={[{ display:"flex", flexDirection:'row' , alignItems:"center" }  ]}>
                <RadioButton
                  status={this.state.didGuess ? "checked": "unchecked"}
                  onPress={ () => { this.toggleDidGuess() }}
                />
                <Text>Yes</Text>
              </View>

              <View style={ [StyleSheet.bigSpace]} >
                <TouchableOpacity style={ [StyleSheet.appButtonContainer] } 
                  onPress={() => { 
                    navigation.push("Quiz", {
                    cards,
                    cardIndex : (cardIndex + 1),
                    deckName
                  }) }}>
                  <Text style={[StyleSheet.appButtonText]} >Next Card</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          // Otherwise show the end of the quiz with the score.
          : 
          <ScoreCard navigation={navigation} cards={cards} deckName={deckName} score={this.props.quiz.score} />
        }
      </View>
    );
  }
}

export default connect( ({quiz}, {route})=> {
  const { cards, cardIndex = 0, deckName } = route.params;
  return {
    cards,
    cardIndex,
    quiz,
    deckName
  };
}, { initQuiz, updateScore, updateGame } )(Quiz);