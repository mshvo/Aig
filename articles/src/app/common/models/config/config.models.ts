import { Injectable } from '@angular/core';

@Injectable()
export class ConfigData
{
  
    ERRORS_SUC!: {
        ERRORID: string;
    }[];
    ERRORS_FAIL_APP!: {
        ERRORID: number;
        DESC: string;
        MSG: string;
    }[];
    ERRORS_FAIL!: {
        ERRORID: string;
    }[];
    
    ConfTypeUnique!: {
        DOMAINURL: string;
        DOMAINURL_FAQ: string;
        ENV: string;
     
    };
}