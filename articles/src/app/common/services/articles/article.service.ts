import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Article,ArticlesRes} from '../../models/articles/article.model'
import {TableDataArticles} from '../../../shared/constant/articles';
import { map } from 'rxjs/operators';
import {_ArticleService } from './article.interface';
import { ErrorObject } from '../../models/error/error.model';
import { ErrorInfo } from 'src/app/shared/constant/error-info';
import { HttpClient } from '@angular/common/http';
import { GlobalEventsManager } from '../eventManager/globalEventManager';
import { ConfigData } from '../../models/config/config.models';
import { GlobaltRestService } from '../globalRestService/globalRestService.service';



 @Injectable()
    export class ArticleService extends GlobaltRestService implements _ArticleService {
        domainUrl:string = "";
        configData!:ConfigData;
      
        constructor(private http:HttpClient,private globalEventsManger:GlobalEventsManager){
          super(http);
               
             this.globalEventsManger.getRelevantConfig().subscribe(
                data => {      
                       this.configData  = data;
                       return this.configData;
                       
                },
                error => {
                    
                })
      
       }

       getArticlesByCategoryID(categoryId:number): Observable<ArticlesRes>
       {       
           this.domainUrl     =  this.configData.ConfTypeUnique.DOMAINURL +  "api/articles/GetArticlesByCategoryID/" + categoryId;
           
           return this.getData3<any>( this.domainUrl).pipe(map(function(data)
           {           
                let res            = new ArticlesRes();
                
                res.ArticleList    = data.articles;
                res.Error          = data.err;
                return res;
               
            }
          ));

       }

       addToFavorites(articleId:number): Observable<ErrorObject>
       {       
           this.domainUrl     =  this.configData.ConfTypeUnique.DOMAINURL +  "api/articles/AddArticleToFavorites/" + articleId;
           
           return this.patchData1<any>(this.domainUrl).pipe(map(function(data)
           {           
                let  oErrorObject = data;

                return oErrorObject;
            }
          ));

       }

       getFavoriteArticles(): Observable<ArticlesRes>
       {       
           this.domainUrl     =  this.configData.ConfTypeUnique.DOMAINURL +  "api/articles/GetFavoriteArticles";
           
           return this.getData3<any>( this.domainUrl).pipe(map(function(data)
           {       
            
                 let res            = new ArticlesRes();
                 res.ArticleList    = data.articles;
                 res.Error          = data.err;
                return res;
               
            }
          ));

       }
       
    
        
       removeFromFavorites(articleId:number): Observable<ErrorObject>
       {       
           this.domainUrl     =  this.configData.ConfTypeUnique.DOMAINURL +  "api/articles/DeleteArticleFromFavorites/" + articleId;
           
           return this.patchData1<any>(this.domainUrl).pipe(map(function(data)
           {           
                let  oErrorObject = data;

                return oErrorObject;
            }
          ));

       }
        


  
}