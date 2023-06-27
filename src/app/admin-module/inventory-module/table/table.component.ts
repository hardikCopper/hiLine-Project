import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/Common/Services/fetch-data.service';
import { jobDataType } from 'src/app/Common/Types';
import { ModalService } from 'src/app/Common/Services/modal.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  data: jobDataType[] = [];
  groupCheckBoxState = false
  constructor(private fetchDataService: FetchDataService, private modalService: ModalService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.fetchDataService.fetchJobData()
    this.fetchDataService.getJobData().subscribe(data => {
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
    this.groupCheckBoxState = !this.groupCheckBoxState;
    this.data.forEach(item => {
      item.checkboxState = this.groupCheckBoxState;
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
  changeCheckBoxState(index: number) {
    this.data[index].checkboxState = !this.data[index].checkboxState;
  }
}
