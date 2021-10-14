import { Component, OnChanges} from '@angular/core';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent{

  courses = this.FavoriteService.getFavorite();
  
  // 注入FavoriteService  
  constructor(
    private FavoriteService: FavoriteService
  ) { }
}