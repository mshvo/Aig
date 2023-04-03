// Angular Imports
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';



const MaterialComponents = [

    MatButtonModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    MatProgressBarModule
]
@NgModule({
    imports: [MaterialComponents],
    exports:[MaterialComponents]
})
export class MaterialModule {

}
