import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from './model';

import { Observable, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


// 1.依賴注入（DI）是一種設計模式，在這種設計模式中，類別會從外部源請求依賴項目而不是建立它們。
// 2.@Injectable()裝飾器之目的為提供元件資料，以讓angular可以將其依賴注入元件中。
// 3.@Injectable()同時也用來表明一個元件或其它類別（比如另一個服務、管道或 NgModule）擁有一個依賴。
@Injectable({
    providedIn: 'root',
})

export class CourseService {
    
    private url = "https://nckuhub.com/course"

    constructor(
        private http: HttpClient
    ) {}
    
    // http發出要求並收到回應後就不會再有動作，它只會傳一次資料給取得這個資料的接收者
    getCourses(): Observable<course[]> {
        return this.http.get<course[]>(this.url)
    }

    getCourse(id: number): Observable<course> {
        const url = `${this.url}/${id}`;
        return this.http.get<course>(url);
    }

}
