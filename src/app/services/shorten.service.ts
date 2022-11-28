import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShortenService {

  private ShortenUrl = environment.URL + "shorten";


  constructor(private http: HttpClient) {
  }

  getData(url: any) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("url", url);
    return this.http.get<any>(this.ShortenUrl, {params: queryParams})
  }

}
