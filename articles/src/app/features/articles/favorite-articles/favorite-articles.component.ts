import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/common/models/articles/article.model';
import { ConfigData } from 'src/app/common/models/config/config.models';
import { _ArticleService } from 'src/app/common/services/articles';
import { GlobalEventsManager } from 'src/app/common/services/eventManager/globalEventManager';

@Component({
    moduleId: module.id,
    selector: 'favorite-articles',
    templateUrl: 'favorite-articles.component.html',
    styleUrls: ['favorite-articles.component.scss']
})
export class FavoriteArticlesComponent {
   
    private sub!:Subscription;
    getDataSubscription!: Subscription;
    configData!:ConfigData;
    articleList:Article[] = [] ;
    finishedLoading !:boolean;
    loading:boolean = false;
    selectedCategoryId!:number;
    model: any;

    constructor(private route: ActivatedRoute,private router:Router,@Inject('_ArticleService') private articleService:_ArticleService,private  globalEventsManger:GlobalEventsManager, private toastrService: ToastrService)
    {   
        this.sub = this.route.params.subscribe(params => {
                      this.globalEventsManger.getRelevantConfig().subscribe(
                data => {      
                        this.configData  = data;   
                        this.getFavoriteArticles();                   
                })
        }) 
    }

    getFavoriteArticles= () => {
        const myObserver = {
          next: (data:any) => this.success(data),
          error: (error:any) => this.error(error),
           };
      
        this.getDataSubscription = this.articleService.getFavoriteArticles().subscribe(myObserver);
    };


    removeFromFavorite=(event:any)=>
    {
       let articleId = event;

       const myObserver = {
              next: (data:any) => this.successRemove(data),
              error: (error:any) => this.errorRemove(error),
       };
          
       this.getDataSubscription = this.articleService.removeFromFavorites(articleId).subscribe(myObserver);

    }
    


    success=(data:any)=>
    {
              this.finishedLoading = true; 
              this.loading = false;
              if(this.configData.ERRORS_SUC.filter(o => o.ERRORID == data.Error.error).length > 0)
              {
                     this.articleList = [];
                     this.articleList = data.ArticleList;
                     if(data.ArticleList.length == 0)
                     {
                       this.toastrService.error(data.Error.errorMsg).onHidden.subscribe(
                       data=>{

                          }
                        ) ;
                     }
                      
              }
              else
              { 
                this.loading = false;
                this.toastrService.error(data.Error.errorMsg).onHidden.subscribe(
                    data=>{
                       
                       }
                    ) ;
                 
              }
    }

    
    error=(error:any)=>
    {
      this.finishedLoading = true; 
      this.toastrService.error(error.Error.ErrorDescription).onHidden.subscribe(
       data=>{}
       ) ;     
    }


    successRemove=(data:any)=>
    {
            this.finishedLoading = true; 
            this.loading = false;
            if(this.configData.ERRORS_SUC.filter(o => o.ERRORID == data.err.error).length > 0)
            {
                this.loading = false;
                this.toastrService.success(data.err.errorMsg).onHidden.subscribe(
                    data=>{
                        this.getFavoriteArticles();
                       }
                    ) ;
            }
            else
            { 
              this.loading = false;
              this.toastrService.error(data.err.errorMsg).onHidden.subscribe(
                  data=>{
                     
                     }
                  ) ;
               
            }
    }

    errorRemove=(error:any)=>
    {
      this.finishedLoading = true; 
      this.toastrService.error(error.err.errorMsg).onHidden.subscribe(
       data=>{}
       ) ;
      
    }

   
}
