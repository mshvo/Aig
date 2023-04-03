import { Routes } from '@angular/router';
import { FavoriteArticlesComponent} from './favorite-articles.component';
import { AuthGuard } from '../../../shared/guards/auth.guard';


export const FavoriteRoutes: Routes = [
  { path: 'favorite-articles/:id',  component: FavoriteArticlesComponent,canActivate: [AuthGuard]  },
  { path: 'favorite-articles',  component: FavoriteArticlesComponent,canActivate: [AuthGuard]  }
];