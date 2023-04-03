import { Component, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../../common/models/articles/article.model';
import { _ArticleService } from '../../common/services/articles/index';
import { ConfigData } from 'src/app/common/models/config/config.models';
import { ToastrService } from 'ngx-toastr';
import { GlobalEventsManager } from 'src/app/common/services/eventManager/globalEventManager';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'articles',
    templateUrl: 'articles.component.html',
    styleUrls: ['articles.component.scss']
})
export class ArticlesComponent {
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
            this.selectedCategoryId =+ params['id'];
            this.globalEventsManger.getRelevantConfig().subscribe(
                data => {      
                        this.configData  = data;
                        this.getArticlesByCategoryId();

                })

        }) 

    }


      addToFavorite=(event:any)=>
      {
        
        let articlelId = event;

         const myObserver = {
                next: (data:any) => this.successInsert(data),
                error: (error:any) => this.errorInsert(error),
         };
            
         this.getDataSubscription = this.articleService.addToFavorites(articlelId).subscribe(myObserver);

      }


      getArticlesByCategoryId= () => {
        const myObserver = {
          next: (data:any) => this.success(data),
          error: (error:any) => this.error(error),
        };
      
        this.getDataSubscription = this.articleService.getArticlesByCategoryID(this.selectedCategoryId).subscribe(myObserver);
      };



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


    successInsert=(data:any)=>
    {
            this.finishedLoading = true; 
            this.loading = false;
            if(this.configData.ERRORS_SUC.filter(o => o.ERRORID == data.err.error).length > 0)
            {
                this.loading = false;
                this.toastrService.success(data.err.errorMsg).onHidden.subscribe(
                    data=>{
                        this.getArticlesByCategoryId();
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

    errorInsert=(error:any)=>
    {
      this.finishedLoading = true; 
      this.toastrService.error(error.err.error).onHidden.subscribe(
       data=>{}
       ) ;
      
    }

}
