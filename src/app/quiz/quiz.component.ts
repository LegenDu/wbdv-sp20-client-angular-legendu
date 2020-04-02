import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service: QuestionServiceClient,
              private route: ActivatedRoute) { }
  quizId = ''
  questions = []

  submitQuiz = () => {
    this.service.submitQuiz(this.questions, this.quizId)
      .then(result => console.log(result))
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(quiz => this.questions = quiz.questions)
        // .then(questions => this.questions = questions);
    });
  }
}
