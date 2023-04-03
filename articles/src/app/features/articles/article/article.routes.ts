import { Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { AuthGuard } from '../../../shared/guards/auth.guard';


export const ArticleRoutes: Routes = [
  { path: 'article/:id',  component: ArticleComponent,canActivate: [AuthGuard]  },
  { path: 'article',  component: ArticleComponent,canActivate: [AuthGuard]  }
];
