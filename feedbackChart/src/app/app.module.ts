import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AllCommentsComponent } from './Components/all-comments/all-comments.component';
import { RoutingModule } from './routing/routing.module';
import { HttpClientModule }    from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AllCommentsComponent
  ],
  imports: [
    BrowserModule, RoutingModule, HttpClientModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
