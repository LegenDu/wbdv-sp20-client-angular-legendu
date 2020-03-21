import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001023157/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001023157/courses/${courseId}`)
      .then(response => response.json())

  createCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001023157/courses`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())

  deleteCourse = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001023157/courses/${courseId}`, {
      method: 'DELETE'
    }).then(response => response.json())
}
