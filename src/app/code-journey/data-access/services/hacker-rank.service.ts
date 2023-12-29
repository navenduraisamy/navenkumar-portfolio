import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { HackerRankCertificate, HackerRankUser } from '../../types/hacker-rank';

@Injectable()
export class HackerRankService {
  constructor(private http: HttpClient) {}

  getUserCertificates(username: string): Observable<HackerRankCertificate[]> {
    return this.http.get<{ data: HackerRankCertificate[]}>("/assets/data-source/hackerrank.json")
      .pipe(
        map(response => response.data),
        map((items: HackerRankCertificate[]) =>
          items.filter((item) => item.attributes.status === 'test_passed')
        ),
      );
  }

  getUserData(): Observable<HackerRankUser> {
    return this.http.get<{ model: HackerRankUser }>("/assets/data-source/hackerrank-user.json").pipe(
      map((data) => data.model),
      map(user => ({
        name: user.name,
        username: user.username,
        avatar: user.avatar,
        id: user.id
      }) as HackerRankUser)
    )
  }
}
