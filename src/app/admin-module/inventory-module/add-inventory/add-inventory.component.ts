import { Component, Output, EventEmitter } from '@angular/core';
import { jobDataType } from 'src/app/Common/Types';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.scss']
})
export class AddInventoryComponent {
  btn_name = 'Add'
  @Output() tabChanging = new EventEmitter<number>();
  constructor(private http: HttpClient, private router: Router, private tabs: TabsComponent) { }
  sendData(dataToSubmit: jobDataType) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<jobDataType>('http://localhost:4500/job', dataToSubmit, { headers }).subscribe(data => {
      console.log(data)
      this.tabChanging.emit(0);
    });
  }
}
