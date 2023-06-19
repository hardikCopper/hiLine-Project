import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { jobDataType } from '../Types';
@Injectable({
  providedIn: 'root'
})
export class JobDataService {
  jobData = new BehaviorSubject<jobDataType[]>([]);
  jobDataValueChanged = this.jobData.asObservable();
  constructor(private http: HttpClient) { }
  fetchJobData() {
    this.http.get<jobDataType[]>('assets/JSON/job.json').subscribe(data => {
      this.jobData.next(data)
    })
  }
}
