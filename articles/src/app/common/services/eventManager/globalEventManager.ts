import { Injectable, DebugElement } from '@angular/core';
import { BehaviorSubject,Observable,of } from "rxjs";
import {MAIN} from "../../../shared/constant/main"; 
import {ConfigData} from "../../models/config/config.models";
import { SsRepository } from '../../../shared/repository/ssRepository';
import {SsStorageRepository} from '../../../shared/repository/ssStorageRepository'
import { Router, ActivatedRoute } from '@angular/router';
import {Env} from '../env/env';
import { map,flatMap } from 'rxjs/operators';




@Injectable()
export class GlobalEventsManager {
    instanceRepository     = SsRepository.getInstance();
    instanceStorage       = SsStorageRepository.getInstance();
  
    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();

    private _showLoginButton: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
    public showLoginButtonEmitter: Observable<boolean> = this._showLoginButton.asObservable();
    

    private _selectedNavTab: BehaviorSubject<number> = new BehaviorSubject<number>(-1); 
    public selectedNavTabEmitter: Observable<number> = this._selectedNavTab.asObservable();

    private _accordionOpenFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false); 
    public accordionOpenFlag: Observable<boolean> = this._accordionOpenFlag.asObservable();

    constructor(private configData:ConfigData,private env:Env) {
            
       this.instanceRepository     = SsRepository.getInstance();
       this.instanceStorage       = SsStorageRepository.getInstance();
    }


  
   setRelevantConfig(envType:string):Observable<ConfigData>
   {
     let dataJsonConfig = this.instanceRepository.getItem("ssEnvType")[0].data;
         if(this.instanceStorage.getItem("configData" + envType) === undefined || this.instanceStorage.getItem("configData" + envType) === null) 
         {
              

              MAIN.ConfigType.ConfTypeUnique.DOMAINURL = dataJsonConfig.domainurl; 
              MAIN.ConfigType.ConfTypeUnique.DOMAINURL_FAQ = dataJsonConfig.domainurl_faq;
              MAIN.ConfigType.ConfTypeUnique.ENV = dataJsonConfig.env;
              this.instanceStorage.setItem("configData" + envType,MAIN.ConfigType); 
            
         }
            //f 
          
         return of(MAIN).pipe(map(function(data)
         {
            let confData = new ConfigData();
            MAIN.ConfigType.ConfTypeUnique.DOMAINURL = dataJsonConfig.domainurl; 
            MAIN.ConfigType.ConfTypeUnique.DOMAINURL_FAQ = dataJsonConfig.domainurl_faq;
            MAIN.ConfigType.ConfTypeUnique.ENV = dataJsonConfig.env;
            confData = MAIN.ConfigType;
            return confData;
          }));
        
   }
   
    
   
    setEnvRepository():Observable<string>
    {
          let instanceRepository     = SsRepository.getInstance();
          let x: BehaviorSubject<string> = new BehaviorSubject<string>(""); 
   
          if(instanceRepository.getItem("ssEnvType").length !== 0)
            {
            
             return   of( instanceRepository.getItem("ssEnvType")[0].data.env);
            }
          return  this.setEnvType().pipe(map(function(data)
          {
                 instanceRepository.setItem("ssEnvType",data);
                 return data.env;
        } ));
       
         
    }


    

    getRelevantConfig =() : Observable <ConfigData> =>
    {
      
      return   this.setEnvRepository().pipe(flatMap(res =>
      {
       
         return  this.setRelevantConfig(res);  
          //return  data;
      }));   
    }


    setEnvType=():Observable<any>=>
    {

      
      return   this.env.load().pipe(map(res =>res));
      
        
    }
   
    
}
       

