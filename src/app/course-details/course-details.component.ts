// OnInit： Angular初始化完該指令的所有資料繫結屬性之後呼叫
import { Component, OnInit } from '@angular/core';
// ActivatedRoute 中包含有關路由和路由引數的資訊。
import { ActivatedRoute } from '@angular/router';
import { course_example, courses } from '../data';
import { FavoriteService } from '../favorite.service';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})

export class CourseDetailsComponent implements OnInit {
    course: typeof course_example|undefined;
    // 透過 private route 注入 ActivatedRoute獲取產品資訊
    constructor(
      private route: ActivatedRoute,
      private favoriteService: FavoriteService
    ) { }

    // 快速導航
    ngOnInit() {
        // ActivatedRouteSnapshot中包含與當前元件相關路由的瞬間資訊
        const routeParams = this.route.snapshot.paramMap;

        // 從路由引數中提取 productId，並在 products 陣列中找到相應的產品
        const courseIdFromRoute = Number(routeParams.get('courseId'));
        this.course = courses.find(course => course.id === courseIdFromRoute);
    }

    addToFavorite(course: typeof course_example) {
        this.favoriteService.addToFavorite(course);
        window.alert('此課程已成功加入願望清單！');
    }
}