import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  modelState: boolean = false
  editJobState = false
  constructor(private modalService: ModalService, private switchComponentsService: SwitchComponentsService) {
    modalService.getModalState().subscribe(state => this.modelState = state)
    switchComponentsService.getEditJob().subscribe(state => this.editJobState = state)
  }

}
