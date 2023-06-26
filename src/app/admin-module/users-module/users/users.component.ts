import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/Common/Services/fetch-data.service';
import { userDataType } from 'src/app/Common/Types';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  data: userDataType[] = [];
  constructor(private fetchDataService: FetchDataService, private modalService: ModalService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.fetchDataService.fetchUserData()
    this.fetchDataService.getUserData().subscribe(data => {
      this.data = data
      data.forEach(item => {
        item.checkboxState = false
      })
    })
  }
  trackByIndex(index: number, item: any): number {
    return item.id;
  }
  toggleAllCheckbox() {
    this.data.forEach(item => {
      item.checkboxState = !item.checkboxState
    })
  }
  deleteRow() {
    this.modalService.btnPress = true;
    this.modalService.onModelStates('deleteModal')
  }
  openEdit(path: number | undefined) {
    console.log('path: ', path);
    this.router.navigate([`${path}/edit`], { relativeTo: this.route });
  }
  openAdd() {
    this.modalService.btnPress = true;
    this.modalService.onModelStates('addUser')
  }
}
