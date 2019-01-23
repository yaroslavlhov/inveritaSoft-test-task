import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { LayoutSidebarComponent } from './components/layout-sidebar/layout-sidebar.component';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCalendar, far } from '@fortawesome/free-regular-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


// library.add(far, faCalendar);
@NgModule({
  imports: [
    CommonModule,
    // FontAwesomeModule
  ],
  declarations: [LayoutHeaderComponent, LayoutSidebarComponent],
  exports: [LayoutHeaderComponent, LayoutSidebarComponent]
})
export class LayoutModule { }
