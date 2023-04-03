import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {CategoryRoutes} from './features/category/category.routes'
import{ArticleRoutes} from './features/articles/article/article.routes'
import{FavoriteRoutes} from './features/articles/favorite-articles/favorite-articles.route'
import{ArticlesRoutes} from './features/articles/articles.routes'

const routes: Routes = [

  ...CategoryRoutes,
  ...ArticleRoutes,
  ...FavoriteRoutes,
  ...ArticlesRoutes

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64] // [x, y]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }



