import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/Common/Services/job-data.service';
import { jobDataType } from 'src/app/Common/Types';
import { ModalService } from 'src/app/Common/Services/modal.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: jobDataType[] = [];
  constructor(private jobDataService: JobDataService, private modalService: ModalService) { }
  ngOnInit(): void {
    this.jobDataService.fetchJobData()
    this.jobDataService.getJobData().subscribe(data => {
      this.data = data
    })
  }
  deleteRow() {
    this.modalService.btnPress = true;
    this.modalService.onModelState('deleteModal')
  }
}
