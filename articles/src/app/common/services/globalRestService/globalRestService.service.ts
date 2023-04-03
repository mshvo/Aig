import { HttpClient,HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class  GlobaltRestService{
  protected headers = new HttpHeaders(); 
 
  constructor(protected _http: HttpClient){
  }




  protected  getData3<T1>(domainUrl:string):Observable<T1>{


   
    return   this._http.get(domainUrl).pipe(map(resp=>resp as T1))
     
  }  
 

  protected  getData4<T1>(domainUrl:string,model:T1):Observable<T1>{

    let headers = new HttpHeaders();
    
    return   this._http.get(domainUrl).pipe(map(resp=>resp as T1))
     
  } 


     /// <summary>
   ///generic method for http post. 
   /// request domain
   /// </summary>
   /// <returns>
   /// array generic object of http response
   /// </returns>
   /// Written by : moshes
   /// Date : 09/29/2017

   protected  postData1<T1>(domainUrl:string):Observable<T1>{
    let headers = new HttpHeaders();
    return this._http.post(domainUrl, { headers: headers }).pipe(map(resp=>resp as T1));
  }


 
  
   /// <summary>
   ///generic method for http post. 
   /// request domain
   /// </summary>
   /// <returns>
   ///  generic object of http response
   /// </returns>
   /// Written by : moshes
   /// Date : 09/29/2017
   postData3<T1>(domainUrl:string,model:T1):Observable<T1>{
    //let headers = new HttpHeaders(); 
    return this._http.post(domainUrl,model ,{ headers: this.headers }).pipe(map(resp=>resp as T1));
  }


  protected  patchData1<T1>(domainUrl:string):Observable<T1>{
    let headers = new HttpHeaders();
    return this._http.patch(domainUrl, { headers: headers }).pipe(map(resp=>resp as T1));
  }
  
} 