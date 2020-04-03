import {Injectable} from '@angular/core';
const URL = 'https://wbdv-sp20-server-node-a9.herokuapp.com'
// const URL = 'http://localhost:3000'
@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`${URL}/api/quizzes`)
      .then(response => response.json())

  findQuizById = (quizId) =>
    fetch(`${URL}/api/quizzes/${quizId}`)
      .then(response => response.json())

  createQuiz = () =>
    fetch(`${URL}/api/quizzes`, {
      method: 'post',
      body: JSON.stringify({title: 'NEW QUIZ'}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  deleteQuiz = (quizId) =>
    fetch(`${URL}/api/quizzes/${quizId}`, {
        method: 'delete'
      }
    )
}
