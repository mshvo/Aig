import { Component, Input ,Inject, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../../../common/models/articles/article.model';


@Component({
    moduleId: module.id,
    selector: 'article',
    templateUrl: 'article.component.html',
    styleUrls: ['article.component.scss']
})
export class ArticleComponent {

    @Input()  articleItem!:Article;
    @Input()  typeTab!:number;
    @Input()  indexRowParent!:number;
    @Input()  isShowProgressBar!:number
    @Output() selectedItem!: EventEmitter<number>; 
    @Output() selectedItemToRemove!: EventEmitter<number>; 
    
 

    constructor(private router:Router)
    {      
        this.selectedItem         = new EventEmitter<number>();
        this.selectedItemToRemove = new EventEmitter<number>();
    }

    addToFavorite=()=>
    {
        this.isShowProgressBar = 1;
        this.selectedItem.emit(this.articleItem.articleID);
    }
   
    removeFromFavorite=()=>
    {
        this.isShowProgressBar = 1;
        this.selectedItemToRemove.emit(this.articleItem.articleID);
    }
}
