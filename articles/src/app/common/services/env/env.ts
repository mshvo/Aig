import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { GlobaltRestService} from '../globalRestService/globalRestService.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
 export class Env extends GlobaltRestService {
 constructor(private http: HttpClient) {
    super(http);
 }

 load(): Observable<any>
  {
    return   this.getData3<any>('configEnv.json');
  }

};