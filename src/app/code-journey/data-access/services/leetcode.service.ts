import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_LEETCODE_USER_INFO } from '../graphql/leetcode-queries';
import { LeetcodeUser } from '../../types/leetcode';
import { Observable, map } from 'rxjs';

@Injectable()
export class LeetcodeService {
  private client: string = "leetcode";
  constructor(private apollo: Apollo) {}

  getUserInfo(username: string): Observable<LeetcodeUser> {
    return this.apollo.use(this.client).query<LeetcodeUser, { [key: string]: any }>({
      query: GET_LEETCODE_USER_INFO,
      variables: { username },
    }).pipe(
      map(response => response.data)
    );
  }
}
