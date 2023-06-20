import { Component } from '@angular/core';
import { ModalService } from 'src/app/Common/Services/modal.service';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  modelState: boolean = false
  constructor(private modalService: ModalService) {
    modalService.getModalState().subscribe(state => this.modelState = state)
  }

}
