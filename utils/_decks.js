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