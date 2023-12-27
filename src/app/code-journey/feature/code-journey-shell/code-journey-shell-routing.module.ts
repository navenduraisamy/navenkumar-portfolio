import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("../code-journey-page/code-journey-page.component").then(m => m.CodeJourneyPageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeJourneyShellRoutingModule { }
