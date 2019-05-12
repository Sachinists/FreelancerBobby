import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../Components/dashboard/dashboard.component';
import { AllCommentsComponent } from '../Components/all-comments/all-comments.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent
  },
  { 
    path: 'allComments', 
    component: AllCommentsComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
