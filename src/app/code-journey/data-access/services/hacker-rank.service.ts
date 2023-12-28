import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HackerRankCertificate } from '../../types/hacker-rank';

@Injectable()
export class HackerRankService {

  private base_url = "hackerrank/community/v1"

  constructor(private http: HttpClient) { }

  getUserCertificates(username: string): Observable<HackerRankCertificate[]>{
    let params = new HttpParams().set("username", username);
    return this.http.get<HackerRankCertificate[]>(`${this.base_url}/test_results/hacker_certificate`, { params });
  }
}
