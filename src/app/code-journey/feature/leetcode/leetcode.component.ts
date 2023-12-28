import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeetcodeService } from '../../data-access/services/leetcode.service';
import { Observable } from 'rxjs';
import { LeetcodeUser } from '../../types/leetcode';

@Component({
  selector: 'app-leetcode',
  standalone: true,
  imports: [CommonModule],
  providers: [LeetcodeService],
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent {

  readonly username = "navenduraisamy"
  leetcodeUser$: Observable<LeetcodeUser> = this.leetcodeService.getUserInfo(this.username);

  constructor(private leetcodeService: LeetcodeService) {
  }
}
