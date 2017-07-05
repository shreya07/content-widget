import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  public getContent(filePath: string) {
    return this.http.get(filePath).toPromise().then(res => {
      console.log(res);
      return res.json();
    });
  }

}
