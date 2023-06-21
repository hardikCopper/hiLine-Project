import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/Common/Services/job-data.service';
import { jobDataType } from 'src/app/Common/Types';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { SwitchComponentsService } from 'src/app/Common/Services/switch-components.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: jobDataType[] = [];
  constructor(private jobDataService: JobDataService, private modalService: ModalService, private switchComponentsService: SwitchComponentsService) { }
  ngOnInit(): void {
    this.jobDataService.fetchJobData()
    this.jobDataService.getJobData().subscribe(data => {
      this.data = data
      data.forEach(item => {
        item.checkboxState = false
      })
    })
  }
  trackByIndex(index: number, item: any): number {
    return item.id;
  }
  toggleAllCheckbox() {
    this.data.forEach(item => {
      item.checkboxState = !item.checkboxState
    })
  }
  deleteRow() {
    this.modalService.btnPress = true;
    this.modalService.onModelState('deleteModal')
  }
  openEdit() {
    this.switchComponentsService.openEditJob();
  }
}
