import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



export interface ApiResult {
  success: boolean;
  message: string;
  data: any[];

}
@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private http: HttpClient) { }


  getQrDataMethod(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseUrl}/admin/qr-code/all?type=qr`);
  }

  postQrDataMethod(qrType:string, qrValue:string ){
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    let body ={
      title:qrType,
      link:qrValue,
      type:"qr"
    }
    return this.http.post(`${environment.baseUrl}/admin/qr-code/add`,body,{headers:header});
  }
}
