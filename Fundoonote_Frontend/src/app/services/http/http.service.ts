import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl=environment.baseurl;

  constructor(private httpClient: HttpClient) { }

    postService(url: String, reqdata: any, token: boolean=false, httpOptions: any={})
    {
        return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions);
    }

    putServices(url: string, reqdata: any, token: Boolean = true, httpOptions: any = {}) 
    {
      return this.httpClient.put(this.baseUrl+url,reqdata, token && httpOptions);
    }

    getService(url:string, token:boolean=false, httpOptions: any = {} ){
      return this.httpClient.get(this.baseUrl+url,token && httpOptions)
    }

}
