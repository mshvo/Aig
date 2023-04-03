


import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Category,CategoryRes} from '../../models/category/category.model'
import { map } from 'rxjs/operators';
import { _CategoryService } from './category.interface';
import { ConfigData } from '../../models/config/config.models';
import { HttpClient } from '@angular/common/http';
import { GlobalEventsManager } from '../eventManager/globalEventManager';
import { GlobaltRestService } from '../globalRestService/globalRestService.service';



 @Injectable()
    export class CategoryService  extends GlobaltRestService  implements _CategoryService {

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

       
        
        getCategories(): Observable<CategoryRes>
        {       
            this.domainUrl     =  this.configData.ConfTypeUnique.DOMAINURL +  "api/Category/GetCategories";
            
            return this.getData3<any>( this.domainUrl).pipe(map(function(data)
            {           
                 let res            = new CategoryRes();
                 
                 res.CategoryList   = data.categories;
                 res.Error          = data.err;
                 return res;
                
             }
           ));

        }

  
}