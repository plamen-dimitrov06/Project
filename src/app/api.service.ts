import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class APIService {
 constructor(private httpClient: HttpClient) {}
  getData(path): Observable<any> {
    return this.httpClient.get(path);
  }
}
