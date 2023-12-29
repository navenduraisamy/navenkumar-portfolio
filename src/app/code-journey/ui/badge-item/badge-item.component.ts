import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-badge-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge-item.component.html',
  styleUrls: ['./badge-item.component.scss']
})
export class BadgeItemComponent {

  @Input()
  imageUrl!: string;

  @Input()
  description!: string;
}
