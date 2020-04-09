import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/QuizServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private route: ActivatedRoute) { }

  quizzes = [{
    _id: '',
    title: '',
    attempts: []
  }]
  courseId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => {
          this.quizzes = quizzes
          return quizzes.map(quiz => {
            return this.service.findQuizAttempts(quiz._id);
          });
        })
        .then(attemptPromises => {
          return Promise.all(attemptPromises);
        })
        .then(attempts => {
          for (let i = 0; i < this.quizzes.length; i++) {
            // @ts-ignore
            this.quizzes[i].attempts = attempts[i];
          }
        });
    });
  }

  createQuiz = () => {
    this.service.createQuiz()
      .then(quiz => this.quizzes.push(quiz));
  }

  deleteQuiz = (quizDeleted) => {
    this.service.deleteQuiz(quizDeleted._id)
      .then(status => this.quizzes = this.quizzes.filter(quiz => quiz._id !== quizDeleted._id));
  }
}
