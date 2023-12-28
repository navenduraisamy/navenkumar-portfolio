import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Repository } from '../../types/github';
import { environment } from 'src/environments/environment';

@Injectable()
export class GithubService {

  private _domain = environment.github;

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
      map(repos => repos.filter((repo) => repo.topics.includes("portfolio-item"))),
      
    );
  }
}
