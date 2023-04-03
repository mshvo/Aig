import { Observable } from 'rxjs';
import {CategoryRes} from '../../models/category/category.model'


 
export interface _CategoryService {
     getCategories(): Observable<CategoryRes>;
     
}