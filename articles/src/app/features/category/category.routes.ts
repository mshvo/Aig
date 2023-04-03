import { Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AuthGuard } from '../../shared/guards/auth.guard';


export const CategoryRoutes: Routes = [
  { path: '',  component: CategoryComponent,canActivate: [AuthGuard]},
  { path: 'category/:id',  component: CategoryComponent,canActivate: [AuthGuard]  },
  { path: 'category',  component: CategoryComponent,canActivate: [AuthGuard]  }
 

];
