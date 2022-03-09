import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private httpClient: HttpClient) { }

  public getVille(ville: string): Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q='+ville+'&appid=d1f1192c61bff34c70979e832a2dbab3');
  }
}