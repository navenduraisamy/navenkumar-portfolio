import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubService } from '../../data-access/services/github.service';
import { Observable } from 'rxjs';
import { Repository } from '../../types/repository';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [GithubService],
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent {

  repositories$: Observable<Repository[]>;

  constructor(private github: GithubService) {
    this.repositories$ = this.github.getPinnedRepositories();
  }

}
