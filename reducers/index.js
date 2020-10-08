import { setStatusBarStyle } from 'expo-status-bar'
import { RECEIVE_DECKS, ADD_DECK, DELETE_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK :
      return {
        ...state,
        [action.deck]: []
      }
    case DELETE_DECK :
      let returnResult = {}
      Object.keys(state).filter( item => action.deckName !== item).forEach(item => {
        returnResult[item] = state[item]
      });
      return returnResult;
    
    case ADD_CARD :
      let newResult = {
        ...state,
        [action.card.deckName]:[
          ...state[action.card.deckName],
          action.card.card
        ]
      }
      return newResult;

    default :
      return state
  }
}

export default decks