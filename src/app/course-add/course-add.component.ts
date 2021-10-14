// 此組code用於接收訊息(input)
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { course_example, courses } from '../data';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})

// 在 notify 屬性的值發生變化時引發一個事件。
// EventEmitter用在帶有 @Output 指令的元件中，以同步或非同步方式發出自訂事件
export class CourseAddComponent{
  @Input() course!: typeof course_example;
  @Output() notify = new EventEmitter();
}