

import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import {Category,CategoryRes} from '../../models/category/category.model'
import {TableDataCategories} from '../../../shared/constant/categories';

import { map } from 'rxjs/operators';
import { _CategoryService } from './category.interface';



 @Injectable()
    export class CategoryServiceFake implements _CategoryService {
        
        getCategories(): Observable<CategoryRes>
        {       
            return of(TableDataCategories).pipe(map(function(data)
            {
              return data;

             }))

        }

  
}