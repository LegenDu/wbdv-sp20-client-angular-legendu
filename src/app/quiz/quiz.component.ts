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
  courseId = ''
  questions = []
  graded = false
  score = 0

  submitQuiz = () => {
    this.service.submitQuiz(this.questions, this.quizId)
      .then(result => {
        this.score = result.score;
        this.graded = true;
      });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.service.findQuestionsForQuiz(this.quizId)
        .then(questions => this.questions = questions);
    });
  }
}
