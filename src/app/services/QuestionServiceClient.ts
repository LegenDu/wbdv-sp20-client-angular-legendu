import {Injectable} from '@angular/core';
// const URL = 'https://wbdv-sp20-server-node-lgdu.herokuapp.com'
const URL = 'http://localhost:3000'

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${URL}/api/quizzes/${qid}/questions`)
      .then(response => response.json())

  submitQuiz = (questions, qid) =>
    fetch(`${URL}/api/quizzes/${qid}/attempts`, {
      method: 'POST',
      body: JSON.stringify(questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
}
