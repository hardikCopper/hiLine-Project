import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { modalStatesType } from '../Types';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modelState = new BehaviorSubject<boolean>(false);
  private modelStateObservable = this.modelState.asObservable();
  btnPress = false
  modelStates: modalStatesType = {
    deleteModal: false
  }
  constructor() { }
  getModalState(): Observable<boolean> {
    return this.modelStateObservable;
  }
  offModelState() {
    this.modelState.next(false)
    for (const key in this.modelStates) {
      this.modelStates[key] = false
    }
  }
  onModelState(property: string) {
    this.modelState.next(true)
    this.modelStates[property] = true
  }

}