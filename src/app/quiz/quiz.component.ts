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
  attempts = []
  graded = false
  getAttempts = false
  score = 0

  submitQuiz = () => {
    this.service.submitQuiz(this.questions, this.quizId)
      .then(result => {
        this.score = result.score;
        this.graded = true;
      });
  }

  showAttempts = () => {
    this.service.findQuizAttempts(this.quizId)
      .then(attempts => {
        this.attempts = attempts;
        this.getAttempts = true;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }
}
