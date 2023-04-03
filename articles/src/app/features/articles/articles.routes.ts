import { Routes } from '@angular/router';
import { ArticlesComponent} from './articles.component';
import { AuthGuard } from '../../shared/guards/auth.guard';


export const ArticlesRoutes: Routes = [
  { path: 'articles/:id',  component: ArticlesComponent,canActivate: [AuthGuard]  },
  { path: 'articles',  component: ArticlesComponent,canActivate: [AuthGuard]  }
];
