import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FetchDataService } from 'src/app/Common/Services/fetch-data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent {
  inputData = ''
  constructor(private location: Location, private fetchDataService: FetchDataService, private router: Router) { }
  goBack() {
    this.location.back()
  }
  changeJobDes(e: Event) {
    e.preventDefault();
    this.fetchDataService.setDescription.description = this.inputData;
    this.fetchDataService.setJobDescription();
    this.router.navigate(['/admin']);
  }
}
