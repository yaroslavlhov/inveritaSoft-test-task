import { Component, OnInit } from '@angular/core';
import { SIDEBAR_ITEMS } from './model/sidebar.model';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  links = SIDEBAR_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
