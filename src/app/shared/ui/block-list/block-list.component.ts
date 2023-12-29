import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockListItemComponent } from '../block-list-item/block-list-item.component';

@Component({
  selector: 'app-block-list',
  standalone: true,
  imports: [CommonModule, BlockListItemComponent],
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent<T extends Object>{
  
  @Input()
  list: T[] = [];

  @ContentChild("blockListItemTemplate")
  blockListItemTemplate!: TemplateRef<{ item: T }>;

}
