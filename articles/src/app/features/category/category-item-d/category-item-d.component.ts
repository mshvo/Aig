import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/common/models/category/category.model';

@Component({
    moduleId: module.id,
    selector: 'category-item-d',
    templateUrl: 'category-item-d.component.html',
    styleUrls: ['category-item-d.component.scss']
})
export class CategoryItemDComponent {
  
    @Input() categoryItem!:Category;

    
    constructor(private router:Router)
    {      
          
    }

    
    navigate=()=>
    {      
        this.router.navigate(['/articles',this.categoryItem.categoryID]);    
    }
}
