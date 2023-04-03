import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Article,ArticlesRes} from '../../models/articles/article.model'
import {TableDataArticles} from '../../../shared/constant/articles';
import { map } from 'rxjs/operators';
import {_ArticleService } from './article.interface';
import { ErrorObject } from '../../models/error/error.model';
import { ErrorInfo } from 'src/app/shared/constant/error-info';



 @Injectable()
    export class ArticleServiceFake implements _ArticleService {
        
        getArticlesByCategoryID(categoryId:number): Observable<ArticlesRes>
        {      
            let articles         = new ArticlesRes(); 
            return of(TableDataArticles).pipe(map(function(data)
            {
                articles.ArticleList = data.ArticleList.filter(o=>o.categoryID == categoryId);
                articles.Error = data.Error;
                return articles;

             }))

        }

        getFavoriteArticles(): Observable<ArticlesRes>
        {
            let articles         = new ArticlesRes(); 
            return of(TableDataArticles).pipe(map(function(data)
            {
                return data;
            }))
        }

        addToFavorites(articleId:number): Observable<ErrorObject>
        {
            return of(ErrorInfo).pipe(map(function(data)
            {
                let oErrorObject = new ErrorObject();
                oErrorObject = data;
 
                return oErrorObject;
             
             }))
        }

        removeFromFavorites(articleId:number): Observable<ErrorObject>
        {
            return of(ErrorInfo).pipe(map(function(data)
            {
                let oErrorObject = new ErrorObject();
                oErrorObject = data;
 
                return oErrorObject;
             
             }))

        }

  
}