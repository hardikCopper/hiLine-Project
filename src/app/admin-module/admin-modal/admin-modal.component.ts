import { Component, ElementRef, HostListener, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { modalStatesType } from 'src/app/Common/Types';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements AfterViewInit {
  modalStates: modalStatesType;
  @ViewChildren('child', { read: ElementRef }) childList: QueryList<ElementRef> | null;
  childElement: HTMLElement | null
  constructor(private elementRef: ElementRef, private modalService: ModalService) {
    this.modalStates = this.modalService.modelStates
    this.childList = null;
    this.childElement = null;
  }

  ngAfterViewInit() {
      this.childElement = this.childList?.first.nativeElement;
  }

  @HostListener('document:click', ['$event'])
  clickOutsideComponent(event: Event) {
    if (!this.modalService.btnPress && this.childElement) {
      if (!this.childElement.contains(event.target as Node)) {
        this.modalService.offModelStates();
      }
    }
    else this.modalService.btnPress = false
  }

}
