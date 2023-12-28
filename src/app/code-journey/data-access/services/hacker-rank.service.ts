import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HackerRankCertificate } from '../../types/hacker-rank';

@Injectable()
export class HackerRankService {
  private base_url = `hackerrank/community/v1`;

  constructor(private http: HttpClient) {}

  getUserCertificates(username: string): Observable<HackerRankCertificate[]> {
    let params = new HttpParams().set('username', username);
    return this.http
      .get<{ data: HackerRankCertificate[]}>(
        `${this.base_url}/test_results/hacker_certificate`,
        { params }
      )
      .pipe(
        map(response => response.data),
        map((items: HackerRankCertificate[]) =>
          items.filter((item) => item.attributes.status === 'test_passed')
        ),
        tap(console.log)
      );
  }
}
