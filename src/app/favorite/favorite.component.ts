import { Component, OnChanges} from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent{
  // 注入FavoriteService  
  constructor(
    private favoriteService: FavoriteService,
  ) { }

  changeText: boolean = false;  // 判斷是否有mouseover
  courses = this.favoriteService.getFavorite(); // 取得favorite_course

  deleteFavorite(courseId: number) {
    this.favoriteService.deleteFavorite(courseId);
    this.courses = this.favoriteService.getFavorite();
  }
}