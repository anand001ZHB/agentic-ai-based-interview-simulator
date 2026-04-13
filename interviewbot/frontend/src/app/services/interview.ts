import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  // 🔥 Replace with your Codespaces URL
  private baseUrl = 'https://symmetrical-engine-5p54wxr7v9rcv5q6-3000.app.github.dev/interview';

  constructor(private http: HttpClient) {}

  startInterview(): Observable<any> {
    return this.http.get(`${this.baseUrl}/start`);
  }

  nextQuestion(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/next`, payload);
  }
}