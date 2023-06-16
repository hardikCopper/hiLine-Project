import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobDataService {
  jobData = new BehaviorSubject<any>(null);
  jobDataValueChanged = this.jobData.asObservable();
  constructor(private http: HttpClient) { }
  fetchJobData() {
    this.http.get('assets/JSON/job.json').subscribe(data => {
      this.jobData.next(data)
    })
  }
}
