import { Component, OnInit } from '@angular/core';
import { GminaEntity } from '../types/GminaEntity';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'name', 'scoreTotal'];
  gminaByScore: GminaEntity[] = [
    {
      name: 'Zielonki',
      scoreTotal: 999000,
      rank: 1,
    },
    {
      name: 'Wieliczka',
      scoreTotal: 888000,
      rank: 2,
    },
    {
      name: 'Lubień',
      scoreTotal: 777000,
      rank: 3,
    },
    {
      name: 'Kamienica',
      scoreTotal: 666000,
      rank: 4,
    },
    {
      name: 'Mszana Dolna',
      scoreTotal: 555000,
      rank: 6,
    },
    {
      name: 'Limanowa',
      scoreTotal: 444000,
      rank: 7,
    },
    {
      name: 'Liszki',
      scoreTotal: 333000,
      rank: 8,
    },
    {
      name: 'Myślenice',
      scoreTotal: 222000,
      rank: 9,
    },
    {
      name: 'Wiśniowa',
      scoreTotal: 111000,
      rank: 8,
    },
    {
      name: 'Grybów',
      scoreTotal: 55000,
      rank: 10,
    },
    {
      name: 'Korzenna',
      scoreTotal: 22000,
      rank: 11,
    },
    {
      name: 'Kraków',
      scoreTotal: 18000,
      rank: 12,
    },
    {
      name: 'Chełmek',
      scoreTotal: 16000,
      rank: 13,
    },
    {
      name: 'Koszyce',
      scoreTotal: 12000,
      rank: 14,
    },
    {
      name: 'Proszowice',
      scoreTotal: 10000,
      rank: 15,
    },
    {
      name: 'Bolesław',
      scoreTotal: 8000,
      rank: 15,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
