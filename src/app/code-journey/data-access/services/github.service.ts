import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { GithubUser, Repository } from '../../types/github';

@Injectable()
export class GithubService {

  private _domain = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getPinnedRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this._domain}users/navenduraisamy/repos`).pipe(
      map(repos => repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        html_url: repo.html_url,
        description: repo.description, 
        topics: repo.topics,
        language: repo.language,
        homepage: repo.homepage
      })  as Repository )),
      map(repos => repos.filter((repo) => repo.topics.includes("portfolio-item")))
    );
  }

  getUserProfile(): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${this._domain}users/navenduraisamy`).pipe(
      map(user => ({
        name: user.name,
        login: user.login,
        avatar_url: user.avatar_url,
        html_url: user.html_url
      }) as GithubUser)
    )
  }
}
