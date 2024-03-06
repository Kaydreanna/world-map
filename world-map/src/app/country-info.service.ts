import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountryInfoService {
  private url =
    'http://api.worldbank.org/v2/country/{0}?format=json&username=kcas262';
  constructor(private http: HttpClient) {}
  getPosts(country: string) {
    var newUrl = this.url.replace('{0}', country);
    var info = this.http.get(newUrl);
    console.log('info', info);
    return info;
  }
}
