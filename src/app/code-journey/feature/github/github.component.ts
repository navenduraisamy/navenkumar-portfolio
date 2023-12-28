import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../data-access/services/github.service';
import { Observable } from 'rxjs';
import { GithubUser, Repository } from '../../types/github';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from '../../ui/user-profile/user-profile.component';
import { BlockListComponent } from 'src/app/shared/ui/block-list/block-list.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserProfileComponent, BlockListComponent],
  providers: [GithubService],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  githubUser$: Observable<GithubUser> = this.github.getUserProfile();
  repositories$: Observable<Repository[]> = this.github.getPinnedRepositories();

  constructor(private github: GithubService) {
  }

}
