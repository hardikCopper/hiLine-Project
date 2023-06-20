import { Component } from '@angular/core';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { modalStatesType } from 'src/app/Common/Types';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  constructor(private modalService: ModalService) {
  }
  cancel() {
    this.modalService.offModelState()
  }
  delete() {
    this.modalService.offModelState()
  }
}
