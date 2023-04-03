
export class SsStorageRepository<T> //save/get local storage
{
    private static _instance: SsStorageRepository<any>;
    private constructor() { }
 
    setItem = (key:string, data:T) => {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getItem = (key: string) => {
        const item = localStorage.getItem(key);
        if (item === null) {
            return null;
        }
        return JSON.parse(item); 
    }
    removeItem = (key: string) => {
        localStorage.removeItem(key);
    }
     
     removeAllItems = () => {
        localStorage.clear();
    }
    static getInstance() {
        if (!SsStorageRepository._instance) {
            SsStorageRepository._instance = new SsStorageRepository();

        }
        return SsStorageRepository._instance;
    }
}