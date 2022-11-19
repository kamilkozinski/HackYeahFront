import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  sendTestRequest() {
    return this.http.get(environment.baseURL + "/test/sayname", { responseType: 'text' });
  }
}
