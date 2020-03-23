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

  quizzes = [];
  courseId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
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
