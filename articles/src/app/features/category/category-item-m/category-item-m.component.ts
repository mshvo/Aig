import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import{Category} from '../../../common/models/category/category.model'

@Component({
    moduleId: module.id,
    selector: 'category-item-m',
    templateUrl: 'category-item-m.component.html',
    styleUrls: ['category-item-m.component.scss']
})
export class CategoryItemMComponent {


    @Input() categoryItem!:Category;

    constructor(private router:Router)
    {      
          
    }

    navigate=()=>
    {      
        this.router.navigate(['/articles',this.categoryItem.categoryID]);    
    }
}


