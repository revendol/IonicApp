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
export class SignatureService {

  constructor(private http: HttpClient) { }

  getSignatureDataMethod(): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${environment.baseUrl}/admin/qr-code/all?type=img`);
  }
  postSignatureDataMethod(image: string) : Observable<ApiResult>{
    const header = new HttpHeaders({
      contentType: 'application/json'
    })
    let body ={
      title:"qrType",
      link:image,
      type:"img"
    }
    return this.http.post<ApiResult>(`${environment.baseUrl}/admin/qr-code/add`, body, { headers: header });
  }
}
