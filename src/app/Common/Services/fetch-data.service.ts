import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jobDataType, userDataType } from '../Types';
import { environment } from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private jobData = new BehaviorSubject<jobDataType[]>([]);
  private jobDataValueChanged = this.jobData.asObservable();
  private userData = new BehaviorSubject<userDataType[]>([]);
  private userDataChanged = this.userData.asObservable();
  setDescription: jobDataType = { id: undefined, description: undefined, date: undefined, quantity: undefined, invoiced: undefined, checkboxState: undefined }
  constructor(private http: HttpClient) { }
  fetchJobData() {
    this.http.get<jobDataType[]>('http://localhost:4500/job').subscribe(data => {
      this.jobData.next(data)
    })
  }
  getJobData(): Observable<jobDataType[]> {
    return this.jobDataValueChanged
  }
  setJobDescription() {
    this.http.put(`http://localhost:4500/job/${this.setDescription.id}`, this.setDescription).subscribe(response => {
      console.log(response);
    });
  }
  fetchUserData() {
    this.http.get<userDataType[]>('http://localhost:4500/user').subscribe(data => {
      this.userData.next(data)
    })
  }
  getUserData(): Observable<userDataType[]> {
    return this.userDataChanged
  }
}
