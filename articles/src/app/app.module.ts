import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CategoryComponent} from './features/category/category.component'
import{CategoryItemMComponent} from './features/category/category-item-m/category-item-m.component'
import{CategoryItemDComponent} from './features/category/category-item-d/category-item-d.component'
import {FavoriteArticlesComponent} from './features/articles/favorite-articles/favorite-articles.component';
import{ArticlesComponent} from './features/articles/articles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module'
import{CategoryServiceFake,_CategoryService,CategoryService} from './common/services/categories'
import{ArticleServiceFake,_ArticleService,ArticleService} from './common/services/articles'
import {ArticleComponent} from './features/articles/article/article.component'
import{AuthGuard} from './shared/guards/auth.guard'
import { GlobalEventsManager } from './common/services/eventManager/globalEventManager';
import { ConfigData } from './common/models/config/config.models';
import { Env } from './common/services/env/env';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CategoryComponent,
    FavoriteArticlesComponent,
    ArticlesComponent,
    CategoryItemMComponent,
    CategoryItemDComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard,
    ConfigData,
    GlobalEventsManager,
    Env,
    { provide: '_CategoryService', useClass: CategoryService},
    { provide: '_ArticleService', useClass: ArticleService}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
