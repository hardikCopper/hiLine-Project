import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jobDataType, userDataType } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private jobData = new BehaviorSubject<jobDataType[]>([]);
  private jobDataValueChanged = this.jobData.asObservable();
  private userData = new BehaviorSubject<userDataType[]>([]);
  private userDataChanged = this.userData.asObservable();
  constructor(private http: HttpClient) { }
  fetchJobData() {
    this.http.get<jobDataType[]>('assets/JSON/job.json').subscribe(data => {
      this.jobData.next(data)
    })
  }
  getJobData(): Observable<jobDataType[]> {
    return this.jobDataValueChanged
  }
  fetchUserData() {
    this.http.get<userDataType[]>('assets/JSON/user.json').subscribe(data => {
      this.userData.next(data)
    })
  }
  getUserData(): Observable<userDataType[]> {
    return this.userDataChanged
  }
}
