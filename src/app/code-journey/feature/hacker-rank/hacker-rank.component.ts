import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HackerRankService } from '../../data-access/services/hacker-rank.service';
import { Observable } from 'rxjs';
import { HackerRankCertificate } from '../../types/hacker-rank';

@Component({
  selector: 'app-hacker-rank',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [HackerRankService],
  templateUrl: './hacker-rank.component.html',
  styleUrls: ['./hacker-rank.component.scss']
})
export class HackerRankComponent {
  readonly username = "navenkumar";
  certificates$: Observable<HackerRankCertificate[]> = this.hackerrankService.getUserCertificates(this.username);

  constructor(private hackerrankService: HackerRankService) {
  }



}
