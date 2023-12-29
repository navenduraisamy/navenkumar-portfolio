import { Component, Input, TemplateRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerRankCertificate } from '../../types/hacker-rank';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-certificate-item',
  standalone: true,
  imports: [CommonModule, NgbModalModule],
  templateUrl: './certificate-item.component.html',
  styleUrls: ['./certificate-item.component.scss']
})
export class CertificateItemComponent {

  @Input()
  certificate!: HackerRankCertificate;

  private modalService = inject(NgbModal);

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, { size: "xl" })
  }

  

}
