// 此code連接單個產品詳情的路由。
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CourseListComponent },
      { path: 'courses/:courseId', component: CourseDetailsComponent },
    ])
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseAddComponent,
    FavoriteComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }