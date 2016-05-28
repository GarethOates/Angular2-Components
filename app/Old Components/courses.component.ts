import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    templateUrl:  "app/courses.component.html",
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    
    title = "The title of courses page";
    courses: string[];
    
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}