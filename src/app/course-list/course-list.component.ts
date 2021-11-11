import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { course } from '../model';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent implements OnInit{
  constructor(
    private http: HttpClient,
    private favoriteService: FavoriteService
  ) {}

  openCourse: boolean = false;

  // public courses: Array<course> = new Array<course>();
  public courses: course[] = [];
  private url = 'https://nckuhub.com/course';

  // 目前問題：api得到的json有中文當key的資料，目前angular無支援，
  // 所以必須將res.body.courses中，有中文的部分重新組成array
  getCourses(): void {

    //可以得到API的http狀態碼
    let options = {
      observe: 'response' as 'response'
    }

    this.http.get<any>(this.url, options).subscribe(res => {
      if (res.status == 200){
        let keys = Object.keys(res.body.courses);
        keys.forEach(idx =>{
          let id = res.body.courses[idx].id;
          let dept_code = res.body.courses[idx].系號;
          let serial = res.body.courses[idx].選課序號;
          let course_name = res.body.courses[idx].課程名稱;
          let teacher = res.body.courses[idx].老師;
          let time = res.body.courses[idx].時間;
          let dept_name = res.body.courses[idx].系所名稱;
          let comment_num = res.body.courses[idx].comment_num;
          var course_data: course = {id: id, dept_code: dept_code, serial: serial,course_name: course_name, teacher: teacher, time: time, dept_name: dept_name, comment_num: comment_num}
          this.courses.push(course_data);
        });
      }
      else{
        console.log("ERROR: API nckuhub http code is " + res.status);
      }
    });
  }

  ngOnInit(): void {
    this.getCourses();
    console.log("ngOnInit start!")
  }
  
  // 呼叫favoriteService
  addToFavorite(course: course) {
    this.favoriteService.addToFavorite(course)
  }
}