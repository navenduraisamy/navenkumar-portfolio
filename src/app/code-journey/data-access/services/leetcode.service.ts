import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_LEETCODE_USER_INFO } from '../graphql/leetcode-queries';
import { LeetcodeUser, TagProblemCounts } from '../../types/leetcode';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LeetcodeService {
  private client: string = "leetcode";
  constructor(private apollo: Apollo, private http: HttpClient) {}

  getUserInfoLive(username: string): Observable<LeetcodeUser> {
    return this.apollo.use(this.client).query<LeetcodeUser, { [key: string]: any }>({
      query: GET_LEETCODE_USER_INFO,
      variables: { username },
    }).pipe(
      map(response => response.data)
    );
  }

  getUserInfo(username: string): Observable<LeetcodeUser> {
    return this.http.get<{data: { leetcodeUser: LeetcodeUser }}>("/assets/data-source/leetcode.json")
      .pipe(
        map((response) => response.data.leetcodeUser)
      )
  }

  getSkills(): Observable<TagProblemCounts> {
    return this.http.get<{ tagProblemCounts: TagProblemCounts }>("/assets/data-source/leetcode-skill.json")
      .pipe(
        map(response => response.tagProblemCounts),
        map(response => {
          return {
            ...response,
            "advanced": response.advanced.sort((tag1, tag2) => tag2.problemsSolved - tag1.problemsSolved),
            "intermediate": response.intermediate.sort((tag1, tag2) => tag2.problemsSolved - tag1.problemsSolved)
          }
          
        })
      )
  }
} 
