import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})

export class CourseTableComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courses = [];

  courseTitle = '';

  addCourse = () =>
    this.service.createCourse({
      title: this.courseTitle,
      ownedby: 'me',
      lastmodified: new Date().getMonth() + '/' + new Date().getDate() + '/' + new Date().getFullYear()
    }).then(newCourse => this.courses.push(newCourse))

  deleteCourse = (courseId) =>
    this.service.deleteCourse(courseId)
      .then(status => {
        this.courses = this.courses.filter(course => course._id !== courseId);
      })
  ngOnInit(): void {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
