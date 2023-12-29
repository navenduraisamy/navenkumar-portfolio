import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeetcodeService } from '../../data-access/services/leetcode.service';
import { Observable } from 'rxjs';
import { LeetcodeUser } from '../../types/leetcode';
import { UserProfileComponent } from '../../ui/user-profile/user-profile.component';
import { BadgeItemComponent } from '../../ui/badge-item/badge-item.component';

@Component({
  selector: 'app-leetcode',
  standalone: true,
  imports: [CommonModule, UserProfileComponent, BadgeItemComponent],
  providers: [LeetcodeService],
  templateUrl: './leetcode.component.html',
  styleUrls: ['./leetcode.component.scss']
})
export class LeetcodeComponent {

  readonly username = "navenduraisamy"
  leetcodeUser$ = this.leetcodeService.getUserInfo(this.username);
  skill$ = this.leetcodeService.getSkills();

  constructor(private leetcodeService: LeetcodeService) {
  }
}
