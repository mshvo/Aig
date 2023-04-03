import { RepItem } from './ssRepositoryItem';


export  class SsRepository<T> //generic and singletone object
{
    private static _instance: SsRepository<any>;
    private constructor() { this.oRepItems = []; }
    private oRepItems: RepItem<T>[];
    setItem = (key: string, data: T) =>
    {   
        let oRep;  
        if(this.getItem(key) == undefined || this.getItem(key).length == 0)
        {
            oRep = new RepItem(data,key)
            this.oRepItems.push(oRep)
        }
        else 
        {
          this.oRepItems.filter(o=> o.key == key)[0].data= data
       }
    }
    getItem = (key: string) => {

        return this.oRepItems.filter(o=> o.key == key) ;
      
    }

    static getInstance() {
        if (!this._instance) {
            this._instance = new SsRepository();
          
        }
        return SsRepository._instance;
    }    
}