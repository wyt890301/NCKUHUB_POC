import { Injectable } from '@angular/core';
import { course_example } from './data';
import { HttpClient } from '@angular/common/http'; // 呼應http請求

// @Injectable() 裝飾器指定 Angular 可以在 DI 體系中使用此類別
@Injectable({
  //下行表示 此Service 在整個應用程式中都是可見的。
  providedIn: 'root'
})

export class FavoriteService {

  //定義一個 items 屬性來把當前商品的陣列儲存在購物車中
  items: typeof course_example[] = [];
  
  constructor(
    private http: HttpClient
  ) {}

  // 新增
  addToFavorite(course: typeof course_example) {
    this.items.push(course);
  }

  // 返回
  getFavorite() {
    return this.items;
  }

  // 刪除
  clearFavorite() {
    this.items = [];
    return this.items;
  }
}