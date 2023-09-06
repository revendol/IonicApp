import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface ApiResult {
  success: boolean;
  message: string;
  data: {
    addresses: { 
      addresses: any[]
    }
  };

}


@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getAddressDataMethod(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/admin/qr-code/all?type=add`);
  }

  postPostCodeMethod(postCode:string ): Observable<ApiResult>{
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    let body ={
      postcode:postCode,  
    }
    return this.http.post<ApiResult>('https://api.nearestlaundry.com/api/v1/service-area',body,{headers:header});
  }


  postAddressDataMethod(title:string){
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    let body ={
      title:title,
      link:title,
      type:"add"
    }
    return this.http.post(`${environment.baseUrl}/admin/qr-code/add`,body,{headers:header});
  }
}
