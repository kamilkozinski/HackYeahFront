import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from '../interfaces/activity';

@Injectable({
  providedIn: 'root',
})
export class UserStatsService {
  constructor(private http: HttpClient) {}

  getAllActivity(id: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(
      environment.baseURL + '/classification/getallactivity/' + id
    );
  }
}
