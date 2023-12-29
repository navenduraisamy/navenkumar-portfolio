import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HackerRankService } from '../../data-access/services/hacker-rank.service';
import { Observable } from 'rxjs';
import { HackerRankCertificate, HackerRankUser } from '../../types/hacker-rank';
import { UserProfileComponent } from '../../ui/user-profile/user-profile.component';

@Component({
  selector: 'app-hacker-rank',
  standalone: true,
  imports: [CommonModule, HttpClientModule, UserProfileComponent],
  providers: [HackerRankService],
  templateUrl: './hacker-rank.component.html',
  styleUrls: ['./hacker-rank.component.scss']
})
export class HackerRankComponent {
  readonly username = "navenkumar";
  certificates$: Observable<HackerRankCertificate[]> = this.hackerrankService.getUserCertificates(this.username);
  hacker$: Observable<HackerRankUser> = this.hackerrankService.getUserData();

  constructor(private hackerrankService: HackerRankService) {
  }



}
