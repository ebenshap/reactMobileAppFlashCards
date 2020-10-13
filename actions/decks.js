import { apiAddDeck, apiAddCard, apiDeleteDeck, apiReceiveDecks } from "../utils/_decks"

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DELETE_DECK = 'DELETE_DECK'


export function receiveDecks () {
  return ( dispatch ) => {
    return apiReceiveDecks().then( (decks) => {
      dispatch(reduxReceiveDecks(decks));
    } )
  }
}

export function reduxReceiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addDeck = (deckName) => {
  return (dispatch) => {
    return apiAddDeck({[deckName]:[]}).then(() => {
      dispatch(reduxAddDeck(deckName));
    })
  }
}

export function reduxAddDeck (deckName) {
  return {
    type: ADD_DECK,
    deckName
  }
}

export const addCard = (deckName, card) => {
  return (dispatch) => {
    return apiAddCard(deckName, card).then(() => {
      dispatch(reduxAddCard(deckName, card));
    })
  }
}

export function reduxAddCard (deckName, card) {
  return {
    type: ADD_CARD,
    card,
    deckName
  }
}

export function deleteDeck(deckName) {
  return (dispatch) => {
    return apiDeleteDeck(deckName).then(() => {
      dispatch(reduxDeleteDeck(deckName));
    })
  }
}

export function reduxDeleteDeck (deckName) {
  return {
    type: DELETE_DECK,
    deckName
  }
}