import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }

  predictInterests(userName: string) {
    //return this.http.post<any>('http://localhost:5000/predict', { userName });
    return []
  }
}
