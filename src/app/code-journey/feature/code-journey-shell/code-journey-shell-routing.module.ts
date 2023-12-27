import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("../code-journey-page/code-journey-page.component").then(m => m.CodeJourneyPageComponent),
    children: [
      {
        path: "personal-projects",
        loadComponent: () => import("../github/github.component").then(m => m.GithubComponent)
      },
      {
        path: "leetcode",
        loadComponent: () => import("../leetcode/leetcode.component").then(m => m.LeetcodeComponent)
      },
      {
        path: "hacker-rank",
        loadComponent: () => import("../hacker-rank/hacker-rank.component").then(m => m.HackerRankComponent)
      },

      {
        path: "",
        redirectTo: "personal-projects",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeJourneyShellRoutingModule { }
