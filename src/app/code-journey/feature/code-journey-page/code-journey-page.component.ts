import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockListItemComponent } from 'src/app/shared/ui/block-list-item/block-list-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-code-journey-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './code-journey-page.component.html',
  styleUrls: ['./code-journey-page.component.scss']
})
export class CodeJourneyPageComponent {
  activeIndex: number = 0;

  setActiveIndex(index: number): void {
    this.activeIndex = index;
  }
}
