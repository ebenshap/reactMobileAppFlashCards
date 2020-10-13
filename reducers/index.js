import { combineReducers } from 'redux'
// import all the reducers
import decks from './decks'
import quiz from './quiz'

export default combineReducers({
  decks,
  quiz
})