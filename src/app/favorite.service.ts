import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 呼應http請求
import { course } from './model';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

// @Injectable() 裝飾器指定 Angular 可以在 DI 體系中使用此類別
@Injectable({
  //下行表示 此Service 在整個應用程式中都是可見的。
  providedIn: 'root'
})

export class FavoriteService {

  //定義一個 可以存放目前 favoriteCourses的陣列
  favoriteCourses: course[] = [];
  private url = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) {}

  // 新增課程至favoriteCourse
  addToFavorite(course: course) {
    return this.favoriteCourses.push(course);
  } 

    
  // 查詢favoriteCourse
  getFavorite() {
    return this.favoriteCourses;
  }

  // 移除favoriteCourse
  deleteFavorite(courseId: number) {
    this.favoriteCourses = this.favoriteCourses.filter(course => course.id != courseId);
    return this.favoriteCourses
  }
}