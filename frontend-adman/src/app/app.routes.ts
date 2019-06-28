import { Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailsComponent } from './components/userlist/userdetails/userdetails.component';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'usersList'
  },
  {
    path: 'usersList',
    component: UserlistComponent
  },
  {
    path: 'userDetails/:id',
    component: UserdetailsComponent,
  }
];
