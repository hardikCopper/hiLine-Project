import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { modalStatesType } from 'src/app/Common/Types';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements AfterViewInit {
  modalStates: modalStatesType;

  @ViewChild('child', { read: ElementRef })
  child: ElementRef<HTMLElement> | null;
  childElement: HTMLElement | null
  constructor(private elementRef: ElementRef, private modalService: ModalService) {
    this.modalStates = this.modalService.modelStates
    this.child = null;
    this.childElement = null;
  }

  ngAfterViewInit() {
    if (this.child) {
      this.childElement = this.child.nativeElement;
    }
  }

  @HostListener('document:click', ['$event'])
  clickOutsideComponent(event: Event) {
    if (!this.modalService.btnPress && this.childElement) {
      if (!this.childElement.contains(event.target as Node)) {
        this.modalService.offModelState();
      }
    }
    else this.modalService.btnPress = false
  }

}
