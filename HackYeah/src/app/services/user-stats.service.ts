import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../interfaces/activity';
import { UserMe } from '../types/UserMe';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  userId: number = 0;
  constructor(private http: HttpClient) {
    var sub = this.getMe().subscribe((x) => (this.userId = x.userId));
  }

  getAllActivity(id: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      environment.baseURL + '/classification/getallactivity/' + id
    );
  }
  getMe(): Observable<UserMe> {
    return this.http.get<UserMe>(environment.baseURL + '/classification/me/');
  }
}
