import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IOffer } from '../models/offer.interface';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getData(): Observable<IOffer[]> {
    return this.http
      .get('/assets/db.json')
      .pipe(
        map((response: Response) => JSON.parse(response.text())),
        catchError((error: any) => of(error))
      );
  }
}
