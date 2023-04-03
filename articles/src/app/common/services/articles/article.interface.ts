import { Observable } from 'rxjs';
import {ArticlesRes} from '../../models/articles/article.model'
import { ErrorObject } from '../../models/error/error.model';


 
export interface _ArticleService {
     getArticlesByCategoryID(categoryId:number): Observable<ArticlesRes>;
     addToFavorites(articleId:number): Observable<ErrorObject>;
     getFavoriteArticles(): Observable<ArticlesRes>;
     removeFromFavorites(articleId:number): Observable<ErrorObject>;
     
}