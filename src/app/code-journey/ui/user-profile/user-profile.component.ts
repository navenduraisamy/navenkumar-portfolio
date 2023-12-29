import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  @Input()
  displayName?: string;
  
  @Input()
  avatarUrl: string = "/assets/avatar.jpg";
}
