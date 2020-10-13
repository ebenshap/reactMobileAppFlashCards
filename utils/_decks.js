// Utilities for adding dummy decks.
import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'UdaciFlashCards:decks'

// This dummy data will be saved to the database so that even when you reload the app from expo, the
// data will be loaded from the database.
function setDummyData () {
  let dummyData = {}
  const timestamp = Date.now()

  for (let i = 0; i < 3; i++) {
    dummyData["deck"+ (i+1)] = [
      {question:"asdasdfasdf", answer:"asdfadfadfawef"},
      {question:"dzzzasdfasdf", answer:"dzzzfadfadfawef"}
    ];
  }

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData;
}

export function formatFlashCardResults (results) {
  return results === null 
    ? setDummyData()
    : JSON.parse(results)
}

export function apiReceiveDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((data) => {
      return formatFlashCardResults(data);
    })
}

export function apiAddDeck (deck) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(deck))
}

export function apiAddCard (deckName, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then((results) => {
    const data = JSON.parse(results)
    const cards = [...data[deckName], card];    
    AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({[deckName]: cards }))
  })
}

export function apiDeleteDeck(deckName){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[deckName] = undefined
      delete data[deckName]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
} 