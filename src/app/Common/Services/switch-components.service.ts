import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwitchComponentsService {
  private editJob = new BehaviorSubject<boolean>(false);
  private editJobChanged = this.editJob.asObservable();
  constructor() { }
  getEditJob(): Observable<boolean> {
    return this.editJobChanged
  }
  openEditJob() {
    this.editJob.next(true)
  }
  removeEditJob() {
    this.editJob.next(false)
  }
}
