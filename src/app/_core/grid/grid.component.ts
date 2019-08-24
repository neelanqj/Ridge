import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()
  columnDefs: any[]; 
  @Input()
  rowData: any;
  @Output()
  refreshData : EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  refresh() {
    this.refreshData.emit(true);
  }

}