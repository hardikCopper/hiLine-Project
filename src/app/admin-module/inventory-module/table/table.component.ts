import { Component, OnInit } from '@angular/core';
import { JobDataService } from 'src/app/Common/Services/job-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: any
  constructor(private jobDataService: JobDataService) { }
  ngOnInit(): void {
    this.jobDataService.fetchJobData()
    this.jobDataService.jobDataValueChanged.subscribe(data => {
      this.data = data
    })
  }
}
