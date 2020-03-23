import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch(`http://localhost:3000/api/quizzes`)
      .then(response => response.json())

  findQuizById = (quizId) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}`)
      .then(response => response.json())

  createQuiz = () =>
    fetch(`http://localhost:3000/api/quizzes`, {
      method: 'post',
      body: JSON.stringify({title: 'NEW QUIZ'}),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  deleteQuiz = (quizId) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}`, {
        method: 'delete'
      }
    )
}
