import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  configUrl = 'http://localhost:3000/data';

get() {
  return this.http.get(this.configUrl);
}

delete(path: string) {
  return this.http.delete(this.configUrl + "/" + path);
}
  

}
