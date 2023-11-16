import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpModule } from './http.module';

@Injectable({
  providedIn: HttpModule,
  //providedIn: 'root'
})

export class UserInfoService {

  constructor(
    private http: HttpClient,
  ) { }

  loadData():Observable<any> {
    return this.http.get<any>('https://randomuser.me/api').pipe(
      map((data: { results: any[]; }) => {
        return data.results[0];
      }),
      map((userInfoRaw: { email: any; name: { first: string; last: string; }; }) => {
        return {
          emailAddress: userInfoRaw.email,
          name: userInfoRaw.name.first + " " + userInfoRaw.name.last,
        }
      })  
    )
  }
}
