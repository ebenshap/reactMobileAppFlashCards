import {UPDATE_GAME, UPDATE_SCORE, INIT_QUIZ } from '../actions/quiz'

function quiz (state = {}, action) {
  switch (action.type) {
    case INIT_QUIZ :
      return {
        quizInfo: {},
        score: 0
      } 
    case UPDATE_SCORE :
      return {
        ...state,
        score: action.score
      }
    case UPDATE_GAME :
        return {
          ...state,
          quizInfo : {
            ...state.quizInfo,
            [action.cardIndex] : action.quizInfoItem
          }
          
        }
    
    default :
      return state
  }
}

export default quiz