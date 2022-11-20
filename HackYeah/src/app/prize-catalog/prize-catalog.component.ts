import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from '../dashboard/dashboard.component';

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Cinema Tickets', count: 9, date: '19-11-2022' },
  { position: 2, name: 'Zara Voucher', count: 6, date: '18-10-2022' },
  { position: 3, name: 'MPK Tickets', count: 2, date: '05-09-2022' },
];
@Component({
  selector: 'app-prize-catalog',
  templateUrl: './prize-catalog.component.html',
  styleUrls: ['./prize-catalog.component.css']
})
export class PrizeCatalogComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'count', 'date'];



  constructor() { }

  ngOnInit(): void {
  }

}
