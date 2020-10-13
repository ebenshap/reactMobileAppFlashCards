export const UPDATE_GAME = 'UPDATE_GAME'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const INIT_QUIZ = 'INIT_QUIZ'


export function updateScore (score) {
  return {
    type: UPDATE_SCORE,
    score
  }
}

export function initQuiz () {
  return {
    type: INIT_QUIZ
  }
}

export function updateGame (quizInfoItem, cardIndex) {
  return {
    type: UPDATE_GAME,
    quizInfoItem,
    cardIndex
  }
}
