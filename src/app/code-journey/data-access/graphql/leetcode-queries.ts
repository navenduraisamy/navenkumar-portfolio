import { gql } from 'apollo-angular';

export const GET_LEETCODE_USER_INFO = gql`
  query userInfo($username: String!) {
    leetcodeUser: matchedUser(username: $username) {
      username
      profile {
        realName
        userAvatar
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      badges {
        id
        displayName
        icon
        category
      }
    }
  }
`;
