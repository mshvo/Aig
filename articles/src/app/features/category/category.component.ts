import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ConfigData } from 'src/app/common/models/config/config.models';
import { _CategoryService } from 'src/app/common/services/categories';
import { GlobalEventsManager } from 'src/app/common/services/eventManager/globalEventManager';
import{Category} from '../../common/models/category/category.model'


@Component({
    moduleId: module.id,
    selector: 'category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.scss']
})
export class CategoryComponent {
    private sub!:Subscription;

    
    getDataSubscription!: Subscription;
    configData!:ConfigData;
    categoryList:Category[] = [] ;
    finishedLoading !:boolean;
    loading:boolean = false;
 

     constructor(private router:Router,@Inject('_CategoryService') private categoryService:_CategoryService,private  globalEventsManger:GlobalEventsManager, private toastrService: ToastrService)
    {      
            this.globalEventsManger.getRelevantConfig().subscribe(
                data => {        
                    this.configData  = data;           
                    this.getCategories();           
            })
    }

   


    getCategories=()=>
    {   
      this.getDataSubscription  =  this.categoryService.getCategories().subscribe(
        data => {    
           
          this.success(data);
        },
        error => {
             this.error(error);
            
        });
    }



      success=(data:any)=>
      {
              this.finishedLoading = true; 
              this.loading = false;

              if(this.configData.ERRORS_SUC.filter(o => o.ERRORID == data.Error.error).length > 0)
              {
                     if(data.CategoryList.length == 0)
                     {
                       this.toastrService.error(data.Error.errorMsg).onHidden.subscribe(
                       data=>{}
                        ) ;
                     }
                     else
                     {
                        this.categoryList = [];
                        this.categoryList = data.CategoryList;

                       
                     
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
      this.toastrService.error(error).onHidden.subscribe(
       data=>{}
       ) ;
      
    }

}
