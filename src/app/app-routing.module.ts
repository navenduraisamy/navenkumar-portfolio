import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./introduction/feature/about/about.component").then((m) => m.AboutComponent)
  },
  {
    path: "code-journey",
    loadChildren: () => import("./code-journey/feature/code-journey-shell/code-journey-shell.module").then(m => m.CodeJourneyShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
