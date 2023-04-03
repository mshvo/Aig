import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'articles';
    public demo1TabIndex = 0;

    constructor(private router:Router)
    {
      
    }
    public onTabclick() {
  
      switch(this.demo1TabIndex) { 
        case 0: { 
          
           this.router.navigate(['/category']); 
           
           break; 
        } 
        case 1: { 
          this.router.navigate(['/favorite-articles']); 
           break; 
        } 
        default: { 
          this.router.navigate(['/category']); 
           break; 
        } 
        
     } 
    
    }
 

}
