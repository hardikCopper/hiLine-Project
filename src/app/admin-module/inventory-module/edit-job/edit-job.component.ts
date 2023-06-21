import { Component } from '@angular/core';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent {
  constructor(private scs: SwitchComponentsService) { }
  removeModal() {
    this.scs.removeEditJob();
  }
}
