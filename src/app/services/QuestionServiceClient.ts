import {Injectable} from '@angular/core';
const URL = 'https://wbdv-sp20-server-node-lgdu.herokuapp.com'

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`${URL}/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
