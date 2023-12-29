# Navenkumar Portfolio

This is my personal portfolio site built with **Angular 16**.

- Used Github rest api's to fetch the public repositories from my profile and filtered them based on the topic `portfolio-item`.
- Leetcode and HackerRank tabs uses data from JSON files in `assets/` folder. These Json files has been fetched through Postman by making requests to `https://leetcode.com/graphql/` and 
`https://www.hackerrank.com/rest/`.
- **These end-points except for github doesn't allow cross origin requests.**

> Clone and checkout to `localhost-live-data` branch. This has proxy configured for development.
> You are set to play with live data from these endpoints.
> Ensure you start the application with `npm start` or `ng serve --proxy-config=proxy.config.json`

### Sample request for Github
```
curl https://api.github.com/users/navenduraisamy/repos
```
### Sample Graphql query for Leetcode
```
query userPublicProfile($username: String!) {
    matchedUser(username: $username) {
      username
      githubUrl
      twitterUrl
      linkedinUrl
    }
  }
```
### Sample request for HackerRank
```
curl https://www.hackerrank.com/rest/contests/master/hackers/<user-name>
```
