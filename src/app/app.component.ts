import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebarClosed = true;

  onClickOutsideSidebar() {
    console.log();
    this.sidebarClosed = true;
  }

  onClickMenu() {
    this.sidebarClosed = false;
  }
}
