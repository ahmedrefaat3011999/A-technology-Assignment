import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';
import { TabledataServiceService } from 'src/app/srvices/tableData/tabledata-service.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  user=[];
  first = 0;

  rows = 10;
    constructor(private DataService:TabledataServiceService ) {}

    ngOnInit() {
        this.getData();
    }
  getData() {
    this.DataService.getData().subscribe(data =>this.user = data)
  }

  pageChange(event:any) {
    this.first = event.first;
    this.rows = event.rows;
}

  
  customSort(event?: SortEvent) {
    event?.data?.sort((data1?, data2?) => {
      let value1 = data1?.[event?.field as keyof typeof data1];
      let value2 = data2?.[event?.field as keyof typeof data2];
      let result = null;
  
      if (value1 === null && value2 !== null) result = -1;
      else if (value1 !== null && value2 === null) result = 1;
      else if (value1 === null && value2 === null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') {
        result = value1.localeCompare(value2);
      } else {
        result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
      }
  
      return (event?.order ?? 1) * result;
    });
  }

}
